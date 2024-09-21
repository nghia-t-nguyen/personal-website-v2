import './Navbar.css'
import React, { useEffect, useRef } from 'react';
import resume from '../assets/images/JohnnyNguyen_resume2024.pdf'

export default function Navbar(props) {
    const imageRef = useRef();
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 850;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', event => {
            requestAnimationFrame(() => {
                const rotation = window.scrollY / 4 % 360; // (scrollY / rotation factor) mod 360 degrees
                imageRef.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, []);


    return (
        <nav className='cont--navbar'>
            <div className="flexbox">
                <div className='name-container'>
                    <svg className='star' ref={imageRef} width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_215_2)">
                            <path d="M32.4386 13.0649L32.9614 15.3796C33.4941 17.7377 36.2001 18.8585 38.2442 17.5678L40.2506 16.3007C42.5034 14.8782 45.1218 17.4966 43.6992 19.7494L42.4322 21.7558C41.1415 23.7999 42.2623 26.5059 44.6204 27.0386L46.9351 27.5614C49.534 28.1485 49.534 31.8515 46.9351 32.4386L44.6204 32.9614C42.2623 33.4941 41.1415 36.2001 42.4322 38.2442L43.6992 40.2506C45.1218 42.5034 42.5034 45.1218 40.2506 43.6992L38.2442 42.4322C36.2001 41.1415 33.4941 42.2623 32.9614 44.6204L32.4386 46.9351C31.8515 49.534 28.1485 49.534 27.5614 46.9351L27.0386 44.6204C26.5059 42.2623 23.7999 41.1415 21.7558 42.4322L19.7494 43.6993C17.4966 45.1218 14.8782 42.5034 16.3007 40.2506L17.5678 38.2442C18.8585 36.2001 17.7377 33.4941 15.3796 32.9614L13.0649 32.4386C10.466 31.8515 10.466 28.1485 13.0649 27.5614L15.3796 27.0386C17.7377 26.5059 18.8585 23.7999 17.5678 21.7558L16.3007 19.7494C14.8782 17.4966 17.4966 14.8782 19.7494 16.3007L21.7558 17.5678C23.7999 18.8585 26.5059 17.7377 27.0386 15.3796L27.5614 13.0649C28.1485 10.466 31.8515 10.466 32.4386 13.0649Z" fill="url(#paint0_radial_215_2)" stroke="#C9FFF7" />
                            <path d="M27.7851 19.8056C28.3183 17.4451 31.6817 17.4451 32.2149 19.8056V19.8056C32.5605 21.3355 34.3162 22.0627 35.6423 21.2253V21.2253C37.6885 19.9332 40.0668 22.3115 38.7747 24.3577V24.3577C37.9373 25.6839 38.6645 27.4395 40.1944 27.7851V27.7851C42.5549 28.3183 42.5549 31.6817 40.1944 32.2149V32.2149C38.6645 32.5605 37.9373 34.3162 38.7747 35.6423V35.6423C40.0668 37.6885 37.6885 40.0668 35.6423 38.7747V38.7747C34.3161 37.9373 32.5605 38.6645 32.2149 40.1944V40.1944C31.6817 42.5549 28.3183 42.5549 27.7851 40.1944V40.1944C27.4395 38.6645 25.6838 37.9373 24.3577 38.7747V38.7747C22.3115 40.0668 19.9332 37.6885 21.2253 35.6423V35.6423C22.0627 34.3161 21.3355 32.5605 19.8056 32.2149V32.2149C17.4451 31.6817 17.4451 28.3183 19.8056 27.7851V27.7851C21.3355 27.4395 22.0627 25.6838 21.2253 24.3577V24.3577C19.9332 22.3115 22.3115 19.9332 24.3577 21.2253V21.2253C25.6839 22.0627 27.4395 21.3355 27.7851 19.8056V19.8056Z" fill="url(#paint1_radial_215_2)" />
                        </g>
                        <defs>
                            <radialGradient id="paint0_radial_215_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) rotate(90) scale(21)">
                                <stop stop-color="#02A68D" />
                                <stop offset="1" stop-color="#26619C" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_215_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) rotate(90) scale(12)">
                                <stop offset="0.055" stop-color="#DFFFF0" />
                                <stop offset="0.246416" stop-color="#88E5B8" />
                                <stop offset="1" stop-color="#113E96" />
                            </radialGradient>
                            <clipPath id="clip0_215_2">
                                <rect width="60" height="60" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <div className='fade-in--0'>{width > breakpoint ? <><a href='#hero'>Johnny Nguyen</a><span>, Front-end Developer</span></> : <a href='#hero'>Johnny Nguyen</a>}</div>

                </div>
                <div>
                    <ul>
                        <li><a href="#about" className={`${props.highlight[0] === true ? 'a-highlight' : ''}`}>About</a></li>
                        <li><a href="#experience" className={`${props.highlight[1] === true ? 'a-highlight' : ''}`}>Experience</a></li>
                        <li><a href="#projects" className={`${props.highlight[2] === true ? 'a-highlight' : ''}`}>Projects</a></li>
                        <li><a href="#contact" className={`${props.highlight[3] === true ? 'a-highlight' : ''}`}>Contact</a></li>
                        <li><a target="_blank" rel="noreferrer noopener" href={resume} className='nav-resume'>Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}