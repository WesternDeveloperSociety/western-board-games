import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//importing images
import WBGlogo from "../assets/LOGO_WBG.png";
import WBGbackground from "../assets/BACKGROUND_WBG.png";
import imagePlaceholder from "../assets/imagePlaceholder.png";

export default function Home() {
    return (
        <div className="home-container">

            {/* HEADER SECTION */}
            <div className="header" style={{ backgroundImage: `url(${WBGbackground})` }}>
                <div className="header-content">
                    <img src={WBGlogo} alt="Western Board Games logo" className="logo" style={{ size: '50%' }} />

                    <h1 className="about-title">About Us</h1>

                    <p className="about-text">
                        Western Board Games club provides a friendly environment for students
                        who share a passion for board games to come together at weekly events.
                        These events provide members with the opportunity to participate in
                        games of their choice. We also run tournaments that allow students to
                        compete against one another and win prizes!
                    </p>
                </div>
            </div>

            {/* MAIN CONTENT SECTION */}
            <div className="main">
                <div className='textBubble'>
                    <p>Meetings every Saturday 2–6pm at the UCC</p>
                </div>
                <div className='textBubble'>
                    <p>Explore our library <Link to="/catalog" className="link" style={{ cursor: 'pointer', textDecoration: 'underline' }}>HERE</Link> and rent board games to enjoy at home!</p>
                </div>
                <div className='textBubble'>
                    <p> Keep up to date with our latest announcements, upcoming events, and club activities by:
                        <br />
                        Joining our <a href="https://discord.gg/QfgnB6SjKh" target="_blank" rel="noopener noreferrer" className="link"> Discord</a> server!
                        <br />
                        Following us on Instagram <a href="https://www.instagram.com/westernboardgamesclub/" target="_blank" rel="noopener noreferrer" className="link"> @westernboardgamesclub</a>!
                        <br />
                        Find all our links <a href="https://linktr.ee/westernboardgamesclub?utm_source=linktree_profile_share&ltsid=f541931f-2ce9-4cd1-8513-adbae08f24a5" target="_blank" rel="noopener noreferrer" className="link"> here</a>!
                    </p>
                </div>
            </div>

            {/* PHOTO GALLERY SECTION */}
            <div className="gallery">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    loopAdditionalSlides={2}
                    centeredSlides={false}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    <SwiperSlide><img src={imagePlaceholder} alt="placeholder" className="galleryImg" /></SwiperSlide>
                    <SwiperSlide><img src={imagePlaceholder} alt="placeholder" className="galleryImg" /></SwiperSlide>
                    <SwiperSlide><img src={imagePlaceholder} alt="placeholder" className="galleryImg" /></SwiperSlide>
                    <SwiperSlide><img src={imagePlaceholder} alt="placeholder" className="galleryImg" /></SwiperSlide>
                    <SwiperSlide><img src={imagePlaceholder} alt="placeholder" className="galleryImg" /></SwiperSlide>
                    <SwiperSlide><img src={imagePlaceholder} alt="placeholder" className="galleryImg" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}