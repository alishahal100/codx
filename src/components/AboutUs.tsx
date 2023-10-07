import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power1, gsap } from 'gsap';

import webdev from '../assets/webdev.jpg';
import logodesign from '../assets/logodesign.jpg';
import graphic from '../assets/graphic.jpg';
import digital from '../assets/digital.jpg';
function AboutUs() {
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();

    tl.fromTo(
      aboutUsRef.current,
      1,
      { y: 50, opacity: 0, ease: Power1.easeInOut },
      { y: 0, opacity: 1, ease: Power1.easeInOut }
    );

    // Adjust the scroll event listener as needed
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const parallaxValue = -scrollY * 0.5;

    // Apply parallax effect to the About Us section
    gsap.to(aboutUsRef.current, { y: parallaxValue, ease: Power1.easeOut });
  };

  return (
    <div
      ref={aboutUsRef}
      className="container mx-auto py-16 mt-20"
      style={{ position: 'relative' }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0 text-white ml-10">
          <h2 className="text-4xl font-bold mb-4 ">ALL CATEGORIES LIST</h2>
          <p className="text-xl">THE SERVICES WE'RE OFFERING</p>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <ServiceCard
            title="Web Development"
            description="Professional web development services."
            image={webdev}
          />
          <ServiceCard
            title="Logo Design"
            description="Creative logo design solutions for your brand."
            image={logodesign}
          />
          <ServiceCard
            title="Graphic Design"
            description="Eye-catching graphics for your marketing needs."
            image={graphic}
          />
          <ServiceCard
            title="Digital Marketing"
            description="Strategic digital marketing services to grow your business."
            image={digital}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-black text-white rounded-lg p-4 mr-10 text-center flex align-center flex-col justify-center">
      {/* Add the service image with a fixed medium size */}
      <img src={image} alt={title} className="w-32 h-32 mb-4 ml-auto mr-auto" />

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export default AboutUs;
