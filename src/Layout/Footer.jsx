import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="relative bg-gradient-to-b from-orange-50 to-orange-100 text-slate-800 overflow-hidden">
                {/* Wave Animation */}
                <div className="absolute top-0 left-0 w-full overflow-hidden">
                    <svg
                        className="relative block w-full h-16 wave-animation"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            fill="currentColor"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            fill="currentColor"
                        />
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <div className="relative z-10 mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="font-orbitron text-2xl font-bold mb-4">Champion2Society</h3>
                            <p className="font-inter mb-6">
                                Providing free training, mentorship, and educational opportunities to young athletes since 2010.
                                Building champions from all backgrounds.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-poppins text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="font-inter hover:text-orange-400 transition-colors cursor-pointer">Home</Link></li>
                                <li><Link to="/aboutus" className="font-inter hover:text-orange-400 transition-colors cursor-pointer">About Us</Link></li>
                                <li><Link to="/grassrootstalent" className="font-inter hover:text-orange-400 transition-colors cursor-pointer">Grassroots Talent Program</Link></li>
                                <li><Link to="/championsclub " className="font-inter hover:text-orange-400 transition-colors cursor-pointer">Champions ClubElite Pass</Link></li>
                                <li><Link to="/contactus" className="font-inter hover:text-orange-400 transition-colors cursor-pointer">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-poppins text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                                    <i className="fab fa-linkedin text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                                    <i className="fab fa-facebook text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                                    <i className="fab fa-instagram text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                                    <i className="fab fa-pinterest text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                                    <i className="fab fa-twitter text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                        <p className="font-inter">
                            © 2024 Champion2Society. All rights reserved. Empowering champions since 2010.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
