let http = require('http');
let fs= require('fs');
let url = require('url');
let slider = require('./slider');
function read(cb) {
  fs.readFile('./car.json','utf8',function (err,data) {
    if( data.length === 0|| err ){
      cb([]);
    }else{
      cb(JSON.parse(data))
    }
  })
}
function write(data,cb) {
   fs.writeFile('./car.json',JSON.stringify(data),cb)
}
let pageSize =5;
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") return res.end();
  let {pathname,query} = url.parse(req.url,true);
  if(pathname === '/page'){
    let offset = parseInt(query.offset) || 0;
    let hasMore = true;
    read(function (cars) {
      let result = cars.reverse().slice(offset,offset+pageSize);
      if(cars.length <= offset+pageSize){
        hasMore = false;
      }
      res.setHeader('Content-Type','application/json;charset:utf-8');
      res.end(JSON.stringify({hasMore,cars:result}))
    });
    return
  }
  if(pathname === '/slider'){
    res.setHeader('Content-Type','application/json;charset:utf-8');
    res.end(JSON.stringify(slider));
    return
  }
  if(pathname === '/hot'){
    read(function (cars) {
      let hot = cars.reverse().slice(0, 6);
      res.setHeader('Content-Type','application/json;charset:utf-8');
      setTimeout(()=>{
        res.end(JSON.stringify(hot))
      },1000)
    });
    return
  }
  if(pathname === '/car'){
    let id = parseInt(query.id);
    switch (req.method){
      case "GET":
        if(!isNaN(id)){
          read(function(cars){
            let car = cars.find(item =>item.carId === id);
            if(!car) car={};
            res.setHeader('Content-Type','application/json;charset:utf-8');
            res.end(JSON.stringify(car))
          })
        }else{
          read(function (cars) {
            res.setHeader('Content-Type','application/json;charset:utf-8');
            res.end(JSON.stringify(cars.reverse()))

          })
        }
        break;
      case 'POST':
        let str ='';
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
           let car = JSON.parse(str);
           read(function (cars) {
             car.carId = cars.length?cars[cars.length-1].carId+1:1;
             cars.push(car);
             write(cars,function () {
               res.end(JSON.stringify(car))
             })
           })
          return
        });
        break;
      case "PUT" :
        if(id){
          let str='';
          req.on('data',function (chunk) {
            str+=chunk
          });
          req.on('end',function () {
            let car = JSON.parse(str);
            read(function (cars) {
              cars = cars.map(item=>{
                if(item.carId === id){
                  return car
                }else{
                  return item
                }
              });
              write(cars,function () {
                res.end(JSON.stringify(car))
              })
            });
          })
        }
        break;
      case "DELETE" :
        read(function (cars) {
            cars = cars.filter(item => item.carId !== id);
            console.log(cars.length);
            write(cars,function () {
              res.end(JSON.stringify({}))
            })
          });
        break;
    }
      return
  }
}).listen(3000);
