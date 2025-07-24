// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import SupportCTA from '../SupportCTA/SupportCTA';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
const NewsletterEvents = () => {
    const [activeTab, setActiveTab] = useState('newsletters');
    const [currentPage, setCurrentPage] = useState(1);
    const newsletters = [
        {
            id: 1,
            title: 'Abhinav Sinha Reaches Top 8 in National Games 2015',
            date: '2024-07-15',
            image: 'https://static.readdy.ai/image/d02d88b0d280feb932d3d4db548036a1/f0c384f6fb7ac07cc57bc05c82b543e6.png',
            excerpt: 'Lawyer playing top level squash. Abhinav Sinha from Pune makes Maharashtra proud by reaching the top 8 in the National games. Currently ranked 304 in the world on the International PSA circuit.'
        },
        {
            id: 2,
            title: 'SportsSkill Fest 2024 - Complete Coverage',
            date: '2024-07-14',
            image: 'https://readdy.ai/api/search-image?query=young%20athletes%20celebrating%20victory%20at%20sports%20festival%20with%20medals%20and%20trophies%20in%20bright%20outdoor%20stadium%20setting%20with%20modern%20facilities%20and%20enthusiastic%20crowd&width=400&height=250&seq=news1&orientation=landscape',
            excerpt: 'Comprehensive coverage of our three-day sports extravaganza featuring over 350 participants from various schools.'
        },
        {
            id: 2,
            title: 'Training Excellence Program Launch',
            date: '2024-07-10',
            image: 'https://readdy.ai/api/search-image?query=professional%20sports%20coaches%20training%20young%20athletes%20in%20modern%20indoor%20facility%20with%20advanced%20equipment%20and%20motivational%20atmosphere&width=400&height=250&seq=news2&orientation=landscape',
            excerpt: 'Introducing our new comprehensive training program designed to develop champions across multiple sports disciplines.'
        },
        {
            id: 3,
            title: 'Community Impact Report 2024',
            date: '2024-07-05',
            image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20athletes%20from%20different%20backgrounds%20training%20together%20in%20bright%20community%20sports%20center%20with%20inspirational%20setting&width=400&height=250&seq=news3&orientation=landscape',
            excerpt: 'Discover how our programs have transformed lives and created opportunities for aspiring athletes in our community.'
        },
        {
            id: 4,
            title: 'Championship Winners Spotlight',
            date: '2024-06-28',
            image: 'https://readdy.ai/api/search-image?query=champion%20athletes%20holding%20trophies%20and%20medals%20in%20victory%20pose%20with%20bright%20stadium%20lights%20and%20celebratory%20atmosphere&width=400&height=250&seq=news4&orientation=landscape',
            excerpt: 'Meet our latest champions and learn about their journey to success through dedication and expert training.'
        },
        {
            id: 5,
            title: 'New Facility Opening Announcement',
            date: '2024-06-20',
            image: 'https://readdy.ai/api/search-image?query=modern%20state-of-the-art%20sports%20training%20facility%20with%20advanced%20equipment%20and%20bright%20clean%20interior%20design%20for%20athletic%20development&width=400&height=250&seq=news5&orientation=landscape',
            excerpt: 'Exciting news about our expanded training facilities equipped with cutting-edge technology and equipment.'
        },
        {
            id: 6,
            title: 'Youth Development Success Stories',
            date: '2024-06-15',
            image: 'https://readdy.ai/api/search-image?query=inspiring%20young%20athletes%20in%20training%20session%20showing%20determination%20and%20focus%20in%20bright%20motivational%20sports%20environment&width=400&height=250&seq=news6&orientation=landscape',
            excerpt: 'Inspiring stories of young athletes who have achieved remarkable success through our development programs.'
        }
    ];
    const events = [
        {
            id: 1,
            title: 'Rishikul SportsSkill Fest 2024',
            date: '2024-07-12 to 2024-07-14',
            location: 'Rishikul School, Laxmangarh',
            type: 'Past Event',
            image: 'https://readdy.ai/api/search-image?query=large%20outdoor%20sports%20festival%20with%20multiple%20athletic%20competitions%20cricket%20badminton%20athletics%20students%20celebrating%20in%20bright%20sunny%20stadium%20environment&width=600&height=400&seq=event1&orientation=landscape',
            description: 'We are thrilled to announce the successful completion of the SportsSkill Fest, a three-day extravaganza of competitive spirit, athletic excellence, and community unity at Rishikul School, Laxmangarh. Over the course of the event, students from Class 1 to 12, as well as college participants, enthusiastically competed in a variety of sports, including Cricket, Badminton, Athletics, and Fun Games.',
            highlights: [
                '350+ students participated',
                'Multiple sports categories',
                'Three-day celebration',
                'Community unity focus'
            ]
        },
        {
            id: 2,
            title: 'Regional Championship Training Camp',
            date: '2024-08-15 to 2024-08-18',
            location: 'SportsSkill Academy',
            type: 'Upcoming Event',
            image: 'https://readdy.ai/api/search-image?query=intensive%20sports%20training%20camp%20with%20professional%20coaches%20and%20young%20athletes%20practicing%20various%20sports%20in%20modern%20facility%20with%20motivational%20atmosphere&width=400&height=250&seq=event2&orientation=landscape',
            description: 'Join our intensive four-day training camp designed to prepare athletes for upcoming regional championships.'
        },
        {
            id: 3,
            title: 'Community Sports Day',
            date: '2024-09-05',
            location: 'Central Sports Complex',
            type: 'Upcoming Event',
            image: 'https://readdy.ai/api/search-image?query=community%20sports%20day%20with%20families%20and%20children%20participating%20in%20fun%20athletic%20activities%20in%20bright%20outdoor%20setting%20with%20festive%20atmosphere&width=400&height=250&seq=event3&orientation=landscape',
            description: 'A fun-filled day of sports activities for the entire community, promoting fitness and healthy living.'
        }
    ];
    const itemsPerPage = 6;
    const totalPages = Math.ceil(newsletters.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNewsletters = newsletters.slice(startIndex, startIndex + itemsPerPage);
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <Header />
            {/* Main Hero */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20with%20dynamic%20lighting%20and%20energetic%20atmosphere%20professional%20athletes%20training%20and%20competing%20with%20dramatic%20sunset%20background%20perfect%20for%20newsletter%20header&width=1440&height=400&seq=header1&orientation=landscape"
                        alt="Newsletter Header"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
                    <h1 className="text-5xl font-bold text-white mb-6">Newsletter & Events</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with our latest news, success stories, and upcoming events.
                        Discover how we're building champions and transforming communities through sports.
                    </p>
                </div>
            </div>
            {/* Tab Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-5">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                    <button
                        onClick={() => setActiveTab('newsletters')}
                        className={`px-6 py-3 !rounded-button font-medium whitespace-nowrap cursor-pointer ${activeTab === 'newsletters'
                            ? 'bg-white text-orange-500 shadow-sm'
                            : 'text-gray-700 hover:text-orange-500'
                            }`}
                    >
                        <i className="fas fa-newspaper mr-2"></i>
                        Newsletters
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`px-6 py-3 !rounded-button font-medium whitespace-nowrap cursor-pointer ${activeTab === 'events'
                            ? 'bg-white text-orange-500 shadow-sm'
                            : 'text-gray-700 hover:text-orange-500'
                            }`}
                    >
                        <i className="fas fa-calendar-alt mr-2"></i>
                        Events
                    </button>
                </div>
            </div>
            {/* Content Area */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {activeTab === 'newsletters' && (
                    <div>
                        {/* Filter and Sort */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search newsletters..."
                                        className="pl-10 pr-4 py-2 border border-gray-300 !rounded-button focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                                    />
                                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 !rounded-button hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                                    <span className="text-sm">Latest</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                            </div>
                        </div>
                        {/* Newsletters Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {currentNewsletters.map((newsletter) => (
                                <div key={newsletter.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={newsletter.image}
                                            alt={newsletter.title}
                                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-orange-500 mb-2">{newsletter.date}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{newsletter.title}</h3>
                                        <p className="text-gray-600 mb-0 line-clamp-3">{newsletter.excerpt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2">
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border border-gray-300 !rounded-button hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap ${currentPage === index + 1
                                        ? 'bg-orange-500 text-white'
                                        : 'border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border border-gray-300 !rounded-button hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                )}
                {activeTab === 'events' && (
                    <div>
                        {/* Featured Event */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                            <div className="md:flex">
                                <div className="md:w-1/2 h-96 overflow-hidden">
                                    <img
                                        src={events[0].image}
                                        alt={events[0].title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {events[0].type}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{events[0].title}</h2>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        <i className="fas fa-calendar-alt mr-2"></i>
                                        <span>{events[0].date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mb-6">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        <span>{events[0].location}</span>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">{events[0].description}</p>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                                        <ul className="space-y-2">
                                            {events[0].highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-center text-gray-700">
                                                    <i className="fas fa-check-circle text-orange-500 mr-2"></i>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 mb-6">
                                        The event not only showcased remarkable talent but also fostered a deep sense of teamwork,
                                        sportsmanship, and physical fitness among participants. With over 350 students engaging in
                                        multiple competitions, the SportsSkill Fest became a memorable celebration of unity,
                                        dedication, and sporting excellence.
                                    </p>
                                    <p className="text-gray-700 font-medium">
                                        We thank all the participants, volunteers, and school staff for making this event a resounding success!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Other Events Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {events.slice(1).map((event) => (
                                    <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {event.type}
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h4>
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <i className="fas fa-calendar-alt mr-2 text-sm"></i>
                                                <span className="text-sm">{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600 mb-4">
                                                <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                                                <span className="text-sm">{event.location}</span>
                                            </div>
                                            <p className="text-gray-700 mb-0">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Help Them Rise CTA */}
            {/* <div className="bg-orange-500 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Help Them Rise</h3>
                    <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
                        Your donation helps us provide complete training and creates the next
                        generation of champions through our sports development programs.
                    </p>
                    <button className="bg-white text-orange-500 px-8 py-4 !rounded-button hover:bg-gray-100 font-semibold text-lg cursor-pointer whitespace-nowrap">
                        Donate Now
                    </button>
                </div>
            </div> */}
            <SupportCTA />

            {/* Footer */}
            <Footer />
            <style>{`
.!rounded-button {
border-radius: 8px;
}
.line-clamp-2 {
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
.line-clamp-3 {
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
input[type="number"] {
-moz-appearance: textfield;
}
`}</style>
        </div>
    );
};
export default NewsletterEvents