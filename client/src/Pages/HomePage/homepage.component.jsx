import React, { useEffect, useState } from "react";
import getBlogs from "../../utils/getBlogs";

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
        <div className="h-full w-full">
            Hello
        </div>
    )
}

export default HomePage