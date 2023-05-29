import React from 'react';

import image from '../constants/image';
import { Link } from 'react-router-dom';

import { MdCall } from 'react-icons/md';
import { RiInstagramFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='p-[10px_0_70px_0]'>
            <div className='main-container'>
                <div className='flex items-start justify-between border-t-[1px] pt-[25px] border-[#323744] md:flex-col md:gap-[25px]'> 
                    <div className='flex items-start gap-[106px] lg:gap-[60px] sm:flex-col'>
                        <div className='flex flex-col items-start gap-[20px]'>
                            <a href="#home"><img src={image.logoWhite} alt="logo white" className='h-[45px] object-cover' /></a>
                            <div className='flex items-center gap-[5px]'>
                                <MdCall color='#D11F8A' fontSize={22} />
                                <span className='text-[17px] leading-[21px] text-[#D11F8A] font-[500]'>+ 998 458 254 45</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-[144px] lg:gap-[80px]'>
                            <div className='flex flex-col items-start gap-[17px]'>
                                <Link className='text-[18px] text-[#fff] font-[400] leading-[23px]'>Фотоотчеты</Link>
                                <Link className='text-[18px] text-[#fff] font-[400] leading-[23px]'>Анонсы</Link>
                                <Link className='text-[18px] text-[#fff] font-[400] leading-[23px]'>Заведения</Link>
                            </div>
                            <div className='flex flex-col items-start gap-[17px]'>
                                <Link className='text-[18px] text-[#fff] font-[400] leading-[23px]'>Статьи</Link>
                                <Link className='text-[18px] text-[#fff] font-[400] leading-[23px]'>Видео</Link>
                                <Link className='text-[18px] text-[#fff] font-[400] leading-[23px]'>Контакты</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end flex-col gap-[35px] lg:items-start lg:gap-[25px]'>
                        <Link className='main-cta'>Заказать фотоотчет</Link>
                        <div className='flex items-center gap-[34px]'>
                            <Link to='/'><RiInstagramFill className='w-[20px] h-[20px] text-[#fff]' /></Link>
                            <Link to='/'><RiYoutubeFill className='text-[22px] text-[#fff]' /></Link>
                            <Link to='/'><FaTelegramPlane className='text-[20px] text-[#fff]' /></Link>
                            <Link to='/'><RiFacebookFill className='text-[20px] text-[#fff]' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;