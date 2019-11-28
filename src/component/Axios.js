import axios from 'axios'
let host = 'http://139.196.102.62:3000'
function AxiosGet(url) {
    return new Promise((resolve, reject) => {
        axios.get(host+url)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err);
            })
    });
}

export { AxiosGet}