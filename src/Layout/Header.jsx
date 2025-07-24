import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

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

    const [isScrolled, setIsScrolled] = useState(false);
    const [currentUpdate, setCurrentUpdate] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [latestUpdates.length]);
    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 glass-morphism shadow-lg'
                : 'bg-white/70'
                }`}>
                <div className="mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="font-orbitron text-2xl font-bold text-orange-600">
                            C2S
                        </div>
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="text-slate-700 hover:text-orange-600 transition-colors font-inter font-medium cursor-pointer">Home</Link>
                            <Link to="/aboutus" className="text-slate-700 hover:text-orange-600 transition-colors font-inter font-medium cursor-pointer">About Us</Link>
                            <Link to="/grassrootstalent" className="text-slate-700 hover:text-orange-600 transition-colors font-inter font-medium cursor-pointer">Grassroots Talent Program</Link>
                            <Link to="/championsclub" className="text-slate-700 hover:text-orange-600 transition-colors font-inter font-medium cursor-pointer">Champions Club ElitePass</Link>
                            <Link to="/newsletter" className="text-slate-700 hover:text-orange-600 transition-colors font-inter font-medium cursor-pointer">Newsletters & Events</Link>
                            <Link to="/donatejoinus">
                             <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 !rounded-button font-inter font-semibold pulse-glow hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer">
                                Donate / Join Us
                            </button>
                            </Link>
                           
                        </nav>
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white cursor-pointer"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden mt-4 bg-slate-900/95 glass-morphism rounded-lg p-4">
                            <nav className="flex flex-col space-y-4">
                                <Link to="/" className="text-white hover:text-orange-400 transition-colors font-inter cursor-pointer">Home</Link>
                                <Link to="/aboutus" className="text-white hover:text-orange-400 transition-colors font-inter cursor-pointer">About Us</Link>
                                <Link to="/grassrootstalent" className="text-white hover:text-orange-400 transition-colors font-inter cursor-pointer">Grassroot Program</Link>
                                <Link to="/championsclub" className="text-white hover:text-orange-400 transition-colors font-inter cursor-pointer">Champions Elite Program</Link>
                                <Link to="/newsletter" className="text-white hover:text-orange-400 transition-colors font-inter cursor-pointer">Newsletters & Events</Link>
                                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 !rounded-button font-inter font-semibold whitespace-nowrap cursor-pointer">
                                    Donate / Join Us
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header
