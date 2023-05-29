import React from 'react';

import placeIcon from '../../assets/place-icon.svg';

import { MdStarRate, MdStarBorder, MdStarHalf, MdLocationPin } from 'react-icons/md';

import image from '../../constants/image';
import { Link } from 'react-router-dom';

export const Institutions = () => {
    return (
        <div className='p-[40px_0] relative w-full h-auto sm:p-[20px_0]'>
            <div className="main-container">
                <div className='flex w-full items-start gap-[20px] flex-col'>
                    <div className='flex items-center gap-[14px]'>
                        <img src={placeIcon} alt="place icon" className='w-[24px] h-[35px] object-cover' />
                        <Link to='/reports' className='flex flex-col items-start'>
                            <div className='font-[600] text-[40px] leading-[51px] flex items-center gap-[5px] text-[#fff] md:text-[32px] md:leading-[41px] sm:text-[22px] sm:leading-[31px]'>Заведения <span className='text-[16px] text-[#fff] hidden sm:block'>››</span></div>
                            <div className='flex items-center gap-[5px] sm:hidden'>
                                <div className='text-[16px] text-[#fff] font-[600] leading-[15px]'>смотреть все</div>
                                <span className='text-[16px] text-[#fff]'>››</span>
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-[1fr_1fr_1fr] gap-x-[30px] gap-y-[30px] auto-cols-auto auto-rows-[1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr]'>
                        <div className='flex flex-col items-start relative'>
                            <img src={image.institution1} alt="institution photo" className='w-full h-full object-cover' />
                            <div className='w-full p-[26px_20px] bg-[#131721]'>
                                <div className='flex flex-col items-start gap-[3px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <div className='text-[22px] font-[600] leading-[28px] text-[#fff]'>Ginza Rest</div>
                                        <div className='flex items-center gap-[4px]'>
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarHalf color='#F7971E' fontSize={18} />
                                        </div>
                                    </div>
                                    <p className='text-[18px] leading-[23px] text-[#fff] opacity-[0.8] font-[400] mb-[10px]'>Изысканный ресторан с высоким сервисом. Европейская и азитская кухня</p>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#F7971E' fontSize={18} />
                                        <div className='font-[400] text-[14px] leading-[18px] text-[#fff] opacity-[0.8]'>Ташкент, ул. Маяковского д. 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start relative'>
                            <img src={image.institution2} alt="institution photo" className='w-full h-full object-cover' />
                            <div className='w-full p-[26px_20px] bg-[#131721]'>
                                <div className='flex flex-col items-start gap-[3px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <div className='text-[22px] font-[600] leading-[28px] text-[#fff]'>Берлога</div>
                                        <div className='flex items-center gap-[4px]'>
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                        </div>
                                    </div>
                                    <p className='text-[18px] leading-[23px] text-[#fff] opacity-[0.8] font-[400] mb-[10px]'>Мужской паб с характером и крепкими напитками на любой вкус</p>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#F7971E' fontSize={18} />
                                        <div className='font-[400] text-[14px] leading-[18px] text-[#fff] opacity-[0.8]'>Ташкент, ул. Мира, 58</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start relative'>
                            <img src={image.institution3} alt="institution photo" className='w-full h-full object-cover' />
                            <div className='w-full p-[26px_20px] bg-[#131721]'>
                                <div className='flex flex-col items-start gap-[3px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <div className='text-[22px] font-[600] leading-[28px] text-[#fff]'>Shebby</div>
                                        <div className='flex items-center gap-[4px]'>
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                        </div>
                                    </div>
                                    <p className='text-[18px] leading-[23px] text-[#fff] opacity-[0.8] font-[400] mb-[10px]'>Интерьерный ресторан на набережной. Авторские блюда от шеф-повара</p>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#F7971E' fontSize={18} />
                                        <div className='font-[400] text-[14px] leading-[18px] text-[#fff] opacity-[0.8]'>Ташкент, Набережная, 145</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start relative'>
                            <img src={image.institution4} alt="institution photo" className='w-full h-full object-cover' />
                            <div className='w-full p-[26px_20px] bg-[#131721]'>
                                <div className='flex flex-col items-start gap-[3px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <div className='text-[22px] font-[600] leading-[28px] text-[#fff]'>Усадьба</div>
                                        <div className='flex items-center gap-[4px]'>
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarHalf color='#F7971E' fontSize={18} />
                                        </div>
                                    </div>
                                    <p className='text-[18px] leading-[23px] text-[#fff] opacity-[0.8] font-[400] mb-[10px]'>Изысканный ресторан с высоким сервисом. Европейская и азитская кухня</p>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#F7971E' fontSize={18} />
                                        <div className='font-[400] text-[14px] leading-[18px] text-[#fff] opacity-[0.8]'>Ташкент, ул. Чайковского д. 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start relative'>
                            <img src={image.institution5} alt="institution photo" className='w-full h-full object-cover' />
                            <div className='w-full p-[26px_20px] bg-[#131721]'>
                                <div className='flex flex-col items-start gap-[3px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <div className='text-[22px] font-[600] leading-[28px] text-[#fff]'>Aladin</div>
                                        <div className='flex items-center gap-[4px]'>
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarBorder color='#F7971E' fontSize={18} />
                                        </div>
                                    </div>
                                    <p className='text-[18px] leading-[23px] text-[#fff] opacity-[0.8] font-[400] mb-[10px]'>Мужской паб с характером и крепкими напитками на любой вкус</p>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#F7971E' fontSize={18} />
                                        <div className='font-[400] text-[14px] leading-[18px] text-[#fff] opacity-[0.8]'>Ташкент, ул. Мира, 58</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start relative'>
                            <img src={image.institution6} alt="institution photo" className='w-full h-full object-cover' />
                            <div className='w-full p-[26px_20px] bg-[#131721]'>
                                <div className='flex flex-col items-start gap-[3px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <div className='text-[22px] font-[600] leading-[28px] text-[#fff]'>Loft Place</div>
                                        <div className='flex items-center gap-[4px]'>
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                            <MdStarRate color='#F7971E' fontSize={18} />
                                        </div>
                                    </div>
                                    <p className='text-[18px] leading-[23px] text-[#fff] opacity-[0.8] font-[400] mb-[10px]'>Интерьерный ресторан на набережной. Авторские блюда от шеф-повара</p>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#F7971E' fontSize={18} />
                                        <div className='font-[400] text-[14px] leading-[18px] text-[#fff] opacity-[0.8]'>Ташкент, ул. Танкистов, 145</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
