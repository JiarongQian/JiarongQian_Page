import React, { useState } from "react";
import "../css/Publications.css";

import sketchar from "../assets/paper/sketchar.pdf";
import sketchar_slide from "../assets/paper/sketchar_slide.pdf";
import art from "../assets/paper/art.pdf";
import brain from "../assets/paper/brain.pdf";
import brain_slide from "../assets/paper/brain_slide.pdf";
import clay from "../assets/paper/clay.pdf";
import emo from "../assets/paper/emo.pdf";
import flow from "../assets/paper/flow.pdf";
import capace from "../assets/paper/capace.pdf";
import future from "../assets/paper/future.pdf";
import image from "../assets/paper/image.pdf";
import lifeeling from "../assets/paper/lifeeling.pdf";
import lifeeling_poster from "../assets/paper/lifeeling_poster.pdf";
import tarot from "../assets/paper/tarot.pdf";
import vistoria from "../assets/paper/vistoria.pdf";
import chinese from "../assets/paper/chinese.pdf";
import tuntun from "../assets/paper/tuntun.pdf";
import tuntun_poster from "../assets/paper/tuntun_poster.pdf";
import carbon_poster from "../assets/paper/carbon_poster.pdf";
import capace_thesis from "../assets/paper/capace_thesis.pdf";

import sketchar_img from "../assets/paper_image/sketchar.png";
import future_img from "../assets/paper_image/future.png";
import art_img from "../assets/paper_image/art.png";
import capace_img from "../assets/paper_image/capace.png";
import tarot_img from "../assets/paper_image/tarot.png";
import clay_img from "../assets/paper_image/clay.png";
import chinese_img from "../assets/paper_image/chinese.png";
import emo_img from "../assets/paper_image/emo.png";
import image_img from "../assets/paper_image/image.png";
import flow_img from "../assets/paper_image/flow.png";
import tuntun_img from "../assets/paper_image/tuntun.png";
import brain_img from "../assets/paper_image/brain.png";
import vistoria_img from "../assets/paper_image/vistoria1.png";
import lifeeling_img from "../assets/paper_image/lifeeling.png";
import carbon_img from "../assets/paper_image/carbon.png";
import complexity_paradox_img from "../assets/paper_image/complexity_paradox_gpt5.png";
import samla_clip_framework_img from "../assets/paper_image/samla_clip_framework.png";


import clay_video from "../assets/video/clay.mp4";

const MY_NAME = "Jiarong Qian";

