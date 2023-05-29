import React from 'react';
import Navbar from './Navbar';
import hero from '../assets/hero-bg.jpg';

import { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

import { Photoreports } from './extras/Photoreports';
import { Announcements } from './extras/Announcements';
import { Advertising } from './extras/advertising';
import { Institutions } from './extras/Institutions';
import { Articles } from './extras/Articles';
import { Videos } from './extras/Videos';
import Footer from './Footer';

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className='relative p-[34px_0_40px_0] lg:h-auto sm:p-[10px_0_20px_0]'>
                <div className="main-container">
                    <div className='flex items-start gap-[15px] lg:flex-col'>
                        <div className='relative w-[745px] h-[490px] overflow-hidden lg:w-full sm:h-auto'>
                            <Swiper
                                modules={[Pagination, Autoplay, EffectFade]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop
                                autoplay={{ delay: 5000 }}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <img src={hero} alt="hero bg" className='w-full h-full object-cover relative' />
                                    <div className='absolute top-auto left-[40px] bottom-[60px] sm:left-[13px] sm:bottom-[20px]'>
                                        <div className='flex flex-col items-start'>
                                            <div>
                                                <div className='overflow-hidden sm:hidden'>
                                                    <p className='font-[700] text-[16px] leading-[20px] text-[#D11F8A]' data-animation='bottom'>03 марта</p>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <h4 className='text-[26px] leading-[28px] text-[#fff] font-[600] sm:text-[18px] sm:font-[400]' data-animation='bottom'>Карнавальный бал </h4>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <p className='text-[22px] text-[#FFFFFFB2] sm:text-[12px] sm:font-[400]' data-animation='bottom'>Buddha Bar </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={hero} alt="hero bg" className='w-full h-full object-cover relative' />
                                    <div className='absolute top-auto left-[40px] bottom-[60px] sm:left-[13px] sm:bottom-[20px]'>
                                        <div className='flex flex-col items-start'>
                                            <div>
                                                <div className='overflow-hidden sm:hidden'>
                                                    <p className='font-[700] text-[16px] leading-[20px] text-[#D11F8A]' data-animation='bottom'>03 марта</p>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <h4 className='text-[26px] leading-[28px] text-[#fff] font-[600] sm:text-[18px] sm:font-[400]' data-animation='bottom'>Карнавальный бал </h4>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <p className='text-[22px] text-[#FFFFFFB2] sm:text-[12px] sm:font-[400]' data-animation='bottom'>Buddha Bar </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={hero} alt="hero bg" className='w-full h-full object-cover relative' />
                                    <div className='absolute top-auto left-[40px] bottom-[60px] sm:left-[13px] sm:bottom-[20px]'>
                                        <div className='flex flex-col items-start'>
                                            <div>
                                                <div className='overflow-hidden sm:hidden'>
                                                    <p className='font-[700] text-[16px] leading-[20px] text-[#D11F8A]' data-animation='bottom'>03 марта</p>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <h4 className='text-[26px] leading-[28px] text-[#fff] font-[600] sm:text-[18px] sm:font-[400]' data-animation='bottom'>Карнавальный бал </h4>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <p className='text-[22px] text-[#FFFFFFB2] sm:text-[12px] sm:font-[400]' data-animation='bottom'>Buddha Bar </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={hero} alt="hero bg" className='w-full h-full object-cover relative' />
                                    <div className='absolute top-auto left-[40px] bottom-[60px] sm:left-[13px] sm:bottom-[20px]'>
                                        <div className='flex flex-col items-start'>
                                            <div>
                                                <div className='overflow-hidden sm:hidden'>
                                                    <p className='font-[700] text-[16px] leading-[20px] text-[#D11F8A]' data-animation='bottom'>03 марта</p>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <h4 className='text-[26px] leading-[28px] text-[#fff] font-[600] sm:text-[18px] sm:font-[400]' data-animation='bottom'>Карнавальный бал </h4>
                                                </div>
                                                <div className='overflow-hidden'>
                                                    <p className='text-[22px] text-[#FFFFFFB2] sm:text-[12px] sm:font-[400]' data-animation='bottom'>Buddha Bar </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='w-[350px] h-[134px] lg:w-full lg:h-auto'>
                            <div className='flex flex-col items-start gap-[17px] lg:w-full'>
                                <h2 className='font-[600] text-[28px] leading-[36px] text-[#fff] mt-[5px] sm:text-[22px]'>Ближайшие события</h2>
                                <div className='flex flex-col items-start gap-[15px] lg:flex-row lg:w-full sm:flex-col'>
                                    <div className='flex items-center gap-[12px] bg-[#131721] p-[14px_15px] lg:bg-transparent lg:w-[300px] lg:flex-col lg:p-0 sm:w-full sm:items-start sm:snap-center sm:flex-[0_0_100%]'>
                                        <img src={image1} alt="image" className='w-[106px] h-[106px] object-cover lg:w-full lg:h-[164px] sm:h-[180px]' />
                                        <div className='flex flex-col items-start gap-[12px]'>
                                            <div className='font-[700] text-[14px] leading-[17px] text-[#D11F8A]'>8 марта</div>
                                            <div className='flex flex-col items-start gap-[5px]'>
                                                <div className='text-[22px] leading-[28px] text-[#fff] font-[600] sm:text-[16px]'>Девичник в Soho</div>
                                                <p className='font-[400] text-[14px] leading-[17px] text-[#fff] opacity-[0.8]'>Развлекательная программа и танцы до утра</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[12px] bg-[#131721] p-[14px_15px] lg:bg-transparent lg:w-[300px] lg:flex-col lg:p-0 sm:w-full sm:items-start sm:snap-center sm:flex-[0_0_100%]'>
                                        <img src={image2} alt="image" className='w-[106px] h-[106px] object-cover lg:w-full lg:h-[164px] sm:h-[180px]' />
                                        <div className='flex flex-col items-start gap-[12px]'>
                                            <div className='font-[700] text-[14px] leading-[17px] text-[#D11F8A]'>15 марта</div>
                                            <div className='flex flex-col items-start gap-[5px]'>
                                                <div className='text-[22px] leading-[28px] text-[#fff] font-[600] sm:text-[16px]'>Тимати</div>
                                                <p className='font-[400] text-[14px] leading-[17px] text-[#fff] opacity-[0.8]'>Презентация нового альбома. Гость - Dj Super</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[12px] bg-[#131721] p-[14px_15px] lg:bg-transparent lg:w-[300px] lg:flex-col lg:p-0 sm:w-full sm:items-start sm:snap-center sm:flex-[0_0_100%]'>
                                        <img src={image3} alt="image" className='w-[106px] h-[106px] object-cover lg:w-full lg:h-[164px] sm:h-[180px]' />
                                        <div className='flex flex-col items-start gap-[12px]'>
                                            <div className='font-[700] text-[14px] leading-[17px] text-[#D11F8A]'>1 апреля</div>
                                            <div className='flex flex-col items-start gap-[5px]'>
                                                <div className='text-[22px] leading-[28px] text-[#fff] font-[600] sm:text-[16px]'>Dj Planeta</div>
                                                <p className='font-[400] text-[14px] leading-[17px] text-[#fff] opacity-[0.8]'>Зажигательные хиты 80-х и 90-х. Для девушек вход - free</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Photoreports />
            <Announcements />
            <Advertising />
            <Institutions />
            <Articles />
            <Videos />
            <Footer />
        </>
    );
};

export default Hero;