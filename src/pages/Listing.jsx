import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from '../components/Spinner';
import {Swiper, SwiperSlide, SwiperSlider} from 'swiper/react';
import    {EffectFade, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/modules'
import "swiper/css/bundle"
function Listing() {
    const params = useParams()
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function fetchListing(){
            const docRef = doc(db, "listings", params.listingId);
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false);
               

            }




        }
        fetchListing();
      

    },[params.listingId]);
    if(loading){
        return <Spinner/>
    }
  return (
    <main>
        <Swiper modules={[Navigation, Pagination, EffectFade,Autoplay]} slidesPerView={1} 
        navigation
        pagination={{type:'progressbar'}}
        effect='fade' 
        autoplay={{delay:3000,disableOnInteraction:false}}>
            {listing.imgUrls.map((url, index)=>(
                <SwiperSlide key={index}>
                    <div className='relative w-full overflow-hidden h-[300px]'
                     style={{background: `url(${listing.imgUrls[index]}) center no-repeat`, backgroundSize: "cover"}}>

                    </div>
                     
                </SwiperSlide>

            ))}
        </Swiper>
    </main>
  )
}

export default Listing