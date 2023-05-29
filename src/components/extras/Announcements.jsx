import React from 'react';

import { MdLocationPin, MdRocketLaunch } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import image from '../../constants/image';

export const Announcements = () => {
    return (
        <div className='p-[40px_0] relative w-full h-auto sm:p-[20px_0]'>
            <div className="main-container">
                <div className='flex w-full items-start gap-[20px] flex-col'>
                    <div className='flex items-center gap-[14px]'>
                        <MdRocketLaunch color='#fff' fontSize={36} className='sm:hidden' />
                        <Link to='/reports' className='flex flex-col items-start'>
                            <div className='font-[600] text-[40px] leading-[51px] flex items-center gap-[5px] text-[#fff] md:text-[32px] md:leading-[41px] sm:text-[22px] sm:leading-[31px]'>Анонсы <span className='text-[16px] text-[#fff] hidden sm:block'>››</span></div>
                            <div className='flex items-center gap-[5px] sm:hidden'>
                                <div className='text-[16px] text-[#fff] font-[600] leading-[15px]'>смотреть все</div>
                                <span className='text-[16px] text-[#fff]'>››</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col items-start gap-[30px] md:gap-[20px] lg:w-full'>
                        <div className='flex flex-row items-start gap-[30px] md:gap-[20px] lg:flex-col lg:w-full'>
                            <div className='relative w-full h-[262px] lg:h-[280px]'>
                                <img src={image.announce1} alt="announce" className='w-full h-[262px] object-cover relative lg:h-[280px]' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>1 февраля</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Наталья Орейро</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Music Hall</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>6 500 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full h-[262px] lg:h-[280px]'>
                                <img src={image.announce2} alt="announce" className='w-full h-[262px] object-cover relative lg:h-[280px] md:object-top' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>5 марта</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Dj Smash</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Honey Cafe</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>3 500 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full h-[262px] lg:h-[280px]'>
                                <img src={image.announce3} alt="announce" className='w-full h-[262px] object-cover relative lg:h-[280px]' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>17 апреля</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Звери</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Арена</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>5 000 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-start gap-[30px] md:gap-[20px] lg:flex-col lg:w-full'>
                            <div className='relative w-full h-[396px] lg:h-[280px]'>
                                <img src={image.announce4} alt="announce" className='w-full h-[396px] object-cover relative lg:h-[280px] md:object-top' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>6 мая</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Земфира </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>А2</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>10 000 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full h-[396px] lg:h-[280px]'>
                                <img src={image.announce5} alt="announce" className='w-full h-[396px] object-cover relative lg:h-[280px] md:object-top' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>15 мая</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Каста</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Alarma Club</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>3 500 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-start gap-[30px] md:gap-[20px] lg:flex-col lg:w-full'>
                            <div className='relative w-full h-[262px] lg:h-[280px]'>
                                <img src={image.announce6} alt="announce" className='w-full h-[262px] object-cover relative lg:h-[280px] md:object-top' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>1 февраля</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Dj Tiesto</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Music Hall</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>6 500 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full h-[262px] lg:h-[280px]'>
                                <img src={image.announce7} alt="announce" className='w-full h-[262px] object-cover relative lg:h-[280px] md:object-top' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>5 марта</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Sara Com</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Honey Cafe</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>3 500 сум</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full h-[262px] lg:h-[280px]'>
                                <img src={image.announce8} alt="announce" className='w-full h-[262px] object-cover relative lg:h-[280px]' />
                                <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                    <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>17 апреля</span>
                                </div>
                                <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                    <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Dj Sneg</div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdLocationPin color='#CB1D45' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Арена</div>
                                        </div>
                                        <div className='flex items-center gap-[5px]'>
                                            <AiOutlineDollar color='#6ACB1D' />
                                            <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>5 000 сум</div>
                                        </div>
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