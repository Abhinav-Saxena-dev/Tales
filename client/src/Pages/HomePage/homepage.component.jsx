import React, { useEffect, useState } from "react";
import getBlogs from "../../utils/getBlogs";
import BlogCard from "../../Components/Blog-cards/blogs-card.component";

const HomePage = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const callGetBlogs = async () => {
            const data = await getBlogs();
            setBlogs([...blogs, ...data.data.data])
        }

        callGetBlogs();
    }, [])

    useEffect(() => {
        console.log(blogs);
    }, [blogs])

    return(
        <div className="h-screen w-screen bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-[72%] gap-4 max-h-[752px] grid grid-cols-3 overflow-y-scroll">
                {
                    blogs.map(blog => <BlogCard title = {blog.title} desc = {blog.short_description}/>)
                }
            </div>
        </div>
    )
}

export default HomePage