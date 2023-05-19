import axios from 'axios';

const URL = "https://api.theinnerhour.com/v1/blogdetail/"

const getBlogData = async (slug) => {
    try{
        const data = await axios.get(URL + slug)
        return data
    }catch(err){
        console.log(err);
        return {msg : err}
    }
}

export default getBlogData;