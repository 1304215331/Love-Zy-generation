import axios from 'axios'
let srt:string = 'http://localhost:8008'
let  requestGet = (url:string,params:object)=>{
    return new Promise(res=>{
        axios({
            url:`${srt}${url}`,
            params,
            method:'GET'
        }).then(data=>res(data.data))
    })
}
let requestPost = (url:string,data:object)=>{
    return new Promise(res=>{
        axios({
            url:`${srt}${url}`,
            data,
            method:'POST'
        }).then(data=>res(data.data))
    })
}
export {requestGet,requestPost}