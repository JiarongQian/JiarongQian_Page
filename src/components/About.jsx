import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                Hi, I'm <strong>Jiarong Qian</strong>, an undergraduate student at <a
                href="https://www.wh.sdu.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Shandong University (Weihai)
            </a>, and I will join <a href="https://eceweb.rice.edu/" target="_blank" rel="noopener noreferrer">
                Rice University ECE PhD program
            </a> in Fall 2026 under the supervision of <a href="https://qiuweipku.github.io/" target="_blank" rel="noopener noreferrer"><strong>Prof. Wei Qiu</strong></a>.
                During my undergraduate studies, I have conducted research with <a href="https://faculty.sdu.edu.cn/xuepeng1/zh_CN/index.htm" target="_blank" rel="noopener noreferrer"><strong>Prof. Peng Xue</strong></a> at <a href="https://www.wh.sdu.edu.cn/" target="_blank" rel="noopener noreferrer">Shandong University (Weihai)</a> and <a href="https://see.tongji.edu.cn/info/1391/12754.htm" target="_blank" rel="noopener noreferrer"><strong>Prof. Lei Ma</strong></a> at <a href="https://www.tongji.edu.cn/" target="_blank" rel="noopener noreferrer">Tongji University</a>, and also received research guidance from <a href="https://www.med.upenn.edu/apps/faculty/index.php/g275/p8929019" target="_blank" rel="noopener noreferrer"><strong>Prof. Jing Huang</strong></a> at <a
                href="https://dbei.med.upenn.edu/"
                target="_blank"
                rel="noopener noreferrer"
            >
                the Department of Biostatistics, Epidemiology &amp; Informatics, University of Pennsylvania
            </a>.
                <br/><br/>
                <div className="card-title">Research Interests</div>
                <ul>
                    <li><strong>Aging and Age-related Diseases:</strong> Using AI to explore the mechanisms of aging and age-related diseases through multimodal data modeling, aiming to uncover actionable biological insights and inform precision medicine.</li>
                    <li><strong>Foundation Models for Biomedical Data:</strong> Leveraging foundation models to integrate diverse biomedical data modalities and address complex problems in biology and healthcare.</li>
                    <li><strong>Interpretable and Trustworthy Biomedical AI:</strong> Developing explainable AI (XAI) methods to enhance the transparency, interpretability, and reliability of AI systems for biomedical research and clinical applications.</li>
                </ul>


                <div className="callout">If you are interested in potential collaboration, please feel free to reach out by email <strong>: )</strong></div>
            </div>
        </div>
    );
}

export default About;
