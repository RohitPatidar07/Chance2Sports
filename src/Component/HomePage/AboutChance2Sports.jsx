import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./HomePage.css";

const AboutChance2Sports = () => {
  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className='font-orbitron text-4xl font-bold text-slate-900 mb-5 py-4 text-center'>Empowering the Next Generation of Champions</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image with animation */}
        <div 
          ref={imageRef}
          className="md:w-1/2 w-full"
          style={{
            opacity: imageInView ? 1 : 0,
            transform: imageInView ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
          }}
        >
          <img
            src="https://i.ibb.co/60Cvn8th/image.png"
            alt="Chance2Sports"
            className="w-full h-auto rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl"
            style={{ 
              border: 'none',
              borderRadius: '8px',
            }}
          />
        </div>

        {/* Right Side: Content with animation */}
        <div 
          ref={contentRef}
          className="md:w-1/2 w-full text-gray-800"
          style={{
            opacity: contentInView ? 1 : 0,
            transform: contentInView ? 'translateX(0)' : 'translateX(20px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
          }}
        >
          <p className="mb-4 font-inter leading-relaxed">
            Chance2Sports implements and oversees initiatives aimed at identifying and nurturing young athletic talent across a range of sports, with a particular emphasis on the welfare and advancement of economically disadvantaged youth. Our programs provide free training and structured support to help young athletes overcome socio-economic barriers, using sports as a transformative tool. We are committed to fostering their holistic development, including access to education, thereby creating pathways toward sustainable and successful careers.
          </p>
          <p className='font-inter leading-relaxed'>
            Since 2010, we have actively engaged and supported athletes from diverse backgrounds, breaking the barriers for talented youth firmly believing that the next champion can emerge from the grassroots level. Over the years, this belief has been validated through numerous success stories of athletes who have risen from humble beginnings to achieve remarkable accomplishments through our programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutChance2Sports;