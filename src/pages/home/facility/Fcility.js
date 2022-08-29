import React from 'react'
import "./Facility.css"
import img1 from "../../../image/blog-1.jpg"
import img2 from "../../../image/blog-2.jpg"
import img3 from "../../../image/blog-3.jpg"
import img4 from "../../../image/blog-4.jpg"
import img5 from "../../../image/blog-5.jpg"
import img6 from "../../../image/blog-6.jpg"

function Fcility() {
    let data = [
        {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc: img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc: img5,
        },
        {
            id:6,
            imgSrc:img6,
        },
    ]
  return (
    <div className="facility">
    <h1>Our Facility</h1>
    <div className='facility-box'>
    <div className='facility-gallery'>
    {
        data.map((item, index) => {
            return(
                <>
                <div className='pics' key={index}>
                    <img src={item.imgSrc} />
                </div>
                </>
            )
        })
    }
        
    </div>

    </div>
    </div>
  )
}

export default Fcility