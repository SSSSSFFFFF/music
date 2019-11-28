import axios from 'axios'
function AxiosGet(url) {
    axios.get(url)
    .then(res => {
        return res
    })
    .catch(err => {
        return err; 
    })
}
function AxiosPost(url,params) {
    axios.post(url,params)
    .then(res => {
        return res
    })
    .catch(err => {
        return err;
    })
}

export { AxiosGet, AxiosPost}