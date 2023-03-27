import React, { useEffect } from 'react';
import './footer.css';
import video2 from '../../Assets/video/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="footer">
           <div className="videoDiv">
           <video  loop autoplay="" src={video2} type="video2/mp4" muted></video>
           </div>

           <div className='secContent container'>
                <div className='contactDiv flex'>
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div data-aos="fade-up" className='inputDiv flex'>
                        <input type="text" placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className='btn flex' type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" alt="" className='logo flex'>
                               <MdOutlineTravelExplore className="icon"/> TravelCapo
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        TravelCapo is a high-quality travel agency that provides personalized travel experiences. Our team of experts takes care of all the details, from flights and accommodations to activities and attractions, so that you can simply relax and enjoy your trip. We offer 24/7 customer support and fully customizable travel packages to ensure that your trip is tailored specifically to your interests and preferences.
                        </div>

                        <div data-aos="fade-up" className='footerSocials flex'>
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">

                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className='footerList flex'><FiChevronRight className="icon"/>Services</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Insurance</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Agency</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Payment</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Services</li>
                            
                        </div>
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className='groupTitle'>
                                PARTNERS
                            </span>

                            <li className='footerList flex'><FiChevronRight className="icon"/>Bookings</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>RentCars</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>HostelWorld</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Trivago</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>TripAdvisor</li>
                            
                        </div>
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className='groupTitle'>
                                LAST MINUTE
                            </span>

                            <li className='footerList flex'><FiChevronRight className="icon"/>London</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>California</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Indonesia</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Europe</li>
                            <li className='footerList flex'><FiChevronRight className="icon"/>Oceania</li>
                            
                        </div>
                    </div>

                    <div className='footerDiv flex'>
                        <small>BEST WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - TRAVELCAPO 2022</small>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Footer;