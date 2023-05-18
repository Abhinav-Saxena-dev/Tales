import axios from 'axios';

const URL = "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"

const getBlogs = async () => {
    try{
        const data = await axios.get(URL)
        return data
    }catch(err){
        console.log(err);
        return {msg : err}
    }
}

export default getBlogs;