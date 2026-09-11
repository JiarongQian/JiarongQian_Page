import React, { useState } from "react";
import "../css/Header.css";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const NAV = [
    { id: "about", label: "About" },
    { id: "news", label: "News" },
    { id: "publications", label: "Publications" },
    { id: "internship", label: "Internship" },
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "more", label: "More" },
    { id: "others", label: "Others", page: true },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (item) => {
        setMenuOpen(false);

        if (item.page) {
            navigate("/others");
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: item.id } });
            return;
        }

        document.getElementById(item.id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`}>
            <div className="header-container">
                <div className="header-name">
                    <img src={logo} alt="logo" style={{ width: "36px", marginRight: 12 }} />
                    <div className="name-main">J<span className="fancy-i">i</span>arong Qian</div>
                </div>

                {/* 汉堡按钮 */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="bar bar1" />
                    <span className="bar bar2" />
                    <span className="bar bar3" />
                </button>

                {/* 导航栏 */}
                <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${item.page && location.pathname === "/others" ? "active" : ""}`}
                            onClick={() => handleClick(item)}
                            aria-current={item.page && location.pathname === "/others" ? "page" : undefined}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
