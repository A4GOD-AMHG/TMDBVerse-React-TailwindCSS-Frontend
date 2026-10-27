import React from 'react';

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/A4GOD-AMHG', icon: '/github-white.svg' },
    { name: 'Facebook', href: 'https://facebook.com/alexismanuel.hurtadogarcia', icon: '/facebook-white.svg' },
    { name: 'X (Twitter)', href: 'https://x.com/alexis_mhg', icon: '/x-white.svg' },
    { name: 'Instagram', href: 'https://instagram.com/alexismanuel.hurtadogarcia', icon: '/instagram-white.svg' },
    { name: 'LinkedIn', href: 'https://cu.linkedin.com/in/alexis-mhg', icon: '/linkedin-white.svg' },
];

const Footer = () => (
    <footer className="relative z-10 mt-16 border-t border-light-100/10 bg-dark-100/60 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-100 text-sm text-center md:text-left">
                    © {new Date().getFullYear()} TMDB Verse · Data provided by{' '}
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-light-100 hover:text-white transition-colors">
                        TMDB
                    </a>
                </p>
                <div className="flex items-center gap-5">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <img className="h-6 w-6" src={link.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
