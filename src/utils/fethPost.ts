import axios from "axios"

const api: string = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async()=>{
    const res = await axios.get(api,{withCredentials:true})
    const data = res.data
    return data
}

export const deletePost = async (id:number)=>{
    const res = await axios.delete(`${api}/${id}`,{withCredentials:true});
    const data = res.data ;
    return data;
}