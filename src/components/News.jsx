import React from 'react';
import "../css/All.css"

function News() {
    const news =[
        {
            time: "2026.06",
            content: <>My first-authored paper was accepted to <span style={{ fontWeight: 700, color: "#000" }}>AMIA 2026</span> as an <span style={{ fontWeight: 700, color: "#000" }}>oral presentation</span>.</>
        },
    ]

    const handleNewsRefClick = (e) => {
        if (e.target.classList.contains('news-ref')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="News" id="news">
            <div className="card-title">News
            </div>
            <ul className="news-list" onClick={handleNewsRefClick}>
                {news.map((item, index) => (
                    <li key={index}>
                        <div className="news-time">{item.time}</div>
                        <div className="news-content">{item.content}</div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default News;
