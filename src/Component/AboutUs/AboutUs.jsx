// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SupportCTA from '../SupportCTA/SupportCTA';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
const AboutUs = () => {
    const [currentMilestone, setCurrentMilestone] = useState(0);
    const milestones = [
        { year: '2009', title: 'Where it all began', description: 'RNSF was established to promote sports in Pune.' },
        { year: '2014', title: 'Laying the foundation', description: 'Built the city\'s first public court and launched our community program.' },
        { year: '2017', title: 'Reaching new heights', description: 'Expanded to multiple cities, mentored national and international players, and promoted free sports activities.' },
        { year: '2019', title: 'International success', description: 'Trained the GU-17 Scottish Junior Open winner and several National Champions.' },
        { year: '2022', title: 'Empowering young talent', description: 'Continued supporting grassroots programs and nurturing future stars.' },
        { year: '2024', title: 'Bigger and better', description: 'Launched the largest public court center and introduced a talent hunt to discover and train young athletes.' },
        { year: '2025', title: 'The future is here', description: 'Set to open high-performance centers and expand our community programs to empower even more talent.' }
    ];
    return (
        <div className="min-h-screen bg-white">

            {/* Header */}
            <Header/>

            {/* Hero Section */}
            <section className=" relative h-96  overflow-hidden" >
                <div className="absolute inset-0">
                    <img
                        src="https://i.postimg.cc/mZJ4Hk1p/7d8787172662ed7b86e743b3b5cefa67.jpg"
                        alt="Sports Training Facility"
                        className="w-full h-full object-cover object-top opacity-30"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
                    <div className="text-black max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6 ">Equal Opportunity in Sports</h1>
                        <p className="text-xl mb-8 text-black">
                            Chance2Sports drives various initiatives through its two arms: RNSF and Champions Gurukul,
                            creating pathways for athletes to achieve their dreams.
                        </p>
                        <Link
                            to="/donatejoinus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-orange-500 text-white px-8 py-3 !rounded-button hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>
            {/* C2S Overview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://readdy.ai/api/search-image?query=Modern%20sports%20academy%20building%20with%20glass%20facade%20students%20and%20coaches%20in%20foreground%20professional%20training%20environment%20clean%20architectural%20design%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=c2s-overview&orientation=landscape"
                                alt="C2S Overview"
                                className="w-full h-96 object-cover object-top !rounded-button"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Chance2Sports</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At Chance2Sports, we believe every athlete deserves an opportunity to excel. Our comprehensive
                                approach combines grassroots development with elite training programs, creating a complete
                                ecosystem for sporting excellence.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Through our two main pillars - RNSF and Champions Gurukul - we provide structured pathways
                                from community-level participation to international competition, ensuring no talent goes unnoticed.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                                    <div className="text-gray-600">Years of Excellence</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                                    <div className="text-gray-600">Athletes Trained</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Milestones Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Milestones</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From small beginnings to big achievements, here's our journey in sports excellence
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-white p-6 !rounded-button shadow-lg border border-gray-100">
                                        <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


{/* ✨ New Journey Reflection Section */}
<section className="py-12 bg-orange-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h3 className="text-4xl font-bold text-gray-900 mb-4">Our journey continues</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Our journey is proof that with hard work, focus, and passion, dreams can become reality.
      Stay tuned for more milestones as we continue to inspire and uplift the sports community!
    </p>
  </div>
</section>

            {/* Leadership Team */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
                        <p className="text-xl text-gray-600">Meet the visionaries driving our mission forward</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 !rounded-button shadow-lg">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://i.postimg.cc/jjrZK0C4/1.png"
                                    alt="Abhinav Sinha"
                                    className="w-32 h-32 rounded-full object-cover object-top mb-6"
                                />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Abhinav Sinha</h3>
                                <div className="text-orange-500 font-medium mb-4">Founder & CEO</div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A lawyer turned serial sports entrepreneur, Abhinav is one of the youngest racket sports
                                    Player/Coach to mentor National Champions consistently every year. Former International
                                    squash player who coached the Indian team for Asian Junior Championship (2023), British
                                    Junior Open (2020) & World Junior Championship (2019). Two-time National champion in
                                    2019 & 2020 (Pro Coach) with highest world ranking of 285.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 !rounded-button shadow-lg">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://i.postimg.cc/K8hn37FZ/2.png"
                                    alt="Chetan Desai"
                                    className="w-32 h-32 rounded-full object-cover object-top mb-6"
                                />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Chetan Desai</h3>
                                <div className="text-orange-500 font-medium mb-4">Co-Founder & Director</div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    With sports close to his heart and passion in his mind, Chetan has been one of the finest
                                    Tennis players with more than 50 years of experience. Former ATP-ranked player with career
                                    high of 310. Won Gold medal in inaugural National Games (Olympic Format) in 1985 at New Delhi.
                                    Leadership spans C-suite roles across FMCG, garment exports, sports management, and media industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mentors Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mentors</h2>
                        <p className="text-xl text-gray-600">
                            We are privileged to have legendary mentors deeply involved in our program
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 !rounded-button">
                            <div className="flex items-start space-x-6">
                                <img
                                    src="https://i.postimg.cc/V6vMPD9F/3.png"
                                    alt="Anil Nayar"
                                    className="w-24 h-24 rounded-full object-cover object-top"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Anil Nayar</h3>
                                    <div className="text-orange-500 font-medium mb-3">28-time National Champion</div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        A 28-time National Champion across India, USA, Canada, and Mexico. Former National
                                        Champion trained at Cricket Club of India and Harvard University.
                                    </p>
                                    <div className="space-y-1 text-xs text-gray-500">
                                        <div>• William J. Bingham Award - Harvard University (1969)</div>
                                        <div>• Arjuna Award (1969)</div>
                                        <div>• U.S. Squash Hall of Fame (2018)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 !rounded-button">
                            <div className="flex items-start space-x-6">
                                <img
                                    src="https://i.postimg.cc/bNkm5www/4.png"
                                    alt="Naval Pandole"
                                    className="w-24 h-24 rounded-full object-cover object-top"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Naval Pandole</h3>
                                    <div className="text-orange-500 font-medium mb-3">Sports Administrator</div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Vice President of The Cricket Club of India for two terms and Secretary of Squash
                                        Department for over 25 years. Pioneered India's first glass-backed squash court.
                                    </p>
                                    <div className="space-y-1 text-xs text-gray-500">
                                        <div>• Mentored teams at Junior Asians in Bahrain</div>
                                        <div>• Asian Senior Championships coach</div>
                                        <div>• 25+ years in squash promotion</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Donors Recognition */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Supporters</h2>
                        <p className="text-xl text-gray-600">
                            Grateful to our donors and partners who make our mission possible
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 !rounded-button shadow-sm text-center">
                            <i className="fas fa-building text-3xl text-blue-600 mb-3"></i>
                            <div className="font-semibold text-gray-900">Corporate Partners</div>
                            <div className="text-sm text-gray-600 mt-2">Supporting infrastructure development</div>
                        </div>
                        <div className="bg-white p-6 !rounded-button shadow-sm text-center">
                            <i className="fas fa-users text-3xl text-orange-500 mb-3"></i>
                            <div className="font-semibold text-gray-900">Community Donors</div>
                            <div className="text-sm text-gray-600 mt-2">Grassroots program funding</div>
                        </div>
                        <div className="bg-white p-6 !rounded-button shadow-sm text-center">
                            <i className="fas fa-trophy text-3xl text-yellow-500 mb-3"></i>
                            <div className="font-semibold text-gray-900">Sports Foundations</div>
                            <div className="text-sm text-gray-600 mt-2">Elite athlete development</div>
                        </div>
                        <div className="bg-white p-6 !rounded-button shadow-sm text-center">
                            <i className="fas fa-graduation-cap text-3xl text-green-500 mb-3"></i>
                            <div className="font-semibold text-gray-900">Educational Partners</div>
                            <div className="text-sm text-gray-600 mt-2">Scholarship programs</div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">
                            Interested in supporting our mission? Join our community of changemakers.
                        </p>
                        <button className="bg-orange-500 text-white px-8 py-3 !rounded-button hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
                            Become a Supporter
                        </button>
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <SupportCTA/>

            {/* Footer */}
            <Footer/>      
        </div>
    );
};
export default AboutUs