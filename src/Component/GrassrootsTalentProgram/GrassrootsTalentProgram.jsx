// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import SupportCTA from '../SupportCTA/SupportCTA';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
const GrassrootsTalentProgram = () => {
    const [activeStory, setActiveStory] = useState(0);
    const athletes = [
        {
            name: "Anika Dubey",
            title: "National Champion",
            achievement: "Winner of Under-15 National Championship",
            description: "Anika's journey from grassroots to national recognition showcases the power of structured training and unwavering determination.",
            image: "https://readdy.ai/api/search-image?query=young%20female%20squash%20player%20holding%20trophy%20with%20confident%20smile%20wearing%20sports%20attire%20against%20clean%20white%20background%20professional%20sports%20photography&width=300&height=400&seq=athlete1&orientation=portrait"
        },
        {
            name: "Akanksha Gupta",
            title: "International Competitor",
            achievement: "Represented India in Asian Junior Championships",
            description: "From local courts to international stages, Akanksha exemplifies how grassroots programs can nurture world-class talent.",
            image: "https://readdy.ai/api/search-image?query=confident%20young%20female%20athlete%20with%20squash%20racket%20wearing%20blue%20sports%20uniform%20against%20minimalist%20white%20background%20professional%20portrait%20photography&width=300&height=400&seq=athlete2&orientation=portrait"
        },
        {
            name: "Vasundhara Nagare",
            title: "Rising Star",
            achievement: "State Level Champion & National Qualifier",
            description: "Vasundhara's rapid progress through our program demonstrates the effectiveness of our talent development approach.",
            image: "https://readdy.ai/api/search-image?query=determined%20young%20female%20squash%20player%20in%20action%20pose%20with%20racket%20wearing%20professional%20sports%20attire%20against%20clean%20white%20studio%20background&width=300&height=400&seq=athlete3&orientation=portrait"
        }
    ];
    const programs = [
        {
            title: "Kanga Kids Program",
            period: "2022 - Present",
            description: "Aimed at grassroots players, this program introduces new players to squash, offering them the chance to play, compete, and build foundational skills. It serves as the first step for aspiring athletes from diverse backgrounds.",
            participants: "200+ Kids",
            achievements: "15 State Champions"
        },
        {
            title: "Pune Program",
            period: "2014 - 2019",
            description: "Initiated at Thube Park in Pune, this program involved the construction of the first public court, catering to players from diverse backgrounds. Over 100 kids from Pune and Mumbai were involved.",
            participants: "100+ Kids",
            achievements: "National & International Players"
        }
    ];
    return (
        <div className="min-h-screen bg-white">
        {/* Header */}
        <Header/>
            {/* Mission Overview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Championing Equal Access to Sports Infrastructure
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                In a world where sports can unite and inspire, Chance2Sports stands as a beacon of hope, breaking down barriers that have historically kept children from economically challenged backgrounds on the sidelines.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-users text-orange-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Building Resilience & Discipline</h3>
                                        <p className="text-gray-600">Developing character through structured sports training and mentorship programs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-trophy text-orange-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Personal Growth & Brighter Futures</h3>
                                        <p className="text-gray-600">Creating pathways for young athletes to achieve their full potential and dreams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://i.postimg.cc/8PvrBFPt/Whats-App-Image-2025-07-25-at-12-38-53-ebe79f2b.jpg"
                                    alt="Young athletes training"
                                    className="w-full h-96 object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Growing the Sport Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Growing the Sport from the Grassroots</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            To truly grow sports and elevate competition levels, we engage children from smaller towns and rural areas, creating a stronger foundation for athletic excellence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-chart-line text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Increase Participation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Engaging children from diverse backgrounds increases the overall number of players, enriching the talent pool and creating more opportunities.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-medal text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Enhance Competition</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A larger, more varied group of athletes raises competitive standards, pushing everyone to perform better and achieve excellence.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-handshake text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Foster Community Development</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Sports serve as a powerful tool for community building, providing young people with positive outlets and belonging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Roadmap Timeline */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Roadmap: From Grassroots to Elite</h2>
                        <p className="text-xl text-gray-600">Our structured four-stage development pathway transforms potential into excellence</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
                        <div className="space-y-16">
                            {[
                                {
                                    stage: "Stage 1",
                                    title: "Talent Identification",
                                    description: "Talent Hunt through roadshows at schools, NGOs, and academies. Identify, validate, and provide feedback to respective stakeholders.",
                                    icon: "fas fa-search",
                                    color: "orange"
                                },
                                {
                                    stage: "Stage 2",
                                    title: "Beginner/Intermediate Training",
                                    description: "Train shortlisted players with expert coaches. Build technical skills and introduce structured programs for foundational development.",
                                    icon: "fas fa-dumbbell",
                                    color: "blue"
                                },
                                {
                                    stage: "Stage 3",
                                    title: "Exposure to Events",
                                    description: "Provide sustained training and enable participation in district and state-level tournaments to gain competitive experience.",
                                    icon: "fas fa-calendar-alt",
                                    color: "green"
                                },
                                {
                                    stage: "Stage 4",
                                    title: "National & International Events",
                                    description: "Support top-performing players at state levels and guide them to compete in national and international competitions.",
                                    icon: "fas fa-globe",
                                    color: "purple"
                                }
                            ].map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                            <div className="text-sm font-semibold text-gray-500 mb-2">{item.stage}</div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center shadow-lg`}>
                                            <i className={`${item.icon} text-white text-xl`}></i>
                                        </div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Program Highlights */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Program Highlights</h2>
                        <p className="text-xl text-gray-600">Transforming lives through structured sports development initiatives</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                                        {program.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                                        <div className="text-2xl font-bold text-orange-600 mb-1">{program.participants}</div>
                                        <div className="text-sm text-gray-500">Participants</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                                        <div className="text-lg font-bold text-blue-600 mb-1">{program.achievements}</div>
                                        <div className="text-sm text-gray-500">Achievements</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Impact Stories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Champions We've Created</h2>
                        <p className="text-xl text-gray-600">Meet the athletes who exemplify the success of our grassroots development approach</p>
                    </div>
                    <div className="relative">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {athletes.map((athlete, index) => (
                                <div
                                    key={index}
                                    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer ${activeStory === index ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
                                        }`}
                                    onClick={() => setActiveStory(index)}
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                            <img
                                                src={athlete.image}
                                                alt={athlete.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{athlete.name}</h3>
                                        <div className="text-orange-600 font-medium mb-2">{athlete.title}</div>
                                        <div className="text-sm text-gray-500 mb-4">{athlete.achievement}</div>
                                    </div>
                                    <p className="text-gray-600 text-center leading-relaxed">{athlete.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {athletes.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${activeStory === index ? 'bg-orange-500' : 'bg-gray-300'
                                        }`}
                                    onClick={() => setActiveStory(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Kanga Program Impact */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Impact of Chance2Sports</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                The achievements of our athletes highlight the crucial role of structured training programs and support systems in nurturing young talent. A significant contributor to this success has been the <strong>Kanga Kids program</strong>, a passionate squash initiative supported by Ms. Deborah Kanga in memory of her husband, Noshir Kanga.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-users text-orange-600 text-2xl"></i>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                                <div className="text-gray-600">Young Athletes Trained</div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-trophy text-blue-600 text-2xl"></i>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                                <div className="text-gray-600">National Champions</div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-globe text-green-600 text-2xl"></i>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                                <div className="text-gray-600">International Players</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
          <SupportCTA/>

          {/* Footer */}
          <Footer/>

        </div>
    );
};
export default GrassrootsTalentProgram