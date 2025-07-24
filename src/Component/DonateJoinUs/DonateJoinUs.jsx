// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
// import SupportCTA from '../SupportCTA/SupportCTA';
import Footer from '../../Layout/Footer';
const DonateJoinUs = () => {
    const [selectedAmount, setSelectedAmount] = useState(50);
    const [customAmount, setCustomAmount] = useState('');
    const [activeTab, setActiveTab] = useState('volunteer');
    const donationAmounts = [25, 50, 100, 250, 500];
    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };
    const handleCustomAmount = (value) => {
        setCustomAmount(value);
        setSelectedAmount(null);
    };
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <Header />
            {/* Hero Section */}
            <section
                className="relative h-96 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20athletes%20training%20together%20in%20modern%20sports%20facility%20with%20bright%20natural%20lighting%20professional%20photography%20clean%20white%20background&width=1440&height=400&seq=hero001&orientation=landscape')`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl font-bold mb-4">Support Our Champions</h1>
                        <p className="text-xl mb-8">Your donation helps provide free training and mentorship to aspiring athletes from underserved communities</p>
                        <div className="flex justify-center space-x-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-orange-400">2000+</div>
                                <div className="text-sm">Athletes Trained</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-400">500+</div>
                                <div className="text-sm">Volunteer Coaches</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-400">150+</div>
                                <div className="text-sm">Champions Created</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Donation Section */}
            <section className="mt-5 bg-white">
                <div className="p-5 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h2>
                        <p className="text-lg text-gray-600">Every contribution makes a difference in a young athlete's journey to success</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Donation Form */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Choose Your Impact</h3>
                                {/* Preset Amounts */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount</label>
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        {donationAmounts.map((amount) => (
                                            <button
                                                key={amount}
                                                onClick={() => handleAmountSelect(amount)}
                                                className={`p-3 border-2 !rounded-button text-center font-semibold whitespace-nowrap cursor-pointer ${selectedAmount === amount
                                                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                                                    : 'border-gray-300 hover:border-orange-300'
                                                    }`}
                                            >
                                                ${amount}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Custom Amount */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                        <input
                                            type="text"
                                            value={customAmount}
                                            onChange={(e) => handleCustomAmount(e.target.value)}
                                            placeholder="Enter amount"
                                            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Impact Description */}
                                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                                    <h4 className="font-semibold text-orange-800 mb-2">Your Impact:</h4>
                                    <ul className="text-sm text-orange-700 space-y-1">
                                        <li>• $25 provides sports equipment for one athlete</li>
                                        <li>• $50 covers one month of training sessions</li>
                                        <li>• $100 sponsors competition entry fees</li>
                                        <li>• $250 funds mentorship program for 3 months</li>
                                    </ul>
                                </div>
                                <button className="w-full bg-orange-500 text-white py-4 !rounded-button font-semibold hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-heart mr-2"></i>
                                    Donate Now
                                </button>
                            </div>
                            {/* QR Code and Payment Methods */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-6">Quick Payment</h3>
                                {/* QR Code Placeholder */}
                                <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                                    <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                        <div className="text-center">
                                            <i className="fas fa-qrcode text-6xl text-gray-400 mb-2"></i>
                                            <p className="text-sm text-gray-500">Scan to Donate</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">Scan with your mobile payment app</p>
                                </div>
                                {/* Payment Methods */}
                                <div className="mb-6">
                                    <p className="text-sm text-gray-600 mb-3">Secure Payment Methods</p>
                                    <div className="flex justify-center space-x-4">
                                        <i className="fab fa-cc-visa text-3xl text-blue-600"></i>
                                        <i className="fab fa-cc-mastercard text-3xl text-red-500"></i>
                                        <i className="fab fa-paypal text-3xl text-blue-500"></i>
                                        <i className="fab fa-apple-pay text-3xl text-gray-800"></i>
                                    </div>
                                </div>
                                {/* Security Badge */}
                                <div className="flex items-center justify-center text-sm text-gray-500">
                                    <i className="fas fa-shield-alt mr-2 text-green-500"></i>
                                    SSL Secured & Encrypted
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Join Us Section */}
            <section className="py-16 bg-gray-50">
                <div className=" mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
                        <p className="text-lg text-gray-600">There are many ways to get involved and make a difference in our community</p>
                    </div>
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white rounded-lg p-1 shadow-sm">
                            {['volunteer', 'mentorship', 'corporate'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 !rounded-button font-medium whitespace-nowrap cursor-pointer ${activeTab === tab
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    {tab === 'volunteer' && 'Volunteer'}
                                    {tab === 'mentorship' && 'Mentorship'}
                                    {tab === 'corporate' && 'Corporate Partners'}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Tab Content */}
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        {activeTab === 'volunteer' && (
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Become a Volunteer Coach</h3>
                                    <p className="text-gray-600 mb-6">
                                        Share your passion for sports and help train the next generation of champions.
                                        No matter your skill level, we have opportunities that match your expertise and schedule.
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Flexible scheduling options</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Training and certification provided</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Make lasting impact on young lives</span>
                                        </li>
                                    </ul>
                                    <Link to="/visitorfrom">
                                        <button className="bg-orange-500 text-white px-8 py-3 !rounded-button font-semibold hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                                            Apply to Volunteer
                                        </button>
                                    </Link>

                                </div>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=enthusiastic%20volunteer%20coach%20teaching%20young%20diverse%20athletes%20in%20bright%20modern%20sports%20facility%20with%20natural%20lighting%20professional%20photography%20clean%20background&width=500&height=400&seq=vol001&orientation=landscape"
                                        alt="Volunteer coaching"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        )}
                        {activeTab === 'mentorship' && (
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=professional%20mentor%20having%20meaningful%20conversation%20with%20young%20athlete%20in%20modern%20bright%20setting%20natural%20lighting%20clean%20background%20inspiring%20atmosphere&width=500&height=400&seq=men001&orientation=landscape"
                                        alt="Mentorship program"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Mentor Program</h3>
                                    <p className="text-gray-600 mb-6">
                                        Guide young athletes beyond sports training. Share life experiences, career advice,
                                        and help them develop leadership skills that will serve them throughout their lives.
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>One-on-one mentoring opportunities</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Group workshop facilitation</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Career guidance and life skills coaching</span>
                                        </li>
                                    </ul>

                                    <Link to="/visitorfrom">
                                        <button className="bg-orange-500 text-white px-8 py-3 !rounded-button font-semibold hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                                            Become a Mentor
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        )}
                        {activeTab === 'corporate' && (
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Corporate Partnership</h3>
                                    <p className="text-gray-600 mb-6">
                                        Partner with us to create meaningful community impact while building your company's
                                        social responsibility profile. We offer various partnership levels to match your goals.
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Employee volunteer programs</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Sponsorship opportunities</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check-circle text-orange-500 mr-3"></i>
                                            <span>Custom community engagement initiatives</span>
                                        </li>
                                    </ul>
                                    <Link to="/visitorfrom">
                                        <button className="bg-orange-500 text-white px-8 py-3 !rounded-button font-semibold hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                                            Partner with Us
                                        </button>
                                    </Link>

                                </div>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=professional%20business%20team%20shaking%20hands%20with%20community%20leaders%20in%20modern%20bright%20office%20setting%20natural%20lighting%20clean%20background%20corporate%20partnership%20atmosphere&width=500&height=400&seq=corp001&orientation=landscape"
                                        alt="Corporate partnership"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            {/* <SupportCTA /> */}

            {/* Footer */}
            <Footer />
        </div>
    );
};
export default DonateJoinUs