const publications = [
    {
        id: "complexity-paradox-gpt5",
        year: 2025,
        title: "The Complexity Paradox of Generalist AI Agents in Medicine: Exploring GPT-5 for Real-World Multimodal Diagnosis",
        abstract: "Clinical practice is rapidly adopting AI systems that combine reasoning, web retrieval, and multi-step agentic planning, yet their impact on real-world diagnostic workflows and their accuracy and traceability remains unclear. We developed an open-ended benchmark and systematically evaluated ten GPT-5-based models, ranging from a baseline automatic routing system to deeper reasoning models, web-enabled variants, and multi-step agentic systems, on 1,610 multimodal diagnostic samples derived from 161 clinician-validated cases. Key limitations emerged: models frequently misinterpreted imaging, driving a large share of reasoning failures; web search was not reliably corrective and sometimes destabilized performance; and agentic systems, while flexible, often sacrificed transparency, making planning and retrieval steps difficult to audit. At the same time, LLMs showed several promising behaviors: they incorporated relevant patient history, produced clear stepwise reasoning, generated plausible differential diagnoses, improved diagnostic specificity when reasoning was explicit, and retrieved domain-relevant evidence effectively. To guide clinical use and model development, we recommend: (1) prioritizing higher-capacity or reasoning-first variants over generic base models; (2) redesigning web retrieval to support reflection and error correction; (3) strengthening the connection between visual observations and textual conclusions; (4) improving specialty-specific diagnosis ability; and (5) establishing practical standards for image quality and question clarity. For future scalable evaluation of open-ended diagnoses, we introduce a rubric-aligned LLM judge that was stricter than clinicians yet maintained substantial agreement. Overall, our results suggest that reliable performance in open-ended multimodal diagnosis depends more on auditable, reasoning-first model designs and high-quality inputs than on aggressive retrieval or prolonged agentic workflows. Multimodal LLMs show substantial promise, particularly in contextual understanding, but still exhibit persistent gaps in evidence integration and diagnostic reasoning that must be addressed before routine clinical use.",
        authors: [
            { name: "Shaohui Zhang", role: "first" },
            { name: "Jiarong Qian", role: "first" },
            { name: "Kai Zhang" },
            { name: "Zhiling Yan" },
            { name: "Michael A. Catalano" },
            { name: "Kiridly Adam" },
            { name: "Omar Toubat" },
            { name: "Gregory E. Tasian" },
            { name: "Quanzheng Li" },
            { name: "Yonghui Wu" },
            { name: "Xing Lei" },
            { name: "Wei Liu" },
            { name: "Hua Xu" },
            { name: "Lifang He" },
            { name: "Xiang Li" },
            { name: "Zhiyong Lu" },
            { name: "Lichao Sun" },
            { name: "Jing Huang", role: "corresponding" },
        ],
        venues: [
            { name: "npj Digital Medicine (accepted pending revision)", type: "journal" },
        ],
        links: {
            msg: "* Co-first authors",
        },
        image: complexity_paradox_img,
        tags: ["Selected", "Medical AI", "Multimodal Diagnosis", "LLM Agents", "Clinical Evaluation"],
    },
    {
        id: "llms-samed-few-shot-pulmonary-nodule",
        year: 2026,
        title: "Leveraging LLMs and SAMed for Synergistic Prompt Learning in Few-Shot Pulmonary Nodule Subtype Classification",
        abstract: "Precise pulmonary nodule subtype classification from CT images plays a crucial role in the early detection and personalized treatment of lung cancer. However, the scarcity of reliable, finely annotated pathological data severely limits the ability of conventional deep learning models to achieve robust performance through large-scale supervised training. Recent advances in pre-trained vision-language (VL) models, such as CLIP, offer a promising paradigm for few-shot medical image classification. Nevertheless, directly applying existing prompt-learning methods to VL models presents two major limitations: text prompts derived solely from basic class names lack sufficient semantic richness, and the substantial domain gap between natural and medical images limits the model’s ability to capture subtle anatomical structures. To address these challenges, we propose SAMLa-CLIP, a dual-modal prompt-learning framework that leverages a medical segmentation foundation model (SAMed) and large language models (LLMs) to enhance the few-shot classification capability of CLIP for pulmonary nodule subtypes. Specifically, LLMs are used to generate semantically enriched textual prompts for the CLIP text encoder, enriching the semantic representation of abstract pathological categories to improve cross-modal alignment. Meanwhile, SAMed extracts morphology-aware lesion priors from CT images of pulmonary nodules and constructs morphology-aware visual prompts for the CLIP image encoder to capture fine-grained lesion characteristics. These dual-modal prompts are further incorporated into multiple transformer layers to improve CLIP’s adaptation to pulmonary nodule classification under limited annotation conditions. Experiments on the public LIDC-IDRI dataset and an in-house clinical dataset show that SAMLa-CLIP consistently outperforms several representative baselines in few-shot settings and demonstrates promising transferability across related datasets.",
        authors: [
            { name: "Tonglong Ren" },
            { name: "Jiarong Qian" },
            { name: "Yingchao Wang" },
            { name: "Jingqi Wang" },
            { name: "Jingru Li" },
            { name: "Dejing Zhang" },
            { name: "Lei Ma" },
            { name: "Jingyang Zhang" },
            { name: "Peng Xue", role: "corresponding" },
        ],
        venues: [
            { name: "AIIM (With Editor)", type: "journal" },
        ],
        links: {
            msg: "",
        },
        image: samla_clip_framework_img,
        tags: ["Selected", "Medical AI"],
    },
];


const tagColors = {
    conference: "conference",
    journal: "journal",
    workshop: "workshop",
    // submission: "submission",
    wip:"wip",
    thesis:"thesis",
    exhibition: "exhibition",
};

