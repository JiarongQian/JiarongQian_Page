import React from 'react';
import "../css/All.css"; // 确保你的 CSS 路径正确

export default function Education() {
    const education = [
        {
            university: "Shandong University (Weihai)",
            degree: "Undergraduate Student in Communication Engineering",
            period: "2022.09 - Present",
            location: "Weihai, China",
            courses: [
                { name: "Advanced Mathematics", grade: 99 },
                { name: "Probability & Statistics", grade: 93 },
                { name: "Database Technology", grade: 92 },
                { name: "C/C++ Programming", grade: 96 },
                { name: "Digital Image Processing", grade: 92 },
                { name: "Principles and Applications of Microprocessors", grade: 91 }
            ],
            advisor: { name: "Prof. Nan Cao", link: null } // 可选：如果导师有个人主页，可以在link中添加
        }
    ];

    return (
        <div className="card" id="education" style={{marginTop:"1rem"}}>
            <div className="card-title">Education</div>
            <div className="education-list">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">

                        <div className="education-header">
                            <h3 className="education-university">{edu.university}</h3>
                            <div className="education-period">
                                {edu.period}
                                <div className="education-location">{edu.location}</div>
                            </div>
                        </div>

                        <div className="education-details">
                            <p className="education-degree">
                                {edu.degree}
                            </p>
                        </div>

                        {edu.courses && edu.courses.length > 0 && (
                            <div className="education-courses">
                                <div>Courses:</div>
                                <ul>
                                    {edu.courses.map((course, i) => (
                                        <li key={i}>
                                            {course.name} ({course.grade})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
