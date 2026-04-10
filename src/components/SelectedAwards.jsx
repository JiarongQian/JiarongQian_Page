import React from 'react';
import "../css/All.css"

export default function SelectedAwards() {
    const awards = [
        {
            text: "SDU Special Talent Scholarship for Innovation and Entrepreneurship ",
            highlight: "09/2024",
        },
        {
            text: "University-Level Gold Award, Shandong University Innovation & Entrepreneurship Competition ",
            highlight: "05/2024",
        },
        {
            text: "SDU Outstanding Student Leader ",
            highlight: "05/2024",
        },
        {
            text: "SDU Scholarship for Outstanding Academic Performance ",
            highlight: "09/2023",
        },
        {
            text: "SDU Special Talent Scholarship for Social Services ",
            highlight: "09/2023",
        },
    ];


    return (
        <div className="card" id="awards" style={{marginTop:"1rem"}}>
            <div className="card-title">Selected Awards</div>
            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        <span className="award-icon">✦ </span>
                        <span className="award-text">
                            {award.text}
                            <span className="award-highlight">{award.highlight}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
