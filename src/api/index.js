import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use(function (res) {
  return res.data;
});
export let getSlider = () =>{
 return axios.get('/slider')
};
export let getHotCar =() =>{
  return axios.get('/hot')
};
export let getCarList =() =>{
  return axios.get('/car')
};
export let removeCar =(id)=>{
   return axios.delete(`/car?id=${id}`)
};
export let findCar = (id)=>{
  return axios.get(`/car?id=${id}`)
};
  export let updateCar =(id,data)=>{
   return axios.put(`/car?id=${id}`,data)
};
  export let addCar = (data)=>{
    return axios.post('/car',data)
  };

  export let getAll = ()=>{
    return axios.all([getSlider(),getHotCar()]);
  };

  export let pagination =(offset)=>{
    return axios.get(`/page?offset=${offset}`)
  };
