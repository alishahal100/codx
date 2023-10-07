import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power1,gsap } from 'gsap';

function Banner() {
  const bannerRef = useRef(null);
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();

    tl.fromTo(
      bannerRef.current,
      1,
      { y: -50, opacity: 0, ease: Power1.easeInOut },
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

    // Apply parallax effect to the banner
    gsap.to(bannerRef.current, { y: parallaxValue, ease: Power1.easeOut });
  };

  const scrollToAboutUs = () => {
    const aboutUsPosition = aboutUsRef?.current?.offsetTop;

    if (aboutUsPosition !== undefined) {
      // Animate scroll to the About Us section
      gsap.to(window, { scrollTo: aboutUsPosition, duration: 1 });
    }
  };

  return (
    <div>
      <div
        ref={bannerRef}
        className="h-screen flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        {/* Black overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        ></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforming Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl">
            Elevate your brand with innovative solutions.
          </p>
          <div className="mt-8">
            <button
              onClick={scrollToAboutUs}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
