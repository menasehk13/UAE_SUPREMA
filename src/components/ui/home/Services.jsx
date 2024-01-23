import React from 'react'
import img1 from '../../../assets/images/img1.png'
import img2 from '../../../assets/images/img2.png'
import img3 from '../../../assets/images/img3.png'
import img4 from '../../../assets/images/img4.png'
const Services = () => {

    const data = [
        {
            title:'CoreStation',
            imgPath:img1
        },
        {
            title:'BioEntry R2',
            imgPath:img2
        },
        {
            title:'XPass D2',
            imgPath:img3
        },
        {
            title:'DM-20',
            imgPath:img4
        },

    ]
  return (
    <div className='service-container w-full p-[39px]'>
      <div className='flex gap-5 flex-col'>
        <h1 className='text-[60px] font-[300] leading-[76px] text-center'>
        Security that starts from <br/>
your finger-tip
        </h1>

        <div className='flex uppercase text-[24px] mt-5 items-center gap-5 justify-center'>
            <h1>Centralized Solution</h1>
            <hr className='h-[30px] w-[1px] bg-gray-500'/>
            <h1>Distributed Solution</h1>
        </div>

        <div className='grid grid-cols-4 '>
            {
                data.map((items,key)=>(
                    <div className='text-center hover:text-primary' key={key}>
                        <img src={items.imgPath} />
                        <h1>{items.title}</h1>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Services
