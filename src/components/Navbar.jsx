import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiUser, FiGrid, FiLayers, FiMail } from 'react-icons/fi';
import Logo from './Logo';
import '../pages/Home.css';
import './css/navbar.css';

const NAV_ITEMS = [
    { id: 'about', label: 'Sobre mí', icon: FiUser },
    { id: 'projects', label: 'Proyectos', icon: FiGrid },
    { id: 'stack', label: 'Stack', icon: FiLayers },
    { id: 'contact', label: 'Contacto', icon: FiMail },
];

export default function Navbar() {
    const container = useRef();
    const [active, setActive] = useState('about');

    useEffect(() => {
        const sectionList = NAV_ITEMS.map((item) => item.id);
        const handleScrollSpy = () => {
            let current = 'about';
            for (let i = sectionList.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionList[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.45) {
                        current = sectionList[i];
                        break;
                    }
                }
            }
            setActive((prev) => (prev === current ? prev : current));
        };
        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        handleScrollSpy();
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    useGSAP(() => {
        gsap.from(container.current, {
            y: -60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
        });

        gsap.to(".nav-links a", {
            y: -20,
            opacity: 100,
            duration: 0.6,
            stagger: 0.08,
            delay: 0.9,
            ease: "power2.out",
        });

        gsap.from(".bottom-nav", {
            y: 80,
            opacity: 0,
            duration: 0.9,
            delay: 0.6,
            ease: "power3.out",
            clearProps: "transform",
        });
    }, { scope: container });

    const handleScroll = (e, id) => {
        e.preventDefault();
        setActive(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <nav className="navbar" ref={container}>
        <div className="nav-logo">
            <Link style={{height: "30px"}} to="/">
                <Logo color="#eeede8" size="30px" />
            </Link>
        </div>

        <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
                <li key={item.id}><a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>{item.label}</a></li>
            ))}
        </ul>

        </nav>

        <nav className="bottom-nav" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                        className={`bottom-nav-item${isActive ? ' active' : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} />
                        <span>{item.label}</span>
                    </a>
                );
            })}
        </nav>
        </>
    );
}