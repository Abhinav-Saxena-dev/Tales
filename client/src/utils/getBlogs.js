import axios from 'axios';


const getBlogs = async (page) => {

const URL = `https://api.theinnerhour.com/v1/customers/resources/articles/list?page=${page}&limit=10`

    try{
        const data = await axios.get(URL)
        return data
    }catch(err){
        console.log(err);
        return {msg : err}
    }
}

export default getBlogs;