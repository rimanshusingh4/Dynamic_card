import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


function Cards({data, refrence}) {
  return (
    <>
        <motion.div drag dragConstraints={refrence} dragElastic={0.5} whileDrag={{scale: 1.1}} className='relative flex-shrink-0 w-60 h-[280px] bg-zinc-900/90 overflow-hidden py-10 px-8 text-white rounded-3xl'>
            <FaRegFileAlt/>
            <p className='text-sm  mt-5 leading-tight font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex justify-between items-center px-8 py-3 mb-3'>
                    <h1>{data.filesize}</h1>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.closed ? <IoMdCloseCircleOutline/> : <LuDownload size={".9em"} color='#fff'/>}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full p-3 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    </>
  )
}
export default Cards