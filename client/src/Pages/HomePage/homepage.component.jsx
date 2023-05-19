import React, { useEffect, useState } from "react";
import getBlogs from "../../utils/getBlogs";
import BlogCard from "../../Components/Blog-cards/blogs-card.component";
import SearchBar from "../../Components/Search-bar/search-bar.component";
import BlogView from "../../Components/Blog-view/blog-view.component";

const HomePage = () => {

    const [blogs, setBlogs] = useState([])
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const callGetBlogs = async () => {
            const data = await getBlogs();
            setBlogs([...blogs, ...data.data.data])
        }

        callGetBlogs();
    }, [])

    // useEffect(() => {
    //     console.log(blogs);
    // }, [blogs])


    // useEffect(() => {
    //     console.log(blogData);
    // }, [blogData])

    return(
        <div className="w-screen min-w-[1300px] bg-[#F8F8F8] flex flex-col items-center justify-around pb-5">
            {
                blogData && <BlogView blogData = {blogData} setBlogData = {setBlogData}/>
            }
            <div className="min-w-[1200px] mb-9 mt-9 h-1/3 flex">
                <div className="w-1/2 flex justify-between items-center">
                <div className="w-[118px] h-[30px] font-quicksand font-semibold text-2xl">All articles</div>
                </div>
                <div className="min-w-[900px] flex justify-end items-center">
                    <SearchBar/>
                </div>
            </div>
            <div className="min-w-[1250px] border-black gap-4 max-h-[752px] grid grid-cols-3 overflow-y-scroll">
                {
                    blogs.map(blog => <BlogCard title = {blog.title} desc = {blog.short_description} thumb = {blog.thumb} slug = {blog.slug} setBlogData = {setBlogData}/>)
                }
            </div>
        </div>
    )
}

export default HomePage