/* eslint-disable react/prop-types */

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const projectShowRef = useRef(null);
  const projects = [
    { id: 1, title: "Weather app", image: "/project1.png" },
    { id: 2, title: "Landing page", image: "/project2.jpeg" },
    { id: 3, title: "B2B App", image: "/project3.png" },
    { id: 4, title: "E-commerce", image: "/project2.jpeg" },
    { id: 5, title: "Marketing", image: "/project2.jpeg" },
    { id: 6, title: "Portfolio Website", image: "/project2.jpeg" },
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
        <div className="hidden md:block" >
          <Marquee cards={projects} />
        </div>

        {/* mobile version */}
        <div className="md:hidden">
          <div className="md:hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              {projects.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="cell">
                    <Card title={card.title} image={card.image} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
}