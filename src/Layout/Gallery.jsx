import React from 'react'
import firstImage from  "../Components/Asset/gallery/Rectangle 4 (1).png"
import secondImage from  "../Components/Asset/gallery/Rectangle 4 (2).png"
import thirdImage from  "../Components/Asset/gallery/Rectangle 5 (1).png"
import fourthImage from  "../Components/Asset/gallery/Rectangle 5.png"
import fifthImage from  "../Components/Asset/gallery/Rectangle 6 (1).png"
import sixthImage from  "../Components/Asset/gallery/Rectangle 6.png"
import seventhImage from  "../Components/Asset/gallery/Rectangle 7.png"
import eigthImage from  "../Components/Asset/gallery/Rectangle 8.png"








export default function Gallery() {
  return (
    <div className=' container mx-auto'>

        <div className='gallery'>
            <div className=' gallery-item pb-4'>
          <img src={firstImage}/>
            </div>

            <div className=' gallery-item pb-4' >
            <img src={secondImage}/>
            </div>


            {/* <div className=' gallery-item'>
           <img src={thirdImage}/>
            </div> */}

            <div className=' gallery-item pb-4'>
           <img src={fourthImage}/>
            </div>

            <div className=' gallery-item pb-4'>
           <img src={fifthImage}/>
            </div>

            <div className=' gallery-item pb-4'>
           <img src={sixthImage}/>
            </div>

            <div className=' gallery-item pb-4'>
           <img src={seventhImage}/>
            </div>

            {/* <div className=' gallery-item'>
           <img src={eigthImage}/>
            </div> */}
        </div>

    </div>
  )
}
