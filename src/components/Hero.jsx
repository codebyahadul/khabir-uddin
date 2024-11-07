import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import down from "../assets/icon/lower-arrow.png";
import bgImage from "../assets/images/hero-bg.png";
import profile from "../assets/images/khabir.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import "../App.css";
import Button from './shared/Button';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
    const marqueeRefs = useRef([]);
    useEffect(() => {
        // Iterate over all marquee elements
        marqueeRefs.current.forEach((item) => {
            const marqueeInner = item.querySelector('.marquee__inner');
            const marqueeContent = marqueeInner.querySelector('.marquee__content');

            // Duration from data attribute or default
            const duration = item.getAttribute('data-marquee-duration') || 20;

            // Clone the content for a seamless animation
            const marqueeContentClone = marqueeContent.cloneNode(true);
            marqueeInner.appendChild(marqueeContentClone);

            // Animate the inner element containing both the original and cloned text
            gsap.to(marqueeInner, {
                x: `-${marqueeContent.offsetWidth}px`,
                duration: duration,
                ease: 'linear',
                repeat: -1,
            });
        });
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-start  relative bg-black text-white py-20"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "contain",
                backgroundPosition: "top",
                backgroundPositionY: "-4rem",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1444px]  mx-auto column-section flex flex-col md:flex-row items-center justify-between">
                {/* Left Column */}
                <div className="flex flex-col justify-center items-start w-full md:w-[25%] p-4 md:p-8">
                    <p className="mb-6">
                        Experienced WordPress Developer skilled in building, optimizing,
                        and troubleshooting websites.
                    </p>
                    {/* Download CV Button and Icons */}
                    <div className="flex items-center space-x-4 mb-6">
                        <a href="/cv.pdf" download={'Khabir CV'}><Button text={'Download CV'} bg={'bg-[#ff9e14]'} icon={<FaDownload />} /></a>
                        <Button bg={'bg-[#ff9e14]'} size='p-3' text={<FaLinkedin className="w-4 h-4" />} />
                        <Button bg={'bg-[#ff9e14]'} size='p-3' text={<FaGithub className="w-4 h-4" />} />
                    </div>
                </div>

                {/* Middle Column - Profile Image with Blur Effect */}
                <div className="flex justify-center items-end w-full md:w-[50%] -order-1 md:order-none">
                    <div className="relative image-container">
                        <img
                            src={profile}
                            alt="Profile"
                            className="object-cover h-full w-60 md:w-full md:h-full "
                        />
                    </div>
                </div>

                {/* Right Column - Arrow and Text */}
                <div className="flex flex-col justify-center items-center text-center w-full md:w-[25%] p-4 md:p-8 md:text-start">
                    <img src={down} alt="Icon arrow" className="w-6 h-6 mb-8" />
                    <h2 className="text-[2rem]">Experienced</h2>
                    <h3 className="text-[2rem] text-nowrap">Wordpress Developer</h3>
                </div>
            </div>

        </div>
    );
};

export default Hero;
