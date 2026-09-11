import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import "../css/Others.css";

const SALLY_MASON_COLLECTIONS = "https://www.sallymasonphotography.com/collections";
const SALLY_MASON_IMAGE = "https://images.squarespace-cdn.com/content/v1/621382a20d1d47709c902d43/0743a4f6-0fed-4c6a-9d56-6d4511a7f822/Sally%2BMason%2BCover%2Bv3%2Bcopy.jpeg";

export default function Others() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <main className="others-page" id="others">
            <header className="others-intro">
                <div className="others-kicker">A personal collection</div>
                <h1>Others</h1>
                <p lang="zh-CN">
                    这里是一些我很喜欢的艺术家，like 摄影师和画家，以及一些电影。
                </p>
            </header>

            <section className="others-section" aria-labelledby="photography-heading">
                <div className="others-section-heading">
                    <span>01</span>
                    <h2 id="photography-heading">Photography</h2>
                </div>

                <article className="artist-feature">
                    <a
                        className="artist-image-link"
                        href={SALLY_MASON_COLLECTIONS}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Explore Sally Mason's photography collections"
                    >
                        <img
                            src={SALLY_MASON_IMAGE}
                            alt="Stillness in Motion by landscape photographer Sally Mason"
                        />
                    </a>

                    <div className="artist-copy">
                        <div className="artist-meta">Landscape photographer · UK</div>
                        <h3>Sally Mason</h3>
                        <p>
                            Quiet landscapes shaped by motion, light, and atmosphere—photographs
                            that often feel closer to memory than documentation.
                        </p>
                        <a
                            className="artist-link"
                            href={SALLY_MASON_COLLECTIONS}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore collections
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                        <div className="artist-credit">Image and work © Sally Mason</div>
                    </div>
                </article>
            </section>
        </main>
    );
}
