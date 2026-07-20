import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

export default function Caroussel() {
    return (
        <div className='mx-auto max-w-3xl p-2 relative'>
            <Swiper
                modules={[Navigation, FreeMode, Autoplay]}
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={{
                    enabled: true,
                    momentum: false,
                }}
                navigation={true}
            >
                <SwiperSlide>
                    <img src="/film1.jpg" alt="film1" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/film2.jpg" alt="film2" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/film3.jpg" alt="film3" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/film4.jpg" alt="film4" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/film5.jpg" alt="film5" className='w-full h-full object-cover' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