// 给不同tag分配不同颜色
const tagStyleMap = {
    "Selected": "#242424",
    "In Submission":"#cccccc",
    "Human-AI Collaboration": "#7c3aed",
    "Creativity Support": "#8b5cf6",
    "Affective Computing": "#6d28d9",
    "Cultural & Philosophical": "#581c87",
    "Machine Learning": "#7e22ce",
    "Cognitive Augmentation": "#9333ea",
    "Computer Vision":"#4c1d95",
    "Digital Fabrication": "#6366f1",
    "Embodied Interaction": "#4338ca",
    "Multimodal Interaction": "#a78bfa",
    "System": "#c4b5fd",
    "Survey": "#6b21a8",
    "Understanding People": "#5b21b6",
};

export default function Publications() {
    const [selectedYear, setSelectedYear] = useState("");

    const filteredPublications = selectedYear
        ? publications.filter((p) => String(p.year) === selectedYear)
        : publications;
    const allYears = [...new Set(publications.map((paper) => String(paper.year ?? "Unknown")))]
        .sort((a, b) => Number(b) - Number(a));
    const publicationsByYear = filteredPublications.reduce((acc, paper) => {
        const yearKey = String(paper.year ?? "Unknown");
        if (!acc[yearKey]) acc[yearKey] = [];
        acc[yearKey].push(paper);
        return acc;
    }, {});
    const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

    const handleYearClick = (year) => {
        setSelectedYear(selectedYear === year ? "" : year);
    };
    const handleSelectChange = (event) => {
        const newYear = event.target.value;
        handleYearClick(newYear);
    };

    return (
        <div className="publications" id="publications" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Publications
                </div>

                <select
                    className="tag-select-filter"
                    value={selectedYear}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    {allYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}

                </select>
            </div>

            {/*<div className="tag-filter">*/}
            {/*    <span*/}
            {/*        className={`${selectedTag === "Selected" ? "active" : ""} rainbow-tag`}*/}
            {/*        style={{color: tagStyleMap["Selected"]}}*/}
            {/*        onClick={() => handleTagClick("Selected")}*/}
            {/*    >*/}
            {/*            #Selected*/}
            {/*        </span>*/}
            {/*    <span*/}
            {/*        key={"In Submission"}*/}
            {/*        className={`${selectedTag === "In Submission" ? "active" : ""} submission-tag`}*/}
            {/*        onClick={() => handleTagClick("In Submission")}*/}
            {/*    >*/}
            {/*            #In Submission*/}
            {/*        </span>*/}
                {/*{Object.keys(tagStyleMap).map((tag) => {*/}
                {/*        if (tag === "Selected") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} rainbow-tag`}*/}
                {/*                style={{color: tagStyleMap[tag]}}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        } else if (tag === "In Submission") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} submission-tag`}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        }*/}
                {/*        // else return (<span*/}
                {/*        //     key={tag}*/}
                {/*        //     className={`filter-tag ${selectedTag === tag ? "active" : ""}`}*/}
                {/*        //     style={{color: tagStyleMap[tag]}}*/}
                {/*        //     onClick={() => handleTagClick(tag)}*/}
                {/*        // >*/}
                {/*        //     #{tag}*/}
                {/*        // </span>)*/}
                {/*    }*/}
                {/*)}*/}
            {/*</div>*/}

            <div className="publications-info">
                {/*My publications reflect my ongoing exploration of human–AI interaction and creativity support.*/}
                {/*You can click on the tags below to filter papers by topic or research area.*/}
                <div className="publications-info-small">* indicates equal contribution, and † denotes the advising
                    professor.</div>
            </div>


            <div className="publications-list">
                {sortedYears.map((year) => (
                    <React.Fragment key={year}>
                        <div style={{ fontWeight: 800, fontSize: "1.1rem", marginTop: "0.4rem", marginBottom: "0.2rem" }}>{year}</div>
                        {publicationsByYear[year].map((paper, index) => (
                            <div key={`${year}-${index}`} className="publication-card" id={paper.id}>
                        {paper.image ? (
                            <img
                                src={paper.image}
                                alt={paper.title}
                                className="publication-image"
                            />
                        ) : (
                            <div className="publication-image" aria-hidden="true" />
                        )}

                        <div className="publication-content">

                            <div className="publication-venue">
                                {paper.venues.map((v, vi) => (
                                    <span
                                        key={vi}
                                        className={`venue-tag ${tagColors[v.type]}`}
                                    >
                    {v.name}
                  </span>
                                ))}
                            </div>

                            {/* title + hover abstract */}
                            <div className="publication-title-wrapper">
                                <div className="publication-title">{paper.title}</div>
                                <div className="abstract-popup">{paper.abstract}</div>
                            </div>

                            <div className="publication-authors">
                                {paper.authors.map((author, i) => {
                                    let symbol = "";
                                    if (author.role === "first") symbol = "*";
                                    if (author.role === "second") symbol = "**";
                                    if (author.role === "advisor") symbol = "†";
                                    const isCorresponding = author.role === "corresponding";

                                    const isMe = author.name === MY_NAME;
                                    const baseNameNode = isMe ? (
                                        <strong
                                            style={{color: "#7c3aed", fontWeight: 900}}
                                        >
                                            {author.name + symbol}
                                        </strong>
                                    ) : (
                                        author.name + symbol
                                    );
                                    const authorName = (
                                        <>
                                            {baseNameNode}
                                            {isCorresponding && <sup style={{ color: "#000", marginLeft: "2px", fontSize: "0.95em", fontWeight: 700 }}>✉</sup>}
                                        </>
                                    );

                                    return (
                                        <span key={i}>
                      {author.link ? (
                          <a
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="author-link"
                          >
                              {authorName}
                          </a>
                      ) : (
                          authorName
                      )}
                                            {i < paper.authors.length - 1 && ", "}
                    </span>
                                    );
                                })}
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag, i) => {
                                        if (tag === "Selected") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show rainbow-tag-all"
                                                    // onClick={() => handleTagClick(tag)}
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else if (tag === "In Submission") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show submission-tag-all"
                                                    // onClick={() => handleTagClick(tag)}
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else return (
                                            <span
                                                key={i}
                                                className="tag-item-show"
                                                // style={{color: tagStyleMap[tag]}}
                                                style={{color: "#888"}}
                                                // onClick={() => handleTagClick(tag)}
                                            >
                                            #{tag}
                                        </span>
                                        );
                                    }
                                )}
                            </div>

                            <div className="publication-links">
                                {paper.links.pdf && (
                                    <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                                        PDF
                                    </a>
                                )}
                                {paper.links.thesis && (
                                    <a href={paper.links.thesis} target="_blank" rel="noopener noreferrer">
                                        Master Thesis
                                    </a>
                                )}
                                {paper.links.acm && (
                                    <a href={paper.links.acm} target="_blank" rel="noopener noreferrer">
                                        DOI
                                    </a>
                                )}
                                {paper.links.arxiv && (
                                    <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                                        arXiv
                                    </a>
                                )}
                                {paper.links.slide && (
                                    <a href={paper.links.slide} target="_blank" rel="noopener noreferrer">
                                        Slide
                                    </a>
                                )}
                                {paper.links.github && (
                                    <a href={paper.links.github} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                )}
                                {paper.links.web && (
                                    <a href={paper.links.web} target="_blank" rel="noopener noreferrer">
                                        Website
                                    </a>
                                )}
                                {paper.links.poster && (
                                    <a href={paper.links.poster} target="_blank" rel="noopener noreferrer">
                                        Poster
                                    </a>
                                )}
                                {paper.links.code && (
                                    <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                                        Code
                                    </a>
                                )}
                                {paper.links.demo && (
                                    <a href={paper.links.demo} target="_blank" rel="noopener noreferrer">
                                        Demo
                                    </a>
                                )}
                                {paper.links.short && (
                                    <a href={paper.links.short} target="_blank" rel="noopener noreferrer">
                                        Quick View
                                    </a>
                                )}
                                {paper.links.page && (
                                    <a href={paper.links.page} target="_blank" rel="noopener noreferrer">
                                        Page
                                    </a>
                                )}
                                {paper.links.video && (
                                    <a href={paper.links.video} target="_blank" rel="noopener noreferrer">
                                        Presentation
                                    </a>
                                )}
                                {paper.links.msg && (
                                    <div className={"publications-msg"}>{paper.links.msg}</div>
                                )}
                            </div>

                        </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
