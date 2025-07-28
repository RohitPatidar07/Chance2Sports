import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const floatingCards = [
  {
    icon: 'fas fa-search',
    title: 'Scouting',
    angle: 0,
    content:
      'Scouting involves identifying emerging talent through local, regional, and national events. Our scouts analyze athlete performance, potential, and passion to ensure only the most dedicated individuals enter our development pipeline.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Assessment',
    angle: 90,
    content:
      'Assessment evaluates athletes based on technical skills, physical capabilities, and psychological resilience. This helps us create personalized progress plans and understand each athlete’s strengths and growth areas.'
  },
  {
    icon: 'fas fa-users',
    title: 'Selection',
    angle: 180,
    content:
      'Selection is based on merit and commitment. We ensure fairness and transparency by using performance metrics, trial outcomes, and attitude assessments to shortlist individuals who align with our high-performance goals.'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Development',
    angle: 270,
    content:
      'Development nurtures athletes through structured training, expert coaching, mental conditioning, and competitive exposure. Our goal is to transform potential into performance through ongoing support and mentorship.'
  }
];

const getCardPosition = (angle, radius) => {
  const rad = (angle * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),
    y: radius * Math.sin(rad)
  };
};

const TalentIdentificationSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const radius = 150;
  const rotate = useMotionValue(0);

  return (
    <section className="py-20 bg-gray-900 text-white relative  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* Left: Rotating Cards */}
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[320px] sm:h-[360px] md:h-[400px] mx-auto md:mx-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full border border-white border-opacity-20"
            animate={{ rotate: 360 }}
            style={{ rotate }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {floatingCards.map((card, index) => {
              const { x, y } = getCardPosition(card.angle, radius);
              return (
                <motion.div
                  key={index}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                  }}
                  onClick={() => setSelectedCard(card)}
                  className="cursor-pointer"
                >
                  <motion.div
                    style={{ rotate: useTransform(rotate, (r) => -r) }}
                    className="w-24 sm:w-28 h-24 sm:h-28 bg-white text-center rounded-2xl shadow-xl flex flex-col items-center justify-center text-black"
                  >
                    <i className={`${card.icon} text-orange-500 text-xl mb-1`}></i>
                    <p className="text-xs font-semibold">{card.title} ↗</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Description */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-500 mb-6">
            Talent Identification Process
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            Our comprehensive identification process is based on national and international rankings,
            ensuring we support the most promising athletes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="fas fa-globe text-orange-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">International Rankings</h4>
                <p className="text-sm text-gray-300">Top 16 in International Rankings</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="fas fa-flag text-orange-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">National Rankings</h4>
                <p className="text-sm text-gray-300">Top 8 in National Rankings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Slide-In Panel (fixed width, stays on side) */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="absolute top-0 right-0 h-full w-[480px] max-w-full bg-white z-50 px-6 py-8 shadow-2xl rounded-tl-[180px] overflow-y-auto border-l border-gray-700 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-start mb-6 relative">
                <div className="flex flex-col items-center w-full mt-4">
                  <i className={`${selectedCard.icon} text-green-400 text-3xl mb-2`} />
                  <h3 className="text-2xl font-semibold text-black text-center">
                    {selectedCard.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-0 top-0 text-3xl text-black hover:text-black-400"
                >
                  &times;
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-1">
                <p className="text-black leading-relaxed">
                  {selectedCard.content}
                </p>
              </div>

              <div className="mt-8">
                <Link to='/visitorfrom'>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                    REGISTER
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TalentIdentificationSection;
