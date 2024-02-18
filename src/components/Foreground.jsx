import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null);

    const data=[
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
         filesize: '.9mb', 
         closed: true,
         tag: {
            isOpen: true, 
            tagTitle: "Downloading...",
            tagColor: "blue",
         },
        },
        {desc: "Fusce elit ex, bibendum sed dui ac, vulputate accumsan est.",
         filesize: '.8mb', 
         closed: false,
         tag: {
            isOpen: true, 
            tagTitle: "Download Now",
            tagColor: "green",
         },
        },
        {desc: "Duis sit amet dignissim nulla, quis laoreet ligula. Curabitur rhoncus sem massa.",
         filesize: '.7mb', 
         closed: true,
         tag: {
            isOpen: true, 
            tagTitle: "Uploading",
            tagColor: "green",
         },
        },
        {desc: "Pellentesque augue purus, consectetur quis tortor sed, varius rhoncus diam.",
         filesize: '.7gb', 
         closed: false,
         tag: {
            isOpen: true, 
            tagTitle: "Download Now",
            tagColor: "green",
         },
        },
        {desc: "Vivamus rhoncus nunc vitae tempor aliquam. In quis consequat dui.",
         filesize: '.4mb', 
         closed: true,
         tag: {
            isOpen: true, 
            tagTitle: "Downloading...",
            tagColor: "blue",
         },
        },
        {desc: "Nulla sed erat tortor. Proin blandit vulputate libero, sit amet auctor velit malesuada et. Nunc molestie condimentum sem, vitae aliquet elit ultrices in.",
         filesize: '.2mb', 
         closed: false,
         tag: {
            isOpen: false, 
            tagTitle: "Downloading...",
            tagColor: "green",
         },
        },
    ]
  return (
    <>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-8'>
            {data.map((item, index)=>(
                <Cards data={item} refrence={ref}/>
            ))}
        </div>
    </>
  )
}

export default Foreground