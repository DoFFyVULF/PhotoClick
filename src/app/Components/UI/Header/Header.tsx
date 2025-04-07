'use client'
import style from './Header.module.scss';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className={style.header_container}>
                <div className={`${style.burger_menu} ${isOpen ? style.open : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`${style.menu} ${isOpen ? style.active : ''}`}>
                    <li><a onClick={() => scrollToSection('home')}>Главная</a></li>
                    <li><a onClick={() => scrollToSection('about')}>О нас</a></li>
                    <li><a onClick={() => scrollToSection('steps')}>Как проходит съемка?</a></li>
                    <li><a onClick={() => scrollToSection('gallery')}>Галерея</a></li>
                </ul>
            </div>
        </header>
    );
}