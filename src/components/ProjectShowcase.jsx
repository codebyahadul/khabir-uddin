/* eslint-disable react/prop-types */

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const projectShowRef = useRef(null);
  const projects = [
    {
      id: 1,
      title: "Instinctools",
      link: "https://www.instinctools.com/",
      image: "/recent_project1.png",
    },
    {
      id: 2,
      title: "Flickr",
      link: "https://blog.flickr.net/en",
      image: "/recent_project2.png",
    },
    {
      id: 3,
      title: "9to5mac",
      link: "https://9to5mac.com/",
      image: "/recent_project3.png",
    },
    {
      id: 4,
      title: "Crack magazine",
      link: "https://crackmagazine.net/",
      image: "/recent_project4.png",
    },
    {
      id: 5,
      title: "Perfsol",
      link: "https://perfsol.tech/",
      image: "/recent_project5.png",
    },
    {
      id: 6,
      title: "Dev Family",
      link: "https://dev.family/",
      image: "/recent_project6.png",
    },
  ];
  return (
    <div
      ref={projectShowRef}
      className="bg-black  text-white pt-6 pb-6 md:pt-16 md:pb-16 w-full h-fit md:h-screen overflow-hidden"
    >
      <div className="max-w-full mx-auto">
        <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
          Freelance Showcase
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Explore more projects
        </h3>
        <div className="hidden md:block">
          <Marquee cards={projects} />
        </div>

        {/* mobile version */}
        <div className="md:hidden">
          <div className="md:hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              // pagination= {{clickable:true}}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 500,
                disableOnInteraction: true,
              }}
              // disableOnInteraction={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {projects.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="cell">
                    <Card link={card.link} title={card.title} image={card.image} />
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom Navigation Buttons */}
              <div className="flex  gap-4 items-center justify-center " >
                <div className="custom-prev text-[#4ade80] rounded-full">
                  <IoIosArrowDropleftCircle className="cursor-pointer" size={40} />
                </div>
                <div className="custom-next text-[#4ade80] rounded-full">
                  <IoIosArrowDroprightCircle className="cursor-pointer" size={40} />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
