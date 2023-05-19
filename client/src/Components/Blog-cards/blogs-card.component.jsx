import React from "react";

const BlogCard = ({title, desc}) => {
    return(
        <div className="max-w-sm max-h-[364px] bg-[#FFFFFF] border-[#E0E0E0] rounded-2xl pb-5 gap-6 border flex flex-col items-center  ">
            <div className="w-96 max-h-[172px] border border-[#E0E0E0] rounded-t-2xl overflow-hidden">
                <img className="min-h-full w-[384px]" src={"https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt="" />
            </div>
            <div className="overflow-hidden max-w-[336px] max-h-[144px] p-0 flex flex-col items-start gap-4 font-quicksand">
                <div className="max-w-[336px] font-semibold text-xl text-[#252525]">{title}</div>
                <div className="max-w-[336px] max-h-[72px] font-medium text-base text-[#3F3F3F]">{desc}</div>
            </div>
        </div>
    )
}

export default BlogCard;