import React, { useState } from 'react';
import logo from '../assets/logo.svg';

import { navItems } from './NavData';
import { Link, NavLink } from 'react-router-dom';
import { RiInstagramFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdCall, MdClose, MdPhotoCamera } from 'react-icons/md';
import { HiOutlineSearch } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

import { Events } from '../constants/events';

function Navbar() {
    const [ toggle, setToggle ] = useState(false);
    const [ search, setSearch ] = useState(false);
    const [ query,  setQuery ] = useState("");

    const activeLink = "text-[20px] text-[#D11F8A] font-[400] leading-[26px] font-normal sm:text-[17px]";
    const normalLink = "text-[20px] text-[#fff] font-[400] leading-[26px] font-normal hover:text-[#D11F8A] sm:text-[17px]";

    return (
        <div className='flex items-start flex-col relative z-40' id='home'>
            <div className='top-nav-bg nav-bg relative w-full h-[118px] flex items-center z-20 lg:h-[96px] sm:h-[76px]'>
                <div className="nav-container">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[14px]'>
                            <div className={toggle ? 'cursor-pointer hidden lg:flex absolute translate-x-[300px] w-[50px] h-[96px] items-center justify-center sm:translate-x-[255px] sm:bg-[#990882] sm:h-[76px] sm:text-[22px]] transition ease-in-out' : 'cursor-pointer hidden lg:block'}>
                                {toggle ? <MdClose onClick={() => setToggle(false)} color='#fff' fontSize={22} /> : <GiHamburgerMenu onClick={() => setToggle(true)} color='#fff' fontSize={22} />}
                            </div>
                            <div className='flex items-center gap-[42px]'>
                                <Link to='/'><img src={logo} alt="fotik logo" className='h-[45px] object-cover lg:h-[38px] sm:h-[30px]' /></Link>
                                <span className='text-[18px] text-[#fff] leading-[23px] font-[400] md:hidden'>Ташкент</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-[118px]'>
                            <div className='flex items-center gap-[34px] lg:hidden'>
                                <Link to='/'><RiInstagramFill className='w-[20px] h-[20px] text-[#fff]' /></Link>
                                <Link to='/'><RiYoutubeFill className='text-[22px] text-[#fff]' /></Link>
                                <Link to='/'><FaTelegramPlane className='text-[20px] text-[#fff]' /></Link>
                                <Link to='/'><RiFacebookFill className='text-[20px] text-[#fff]' /></Link>
                            </div>
                            <div className='flex items-center gap-[13px] sm:hidden'>
                                <MdCall className='text-[20px] text-[#fff]' />
                                <div className='font-[400] text-[18px] leading-[23px] text-[#fff]'>+ 998 458 254 45</div>
                            </div>
                            <div className='hidden sm:block'>
                                <div className='cursor-pointer'>
                                    {search ? <HiOutlineSearch color='#fff' fontSize={17} onClick={() => setSearch(false)} /> : <HiOutlineSearch color='#fff' fontSize={17} onClick={() => setSearch(true)} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='w-full h-[76px] bg-[#131721] flex items-center lg:hidden relative z-20'>
                <div className="main-container">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[40px]'>
                            {navItems.map((items, index) => {
                                return (
                                    <li key={index} className='list-none'>
                                        <NavLink to={items.path} className={({ isActive }) => (isActive ? activeLink : normalLink)}>{items.title}</NavLink>
                                    </li>
                                )
                            })}
                        </div>
                        <div className='flex items-center gap-[38px]'>
                            <div className='cursor-pointer'>
                                {search ? <HiOutlineSearch color='#fff' fontSize={17} onClick={() => setSearch(false)} /> : <HiOutlineSearch color='#fff' fontSize={17} onClick={() => setSearch(true)} />}
                            </div>
                            <Link to='/' className='main-cta'>Заказать фотоотчет</Link>
                        </div>
                    </div>
                </div>
            </div>
            {toggle && (
                <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ ease: "easeOut" }} className='menu-outside'>
                    <div className='w-[320px] h-[96px] bg-[#06080C] flex items-center p-[0_15px] sm:w-[270px] sm:h-[76px]'>
                        <div className='text-[28px] text-[#fff] font-[400] leading-[28px] sm:text-[22px]'>Ташкент</div>
                    </div>
                    <div className='flex flex-col items-start gap-[15px] p-[30px] sm:p-[15px]'>
                        <Link to='/' className='main-cta'>
                            <span>Заказать фотоотчет</span>
                            <MdPhotoCamera className='hidden sm:block' />
                        </Link>
                        <div className='items-center gap-[13px] hidden sm:flex'>
                            <MdCall className='text-[19px] text-[#D11F8A]' />
                            <div className='font-[400] text-[17px] leading-[23px] text-[#D11F8A]'>+ 998 458 254 45</div>
                        </div>
                        {navItems.map((items, index) => {
                            return (
                                <li key={index} className='list-none'>
                                    <NavLink to={items.path} className={({ isActive }) => (isActive ? activeLink : normalLink)}>{items.title}</NavLink>
                                </li>
                            )
                        })}
                        <div className='flex items-center gap-[34px] mt-[10px]'>
                            <Link to='/'><RiInstagramFill className='w-[20px] h-[20px] text-[#fff]' /></Link>
                            <Link to='/'><RiYoutubeFill className='text-[22px] text-[#fff]' /></Link>
                            <Link to='/'><FaTelegramPlane className='text-[20px] text-[#fff]' /></Link>
                            <Link to='/'><RiFacebookFill className='text-[20px] text-[#fff]' /></Link>
                        </div>
                    </div>
                </motion.div>
            )}
            {search && (
                <motion.div initial={{ y: '-100px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='w-full absolute top-[100%] h-[auto] sm:h-screen bg-[#06080C] p-[15px_8px] z-10'>
                    <div className="nav-container">
                        <div className='flex flex-col items-start gap-[20px]'>
                            <div className='w-full'>
                                <div className='w-full h-[40px] bg-[#fff] p-[7px_15px] flex items-center'>
                                    <input type="name" className='outline-none text-[18px] w-full' onChange={(e) => setQuery(e.target.value)} />
                                    <HiOutlineSearch color='#999' fontSize={17} />
                                </div>
                            </div>
                            <ul className='flex flex-col items-start gap-[25px]'>
                                {Events.filter((event) => event.event_name.toLowerCase().includes(query)).map((event) => (
                                    <li key={event.id} className='text-[#fff]'>{event.event_name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;