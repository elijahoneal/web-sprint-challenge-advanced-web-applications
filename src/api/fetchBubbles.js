import {axiosWithAuth} from '../helpers/axiosWithAuth'


export const fetchBubbles = () => {
    return  axiosWithAuth().get('/colors')
    .then(res => {
      console.log(res)
      setColorList(res.data)
    })
    .catch(err => {console.log(err)} )
}