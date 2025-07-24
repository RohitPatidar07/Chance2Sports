// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
const ChampionsClubElitePass = () => {
    const [activeTab, setActiveTab] = useState('stage1');
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
         <Header/>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-orange-50 to-white py-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20athletes%20training%20in%20modern%20sports%20facility%20with%20dynamic%20lighting%20and%20motivational%20atmosphere%20showcasing%20determination%20and%20excellence%20in%20competitive%20sports%20environment&width=1440&height=600&seq=hero-bg-001&orientation=landscape')` }}>
                </div>
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Champions Club <span className="text-orange-500">Elite Pass</span>
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                A comprehensive initiative dedicated to identifying, supporting, and elevating exceptional athletic talent with the potential to achieve top ranks in national and international competitions. Through a meticulous and rigorous selection process, we identify athletes across various sports who exhibit extraordinary skill, dedication, and the potential to represent their country at elite levels.
                            </p>
                            <div className="flex items-center space-x-8 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">50+</div>
                                    <div className="text-sm text-gray-600">Elite Athletes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">15+</div>
                                    <div className="text-sm text-gray-600">National Titles</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">8+</div>
                                    <div className="text-sm text-gray-600">International Medals</div>
                                </div>
                            </div>
                            <button className="bg-orange-500 text-white px-8 py-3 !rounded-button font-medium hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
                                Learn More
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://readdy.ai/api/search-image?query=Young%20professional%20athlete%20holding%20trophy%20with%20confident%20smile%20wearing%20sports%20uniform%20in%20modern%20training%20facility%20with%20clean%20white%20background%20and%20professional%20lighting&width=600&height=700&seq=hero-athlete-001&orientation=portrait"
                                alt="Elite Athlete"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Talent Identification Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Talent Identification Process</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive identification process is based on national and international rankings, ensuring we support the most promising athletes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-search text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Scouting</h3>
                            <p className="text-gray-600 mb-4">Identification of talented athletes through comprehensive scouting networks</p>
                            <div className="text-sm text-orange-500 font-medium">Stage 1</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-chart-line text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
                            <p className="text-gray-600 mb-4">Detailed evaluation based on performance metrics and potential</p>
                            <div className="text-sm text-orange-500 font-medium">Stage 2</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-users text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Selection</h3>
                            <p className="text-gray-600 mb-4">Rigorous selection process for elite program participation</p>
                            <div className="text-sm text-orange-500 font-medium">Stage 3</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-trophy text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
                            <p className="text-gray-600 mb-4">Comprehensive training and development programs</p>
                            <div className="text-sm text-orange-500 font-medium">Stage 4</div>
                        </div>
                    </div>
                    <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Selection Criteria</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-globe text-orange-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">International Rankings</h4>
                                    <p className="text-gray-600">Top 16 in International Rankings</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-flag text-orange-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">National Rankings</h4>
                                    <p className="text-gray-600">Top 8 in National Rankings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Elite Athletes Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">The Elite Stars of Chance2Sports</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our players come from diverse backgrounds, training with limited resources yet making a significant impact at national and international levels.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Young%20female%20squash%20player%20holding%20racket%20with%20confident%20smile%20wearing%20sports%20attire%20in%20professional%20training%20facility%20with%20clean%20white%20background%20and%20natural%20lighting&width=300&height=300&seq=akanksha-001&orientation=squarish"
                                    alt="Akanksha Gupta"
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Akanksha Gupta</h3>
                                <p className="text-orange-500 font-medium">Asia Ranked Top 5</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-trophy text-orange-500"></i>
                                        <span>Junior National Champion GU-11</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-medal text-orange-500"></i>
                                        <span>Top 3 U-17 Rankings</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span>97% ICSE Board Exams</span>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm">
                                        <li>Gold Medal at Maharashtra State Championship 2024</li>
                                        <li>Selected for National Training Camp</li>
                                        <li>Represented India at Asian Junior Championship</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold mb-2 text-gray-900">Training Journey:</h4>
                                    <p className="text-sm text-gray-600">Started training at age 7 under Coach Cyrus Poncha. Demonstrated exceptional talent early on, winning her first state title at age 9. Currently training 6 hours daily with focus on technical skills and match strategy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Young%20female%20squash%20player%20with%20golden%20hair%20holding%20trophy%20with%20bright%20smile%20wearing%20sports%20uniform%20in%20modern%20training%20facility%20with%20clean%20white%20background&width=300&height=300&seq=anika-001&orientation=squarish"
                                    alt="Anika Dubey"
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Anika Dubey</h3>
                                <p className="text-orange-500 font-medium">Golden Girl of Pune</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-trophy text-orange-500"></i>
                                        <span>Two National Titles</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-medal text-orange-500"></i>
                                        <span>India Rank 1 GU-15</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span>HCL Indian Open Winner</span>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm">
                                        <li>National Champion 2023 & 2022</li>
                                        <li>Winner of HCL Indian Junior Open</li>
                                        <li>Selected for Asian Games Training Camp</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold mb-2 text-gray-900">Training Journey:</h4>
                                    <p className="text-sm text-gray-600">Started at age 8 with Coach Rahul Vasant. Showed remarkable progress, becoming state champion within two years. Currently following an intensive training regime with 7 hours daily practice.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg">
                            <div className="text-center mb-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Young%20female%20squash%20player%20with%20determined%20expression%20holding%20racket%20wearing%20sports%20attire%20in%20professional%20training%20facility%20with%20clean%20white%20background&width=300&height=300&seq=vasundhara-001&orientation=squarish"
                                    alt="Vasundhara Nagare"
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Vasundhara Nagare</h3>
                                <p className="text-orange-500 font-medium">Rising Star from Kalamb</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-trophy text-orange-500"></i>
                                        <span>3rd Place PSA Challenger</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-medal text-orange-500"></i>
                                        <span>Top 4 India GU-13</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span>Poona Club Open Finalist</span>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm">
                                        <li>Bronze Medal at National Championship</li>
                                        <li>Winner of Maharashtra State Junior Open</li>
                                        <li>Selected for Elite Training Program</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold mb-2 text-gray-900">Training Journey:</h4>
                                    <p className="text-sm text-gray-600">Discovered through Chance2Sports talent hunt in Kalamb. Started formal training at age 10. Despite limited resources, achieved remarkable progress through dedication and support from the program.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Roadmap to Olympics */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Roadmap to Olympics</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our structured pathway guides athletes from grassroots level to Olympic competition through four comprehensive stages.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="border-b border-gray-200">
                            <nav className="flex">
                                <button
                                    onClick={() => setActiveTab('stage1')}
                                    className={`px-8 py-4 font-medium text-sm cursor-pointer whitespace-nowrap ${activeTab === 'stage1'
                                            ? 'border-b-2 border-orange-500 text-orange-600 bg-orange-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Stage 1: Foundation
                                </button>
                                <button
                                    onClick={() => setActiveTab('stage2')}
                                    className={`px-8 py-4 font-medium text-sm cursor-pointer whitespace-nowrap ${activeTab === 'stage2'
                                            ? 'border-b-2 border-orange-500 text-orange-600 bg-orange-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Stage 2: Development
                                </button>
                                <button
                                    onClick={() => setActiveTab('stage3')}
                                    className={`px-8 py-4 font-medium text-sm cursor-pointer whitespace-nowrap ${activeTab === 'stage3'
                                            ? 'border-b-2 border-orange-500 text-orange-600 bg-orange-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Stage 3: Elite Training
                                </button>
                                <button
                                    onClick={() => setActiveTab('stage4')}
                                    className={`px-8 py-4 font-medium text-sm cursor-pointer whitespace-nowrap ${activeTab === 'stage4'
                                            ? 'border-b-2 border-orange-500 text-orange-600 bg-orange-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Stage 4: Olympic Preparation
                                </button>
                            </nav>
                        </div>
                        <div className="p-8">
                            {activeTab === 'stage1' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation Building</h3>
                                        <p className="text-gray-600 mb-6">
                                            Focus on fundamental skills, basic fitness, and sport-specific techniques. Athletes develop core competencies and passion for their chosen sport.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Basic skill development</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Fitness foundation</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Mental preparation</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Young%20athletes%20training%20basic%20skills%20in%20modern%20sports%20facility%20with%20coach%20guidance%20showing%20foundation%20building%20and%20fundamental%20techniques%20development&width=500&height=400&seq=stage1-001&orientation=landscape"
                                            alt="Foundation Training"
                                            className="w-full h-64 object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 'stage2' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill Development</h3>
                                        <p className="text-gray-600 mb-6">
                                            Advanced training programs focusing on technique refinement, tactical understanding, and competitive experience at regional level.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Advanced technique training</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Regional competitions</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Tactical development</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Athletes%20practicing%20advanced%20techniques%20in%20professional%20training%20facility%20with%20specialized%20equipment%20and%20intensive%20coaching%20for%20skill%20development&width=500&height=400&seq=stage2-001&orientation=landscape"
                                            alt="Skill Development"
                                            className="w-full h-64 object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 'stage3' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Training</h3>
                                        <p className="text-gray-600 mb-6">
                                            High-performance training with world-class coaches, sports science support, and participation in national championships.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Elite coaching programs</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Sports science support</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">National competitions</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Elite%20athletes%20training%20in%20high%20performance%20facility%20with%20advanced%20equipment%20and%20professional%20coaches%20for%20national%20level%20competition%20preparation&width=500&height=400&seq=stage3-001&orientation=landscape"
                                            alt="Elite Training"
                                            className="w-full h-64 object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 'stage4' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Olympic Preparation</h3>
                                        <p className="text-gray-600 mb-6">
                                            Final preparation phase with Olympic-level training, international competitions, and comprehensive support systems.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Olympic-level training</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">International competitions</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <i className="fas fa-check-circle text-orange-500"></i>
                                                <span className="text-gray-700">Full support systems</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img
                                            src="https://readdy.ai/api/search-image?query=Olympic%20level%20athletes%20training%20in%20world%20class%20facility%20with%20cutting%20edge%20technology%20and%20international%20coaching%20for%20Olympic%20Games%20preparation&width=500&height=400&seq=stage4-001&orientation=landscape"
                                            alt="Olympic Preparation"
                                            className="w-full h-64 object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Hall of Fame */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Hall of Fame - National Champions</h2>
                        <p className="text-lg text-gray-600">Celebrating our champions who have achieved excellence at the highest level</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-2">2023 & 2022</div>
                            <h3 className="font-bold text-gray-900 mb-1">Anika Dubey</h3>
                            <p className="text-sm text-gray-600">(Current Champion)</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-2">2020 & 2021</div>
                            <h3 className="font-bold text-gray-900 mb-1">Abhinav Sinha</h3>
                            <p className="text-sm text-gray-600">(Professional)</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-2">2019</div>
                            <h3 className="font-bold text-gray-900 mb-1">Akanksha Gupta</h3>
                            <p className="text-sm text-gray-600">(Youngest Champion)</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-2">2017 & 2018</div>
                            <h3 className="font-bold text-gray-900 mb-1">Yoshna Singh</h3>
                            <p className="text-sm text-gray-600">(First from Pune)</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Success Stories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The impact of Chance2Sports is evident in the success stories of athletes who have risen from challenging circumstances to achieve greatness.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 lg:p-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Silent Revolution on a Single Squash Court</h3>
                                <div className="space-y-6">
                                    <p className="text-gray-600">
                                        In the town of Kalamb in Maharashtra, India, where limited resources and diverse backgrounds once created barriers, a silent revolution has been unfolding on the squash court. With just one court, which was previously in poor condition, serving as their arena, Chance2Sports embarked on a mission to empower 13 determined youngsters.
                                    </p>
                                    <p className="text-gray-600">
                                        These talented individuals, hailing from diverse backgrounds, have been given the invaluable opportunity to train at the highest level of excellence. With 13 kids actively participating in the program under Kanga Camp, Chance2Sports has gone the extra mile to support some of them in competing at the national level.
                                    </p>
                                    <div className="border-l-4 border-orange-500 pl-4 my-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li>• 5 players qualified for national championships</li>
                                            <li>• 3 players ranked in top 10 nationally</li>
                                            <li>• 100% improvement in player performance</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-600">
                                        The program has transformed not just the athletes but the entire community's perspective on sports. Parents who were once skeptical now actively support their children's sporting ambitions. The success has attracted attention from sports authorities and other communities looking to replicate this model.
                                    </p>
                                    <div className="bg-orange-50 p-4 rounded-lg mt-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Future Vision</h4>
                                        <p className="text-gray-600 text-sm">
                                            Our goal is to expand this initiative to more communities, creating a network of training centers that can nurture talent from grassroots to glory. We're currently in talks with local authorities to develop two more courts and establish a comprehensive training academy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Group%20of%20young%20athletes%20training%20together%20on%20single%20squash%20court%20in%20rural%20facility%20showing%20determination%20and%20community%20spirit%20with%20inspiring%20transformation%20story&width=600&height=500&seq=kalamb-story-001&orientation=landscape"
                                    alt="Kalamb Success Story"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Emerging Talent from Kalamb</h3>
                            <p className="text-gray-600 mb-4">
                                Inspired by Vasundhara Nangare's success, two more players from Kalamb have started performing at the national level. Vedant Shinde has emerged as a standout performer in the under-9 category, displaying promising potential for future success.
                            </p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-star text-orange-500"></i>
                                    <span>Vedant Shinde - Top 15 Boys U-11</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-star text-orange-500"></i>
                                    <span>Vinay & Vivek Shinde - Top 10 consistently</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h3>
                            <p className="text-gray-600 mb-4">
                                The transformation in Kalamb demonstrates the power of focused investment in grassroots sports development. What started with one court has become a beacon of hope for the entire community.
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-orange-500">13</div>
                                    <div className="text-xs text-gray-600">Active Players</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-orange-500">5</div>
                                    <div className="text-xs text-gray-600">National Level</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-orange-500">3</div>
                                    <div className="text-xs text-gray-600">Top Rankings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
      <Footer/>
        </div>
    );
};
export default ChampionsClubElitePass