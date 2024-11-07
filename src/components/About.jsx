
import '../App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import "../App.css";
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <div id='about' className="bg-black px-6  py-8 md:px-12 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
          About Me
        </p>
        <div className='hidden md:block'>
          <TextReveal />
        </div>
        <div className='block md:hidden'>
          <h1 className='text-3xl font-bold text-white'>
          I’m a <span className='text-green-500'>Senior Wordpress Developer</span> focused on delivering high-quality, impactful digital solutions, seamlessly balancing front-end and back-end expertise
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;



