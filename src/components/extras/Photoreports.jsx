import React from 'react';

import { ImFilm } from 'react-icons/im';
import { MdLocationPin, MdCameraAlt } from 'react-icons/md';
import { TbClockHour3 } from 'react-icons/tb';

import { Link } from 'react-router-dom';

import report1 from '../../assets/reports1.png';
import report2 from '../../assets/reports2.png';
import report3 from '../../assets/reports3.png';
import report4 from '../../assets/reports4.png';
import report5 from '../../assets/reports5.png';
import report6 from '../../assets/reports6.png';

export const Photoreports = () => {
    return (
        <div className='p-[40px_0] relative w-full h-auto sm:p-[20px_0]'>
            <div className="main-container">
                <div className='flex w-full items-start gap-[20px] flex-col'>
                    <div className='flex items-center gap-[14px]'>
                        <ImFilm color='#fff' fontSize={36} className='sm:hidden' />
                        <Link to='/reports' className='flex flex-col items-start'>
                            <div className='font-[600] text-[40px] leading-[51px] flex items-center gap-[5px] text-[#fff] md:text-[32px] md:leading-[41px] sm:text-[22px] sm:leading-[31px]'>Фотоотчеты <span className='text-[16px] text-[#fff] hidden sm:block'>››</span></div>
                            <div className='flex items-center gap-[5px] sm:hidden'>
                                <div className='text-[16px] text-[#fff] font-[600] leading-[15px]'>смотреть все</div>
                                <span className='text-[16px] text-[#fff]'>››</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col items-start gap-[30px] md:gap-[20px]'>
                        <div className='flex w-full items-start gap-[30px] lg:flex-col md:gap-[20px]'>
                            <div className='flex flex-col items-start gap-[30px] w-full md:gap-[20px]'>
                                <Link to='/' className='lg:w-full'>
                                    <div className='relative w-[730px] lg:w-full h-[280px]'>
                                        <img src={report1} alt="report photo" className='w-full h-full object-cover' />
                                        <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                            <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Дима Билан</div>
                                            <div className='flex items-center gap-[20px]'>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdLocationPin color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>СКК Петровский</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <TbClockHour3 color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>29 января</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdCameraAlt color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>112 фото</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/' className='lg:w-full'>
                                    <div className='relative w-[730px] lg:w-full h-[370px] lg:h-[280px]'>
                                        <img src={report2} alt="report photo" className='w-full h-full object-cover' />
                                        <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                            <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Золотой микрофон</div>
                                            <div className='flex items-center gap-[20px]'>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdLocationPin color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Караоке-бар Элвис</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <TbClockHour3 color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>5 февраля</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdCameraAlt color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>54 фото</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex w-full flex-col items-start gap-[30px] lg:flex-row md:gap-[20px] md:flex-col'>
                                <Link to='/' className='lg:w-full'>
                                    <div className='relative w-[350px] h-[438px] lg:w-full lg:h-[280px]'>
                                        <img src={report3} alt="report photo" className='w-full h-full object-cover' />
                                        <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                            <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Старый Новый Год</div>
                                            <div className='flex items-center gap-[20px]'>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdLocationPin color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Тайфун</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <TbClockHour3 color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>13 января</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdCameraAlt color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>77 фото</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/' className='lg:w-full'>
                                    <div className='relative w-[350px] h-[214px] lg:w-full lg:h-[280px]'>
                                        <img src={report4} alt="report photo" className='w-full h-full object-cover' />
                                        <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                            <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>День Рождения Dj Nice</div>
                                            <div className='flex items-center gap-[20px]'>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdLocationPin color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Караоке Элвис</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <TbClockHour3 color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>5 февраля</div>
                                                </div>
                                                <div className='flex items-center gap-[5px]'>
                                                    <MdCameraAlt color='#CB1D45' />
                                                    <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>54 фото</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='flex w-full items-start gap-[30px] md:flex-col md:gap-[20px]'>
                            <Link to='/' className='lg:w-full'>
                                <div className='relative w-[350px] h-[421px] lg:w-full md:h-[280px]'>
                                    <img src={report5} alt="report photo" className='w-full h-full object-cover md:object-top' />
                                    <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                        <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Serebro</div>
                                        <div className='flex items-center gap-[20px]'>
                                            <div className='flex items-center gap-[5px]'>
                                                <MdLocationPin color='#CB1D45' />
                                                <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Nebar</div>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <TbClockHour3 color='#CB1D45' />
                                                <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>24 января</div>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <MdCameraAlt color='#CB1D45' />
                                                <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>68 фото</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/' className='lg:w-full'>
                                <div className='relative w-[100%] h-[421px] md:h-[280px]'>
                                    <img src={report6} alt="report photo" className='w-full h-full object-cover' />
                                    <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                        <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Иван Дорн</div>
                                        <div className='flex items-center gap-[20px]'>
                                            <div className='flex items-center gap-[5px]'>
                                                <MdLocationPin color='#CB1D45' />
                                                <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Vintage</div>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <TbClockHour3 color='#CB1D45' />
                                                <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>4 февраля</div>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <MdCameraAlt color='#CB1D45' />
                                                <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>252 фото</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};