// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import "./HomePage.css"
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import SupportCTA from '../SupportCTA/SupportCTA';
const HomePage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentStory, setCurrentStory] = useState(0);
    const [currentUpdate, setCurrentUpdate] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const stories = [
        {
            name: 'Akanksha Gupta',
            image: 'https://readdy.ai/api/search-image?query=young%20female%20badminton%20player%20holding%20trophy%20with%20medal%20around%20neck%20wearing%20sports%20attire%20against%20clean%20white%20background%20with%20professional%20lighting&width=300&height=400&seq=akanksha1&orientation=portrait',
            sport: 'Badminton',
            achievement: 'National Under-19 Champion',
            quote: 'C2S gave me the foundation and mentorship to win my first national title. The free training changed my life.',
            medals: '3 Gold, 2 Silver',
            ranking: 'National Rank #2 U-19'
        },
        {
            name: 'Anika Dubey',
            image: 'https://readdy.ai/api/search-image?query=confident%20young%20female%20swimmer%20in%20swimming%20cap%20holding%20multiple%20medals%20with%20proud%20expression%20against%20minimalist%20white%20background%20with%20professional%20lighting&width=300&height=400&seq=anika1&orientation=portrait',
            sport: 'Swimming',
            achievement: 'State Record Holder',
            quote: 'The scholarship program opened doors I never imagined. Now I represent my state at national championships.',
            medals: '5 Gold, 3 Silver, 1 Bronze',
            ranking: 'State Rank #1 in 200m Freestyle'
        },
        {
            name: 'Vasundhara Nangare',
            image: 'https://readdy.ai/api/search-image?query=determined%20young%20female%20athlete%20in%20track%20and%20field%20uniform%20with%20gold%20medal%20displaying%20winning%20pose%20against%20clean%20white%20background%20with%20inspirational%20lighting&width=300&height=400&seq=vasundhara1&orientation=portrait',
            sport: 'Athletics',
            achievement: 'Junior Asian Games Qualifier',
            quote: 'From grassroots to international competitions - C2S mentorship made this journey possible.',
            medals: '4 Gold, 1 Silver',
            ranking: 'Junior National Rank #3 in 400m'
        },
        {
            name: 'Vivek & Vinay Shinde',
            image: 'https://readdy.ai/api/search-image?query=twin%20young%20male%20athletes%20in%20wrestling%20gear%20holding%20championship%20medals%20together%20with%20determined%20expressions%20against%20clean%20white%20background%20with%20dynamic%20lighting&width=300&height=400&seq=twins1&orientation=portrait',
            sport: 'Wrestling',
            achievement: 'Twin National Champions',
            quote: 'C2S believed in our potential when others doubted. Now we compete internationally as twin champions.',
            medals: '6 Gold, 2 Silver (Combined)',
            ranking: 'Both in Top 5 National Rankings'
        }
    ];
    const latestUpdates = [
        {
            title: 'New Scholarship Program Launched',
            date: '2024-01-15',
            image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20athletes%20receiving%20scholarship%20certificates%20in%20modern%20ceremony%20hall%20with%20celebratory%20atmosphere%20and%20professional%20lighting&width=400&height=250&seq=update1&orientation=landscape',
            excerpt: '50 new scholarships awarded to promising athletes across 10 different sports categories.'
        },
        {
            title: 'International Training Camp Success',
            date: '2024-01-10',
            image: 'https://readdy.ai/api/search-image?query=young%20athletes%20training%20with%20international%20coaches%20in%20state-of-art%20sports%20facility%20with%20focused%20training%20atmosphere%20and%20professional%20equipment&width=400&height=250&seq=update2&orientation=landscape',
            excerpt: '15 athletes selected for advanced international training programs with world-class coaches.'
        },
        {
            title: 'Record Breaking Performance',
            date: '2024-01-05',
            image: 'https://readdy.ai/api/search-image?query=young%20athlete%20breaking%20finish%20line%20tape%20with%20celebration%20crowd%20in%20background%20during%20championship%20event%20with%20dynamic%20action%20photography&width=400&height=250&seq=update3&orientation=landscape',
            excerpt: 'C2S athletes set 8 new state records in recent championship competitions.'
        }
    ];
    const programs = [
        {
            title: 'Grassroots Development',
            icon: 'fas fa-seedling',
            description: 'Building foundational skills and character for young athletes aged 8-14 through comprehensive training programs.',
            benefits: ['Free coaching', 'Equipment provided', 'Nutrition guidance']
        },
        {
            title: 'Talent Scouting',
            icon: 'fas fa-search',
            description: 'Identifying and nurturing exceptional talent through systematic scouting programs across rural and urban areas.',
            benefits: ['Performance analysis', 'Skill assessment', 'Career guidance']
        },
        {
            title: 'Scholarship Program',
            icon: 'fas fa-graduation-cap',
            description: 'Providing financial support and educational opportunities to deserving athletes from underprivileged backgrounds.',
            benefits: ['Full tuition support', 'Training expenses', 'Competition fees']
        },
        {
            title: 'Mentorship Network',
            icon: 'fas fa-hands-helping',
            description: 'Connecting young athletes with experienced coaches, former champions, and industry professionals.',
            benefits: ['1-on-1 mentoring', 'Career planning', 'Mental health support']
        }
    ];
    const nextStory = () => {
        setCurrentStory((prev) => (prev + 1) % stories.length);
    };
    const prevStory = () => {
        setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    };
    const nextUpdate = () => {
        setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length);
    };
    const prevUpdate = () => {
        setCurrentUpdate((prev) => (prev - 1 + latestUpdates.length) % latestUpdates.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [latestUpdates.length]);
    return (
        <div className="bg-white">
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
                <div
                    className="absolute inset-0 hero-parallax"
                    style={{
                        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 107, 53, 0.1) 100%), url('https://readdy.ai/api/search-image?query=bright%20and%20modern%20sports%20facility%20with%20young%20athletes%20training%2C%20natural%20lighting%20streaming%20through%20large%20windows%2C%20inspirational%20and%20uplifting%20atmosphere%20with%20clean%20minimalist%20design&width=1440&height=1024&seq=hero3&orientation=landscape')`
                    }}
                />
                <div className="relative z-10 ms-5 p-5">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-slate-800">
                            <div className="achievement-badge mb-4 text-reveal bg-orange-100 text-orange-700">
                                Empowering Champions Since 2010
                            </div>
                            <h1 className="font-orbitron text-5xl lg:text-6xl font-bold mb-6 text-reveal">
                                Free Training.<br />
                                Real <span className="text-orange-600">Champions</span>.
                            </h1>
                            <p className="font-inter text-xl mb-8 text-slate-600 text-reveal" style={{ animationDelay: '0.3s' }}>
                                For over 14 years, Chance2Sports  has provided <strong>completely free training, mentorship, and educational opportunities</strong> to young athletes from all backgrounds, transforming dreams into reality.
                            </p>
                            {/* Impact Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8 text-reveal" style={{ animationDelay: '0.6s' }}>
                                <div className="text-center">
                                    <div className="stats-counter font-orbitron">2000+</div>
                                    <p className="font-inter text-sm text-gray-300">Athletes Trained</p>
                                </div>
                                <div className="text-center">
                                    <div className="stats-counter font-orbitron">500+</div>
                                    <p className="font-inter text-sm text-gray-300">Scholarships Awarded</p>
                                </div>
                                <div className="text-center">
                                    <div className="stats-counter font-orbitron">150+</div>
                                    <p className="font-inter text-sm text-gray-300">Champions Created</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-reveal" style={{ animationDelay: '0.9s' }}>
                                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 !rounded-button font-inter font-semibold pulse-glow hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer">
                                    Join Our Programs
                                </button>
                                <button className="neon-border bg-transparent px-8 py-4 !rounded-button font-inter font-semibold whitespace-nowrap cursor-pointer">
                                    Read More About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="mt-5 bg-gray-50">
                <div className="p-5 mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-orbitron text-4xl font-bold text-slate-900 mb-4">Our Programs</h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive programs designed to nurture talent at every stage of athletic development
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg card-hover cursor-pointer">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                                    <i className={`${program.icon} text-white text-2xl`}></i>
                                </div>
                                <h3 className="font-poppins text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
                                <p className="font-inter text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                                <div className="space-y-2">
                                    {program.benefits.map((benefit, benefitIndex) => (
                                        <div key={benefitIndex} className="flex items-center">
                                            <i className="fas fa-check text-orange-500 text-sm mr-3"></i>
                                            <span className="font-inter text-sm text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 bg-white">
                <div className=" mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-orbitron text-4xl font-bold text-slate-900 mb-4">Champions We've Created</h2>
                        <p className="font-inter text-xl text-gray-600">
                            Meet the athletes who started their journey with free training and reached the top
                        </p>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentStory * 100}%)` }}
                            >
                                {stories.map((story, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="max-w-5xl mx-auto">
                                            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl overflow-hidden card-hover">
                                                <div className="grid md:grid-cols-2 gap-0">
                                                    <div className="relative h-96 md:h-auto overflow-hidden">
                                                        <img
                                                            src={story.image}
                                                            alt={story.name}
                                                            className="w-full h-full object-cover object-top"
                                                        />
                                                        <div className="absolute top-4 left-4">
                                                            <div className="achievement-badge">{story.sport}</div>
                                                        </div>
                                                    </div>
                                                    <div className="p-12 flex flex-col justify-center">
                                                        <h3 className="font-poppins text-3xl font-bold text-slate-900 mb-2">
                                                            {story.name}
                                                        </h3>
                                                        <p className="font-inter text-lg font-semibold text-orange-600 mb-6">
                                                            {story.achievement}
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                                            <div className="bg-orange-50 p-4 rounded-xl">
                                                                <h4 className="font-poppins text-sm font-semibold text-slate-900 mb-1">Medals Won</h4>
                                                                <p className="font-inter text-sm text-orange-600 font-medium">{story.medals}</p>
                                                            </div>
                                                            <div className="bg-orange-50 p-4 rounded-xl">
                                                                <h4 className="font-poppins text-sm font-semibold text-slate-900 mb-1">Current Ranking</h4>
                                                                <p className="font-inter text-sm text-orange-600 font-medium">{story.ranking}</p>
                                                            </div>
                                                        </div>
                                                        <blockquote className="font-inter text-lg text-gray-700 italic leading-relaxed mb-8">
                                                            "{story.quote}"
                                                        </blockquote>
                                                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 !rounded-button font-inter font-semibold self-start whitespace-nowrap cursor-pointer hover:from-orange-600 hover:to-orange-700 transition-all">
                                                            View Full Story
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Navigation Controls */}
                        <button
                            onClick={prevStory}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={nextStory}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        {/* Pagination Dots */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {stories.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentStory(index)}
                                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentStory
                                        ? 'bg-orange-500 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Updates Section */}
            <section className="py-20 bg-orange-50">
                <div className=" mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-orbitron text-4xl font-bold text-slate-800 mb-4">Latest Updates</h2>
                        <p className="font-inter text-xl text-slate-600">
                            Stay updated with our recent achievements and program developments
                        </p>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentUpdate * 100}%)` }}
                            >
                                {latestUpdates.map((update, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="max-w-4xl mx-auto">
                                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                                                <div className="grid md:grid-cols-2 gap-0">
                                                    <div className="relative h-64 md:h-auto overflow-hidden">
                                                        <img
                                                            src={update.image}
                                                            alt={update.title}
                                                            className="w-full h-full object-cover object-top"
                                                        />
                                                    </div>
                                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                                        <div className="text-sm font-inter text-orange-600 font-semibold mb-3">
                                                            {new Date(update.date).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </div>
                                                        <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-4">
                                                            {update.title}
                                                        </h3>
                                                        <p className="font-inter text-gray-700 leading-relaxed mb-6">
                                                            {update.excerpt}
                                                        </p>
                                                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 !rounded-button font-inter font-semibold self-start whitespace-nowrap cursor-pointer hover:from-orange-600 hover:to-orange-700 transition-all">
                                                            Read More
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Navigation Controls */}
                        <button
                            onClick={prevUpdate}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={nextUpdate}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        {/* Pagination Dots */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {latestUpdates.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentUpdate(index)}
                                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentUpdate
                                        ? 'bg-orange-500 scale-125'
                                        : 'bg-gray-400 hover:bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.85)), url('https://readdy.ai/api/search-image?query=bright%20and%20modern%20sports%20training%20facility%20with%20natural%20lighting%2C%20young%20athletes%20practicing%20with%20professional%20equipment%2C%20inspiring%20and%20clean%20environment&width=1440&height=800&seq=mission3&orientation=landscape')`
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="floating-animation">
                            <div
                                className="h-96 rounded-3xl overflow-hidden shadow-2xl"
                                style={{
                                    backgroundImage: `url('https://readdy.ai/api/search-image?query=bright%20and%20inspiring%20portrait%20of%20young%20athlete%20with%20determined%20expression%20during%20training%2C%20natural%20lighting%20and%20clean%20modern%20background&width=500&height=400&seq=mission4&orientation=landscape')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        </div>
                        <div className="text-slate-800">
                            <div className="mb-12">
                                <h2 className="font-orbitron text-4xl font-bold mb-6 text-orange-600">Our Mission</h2>
                                <p className="font-inter text-lg text-slate-600 leading-relaxed">
                                    Since 2010, our mission has been simple yet powerful: to provide completely free training,
                                    mentorship, and educational opportunities to young athletes regardless of their economic background.
                                    We believe talent knows no boundaries, and every child deserves the chance to become a champion.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-poppins text-2xl font-semibold mb-4 text-white">Our Vision</h3>
                                <p className="font-inter text-lg text-gray-200 leading-relaxed">
                                    To create a world where every young athlete has access to quality training and mentorship,
                                    transforming not just individual lives but entire communities through the power of sports
                                    and the values it instills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Support CTA Section */}
          <SupportCTA/>
            {/* Footer */}
            <Footer />
        </div>
    );
};
export default HomePage