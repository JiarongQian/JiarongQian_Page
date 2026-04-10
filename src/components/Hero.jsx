import React from 'react';
import face from '../assets/face.png';
import "../css/Hero.css"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar,FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
    const links = [
        { icon: <MdEmail />, url: "mailto:linnajia76@gmail.com" },
        { icon: <FaGithub />, url: "https://github.com/JiarongQian" },
        { icon: <FaGoogleScholar />, url: "" },
        { icon: <FaSquareXTwitter />, url: "" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jiarong-qian-b011bb396/" },
    ];

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <div className="hero-meta">
                    <div className="hero-quote">
                        ⛰️ For the same mountain, one person captures its grandeur, another its textures, and another the way it changes across the seasons. Each perspective has its own brilliance and subtlety. The one thing we should never give up is our appreciation of beauty. Research is much the same.
                    </div>
                    <img
                        src={face}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="meta-name">Jiarong Qian </div>

                    <div className="meta-description">
                        <div> 👩‍💻Undergraduate Student</div>
                        <div> 🔬AI For Healthcare & Science</div>
                    </div>
                    <div className="meta-link">
                        <a
                            className="meta-linkitem"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Portfolio
                        </a>
                        <a
                            className="meta-linkitem"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CV
                        </a>
                    </div>
                    <div className="contact-small">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="small-text">Last Updated Date: 2026/03/20</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
