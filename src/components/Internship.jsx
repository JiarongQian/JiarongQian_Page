import React, {useState} from "react";
import "../css/Internship.css";
import sduLogo from "../assets/logo/sdu_logo.png";
import upennLogo from "../assets/logo/upenn_logo.png";

export default function Internship() {
    const formatPeriodForTimelineLabel = (period) => {
        const [start, end] = period.split(" - ").map((s) => s.trim());
        if (!start || !end) return period;
        return `${end}\n–\n${start}`;
    };

    const experiences = [
        {
            type: "Research",
            organization: {
                name: "University of Pennsylvania",
                link: "https://dbei.med.upenn.edu/",
                logo: upennLogo,
                logoClass: "upenn-logo"
            },
            period: "2025.11 - 2026.04",
            role: "Research Intern (Full-time)",
            location: "Philadelphia, PA, USA",
            projects: [
                { name: <span><div style={{color:"#acacac",fontStyle:"italic"}}>Research details to be updated.</div></span>, roles: [] },
            ]
        },
        {
            type: "Research",
            organization: {
                name: "Shandong University (Weihai)",
                link: "https://www.wh.sdu.edu.cn/",
                logo: sduLogo,
                logoClass: "sdu-logo"
            },
            period: "2024.11 - 2025.08",
            role: "Research Assistant (Part-time)",
            location: "Weihai, China",
            projects: [
                { name: <span><div style={{color:"#acacac",fontStyle:"italic"}}>Research details to be updated.</div></span>, roles: [] },
            ]
        },
    ];

    const [selectedTag, setSelectedTag] = useState("Research");

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    const filteredExperiences = selectedTag
        ? experiences.filter(exp => exp.type === selectedTag)
        : experiences;

    return (
        <div className="card" id="internship" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">Internship</div>
                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    <option key={"Work"} value={"Work"}>Work</option>
                    <option key={"Research"} value={"Research"}>Research</option>
                    {/*<option key={"Project"} value={"Project"}>Project</option>*/}
                </select>
            </div>
            <div className="timeline-container">
            {filteredExperiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-label">
                            <div className={`exp-type ${exp.type.toLowerCase()}`}>
                                {exp.type}
                            </div>
                            <div className="timeline-period-label">{formatPeriodForTimelineLabel(exp.period)}</div>
                        </div>

                        <div className="timeline-content">

                            <div className="org-logo-container">
                                <img src={exp.organization.logo} alt={`${exp.organization.name} Logo`}
                                     className={`org-logo ${exp.organization.logoClass || ""}`}/>
                            </div>

                            <div className="exp-container">
                                    <div className="timeline-header">
                                        <div className="exp-organization">
                                            <a
                                                className="exp-organization-name"
                                                href={exp.organization.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{exp.organization.name}</a>
                                            <div className="exp-role">{exp.role}</div>
                                        </div>

                                        <div className="exp-period">
                                            <div>{exp.period}</div>
                                            <div className="exp-location">{exp.location}</div>
                                        </div>
                                    </div>


                                {exp.details && (
                                    <ul className="exp-details">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}

                                {exp.projects && (
                                    <ul className="exp-projects">
                                        {exp.projects.map((proj, i) => (
                                            <li key={i}>

                                                <div className="project-roles">
                                                    {proj.name}
                                                    {proj.roles.map((role, idx) => (
                                                        <span key={idx} className="role-tag">
                                                            {role}
                                                        </span>
                                                    ))}
                                                    {proj?.link?.map((link) => (
                                                        <span className="role-link">{link}</span>
                                                    ))}
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            </div>
                        </div>
                        ))}
            </div>
        </div>
    );
}
