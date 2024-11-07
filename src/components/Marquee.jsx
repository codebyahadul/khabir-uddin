/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { horizontalLoop } from "./horizontalLoop";
import Card from "./Card";
const Marquee = ({ cards }) => {

  const marqueeRef = useRef(null);
  useEffect(() => {
    const items = marqueeRef.current.children;
    // Call horizontalLoop for continuous scrolling of cards
    const loopTimeline = horizontalLoop(items, {
      speed: 1,
      snap: 1,
      repeat: -1,
      paused: false,
    });

    // Scale the center card
    loopTimeline.eventCallback("onUpdate", () => {
      const rect = marqueeRef.current.getBoundingClientRect();
      // eslint-disable-next-line no-unused-vars
      Array.from(items).forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(itemRect.left + itemRect.width / 2 - centerX);
        // Scale based on distance from center
        const scaleValue = 1.3 - Math.min(distanceFromCenter / (rect.width / 2), 0.4);
        gsap.to(item, {
          scale: scaleValue > 0.6 ? scaleValue : 0.6, // maintain minimum scale at 0.6
          duration: 0.5,
          ease: "power3.out",
        });
      });
    });

    return () => {
      loopTimeline.kill();
    };
  }, [cards]);

  return (
    <>
      <div className="picker pt-10 md:pt-20 h-[500px]" ref={marqueeRef}>
        {cards.map((card, index) => (
          <div key={index} className="cell  ">
            <Card title={card.title} image={card.image} />
          </div>
        ))}
      </div>

    </>

  );
};

export default Marquee;
