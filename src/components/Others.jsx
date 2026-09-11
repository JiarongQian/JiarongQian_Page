import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import sallyMasonPreview from "../assets/sally-mason-muted-spring.jpg";
import "../css/Others.css";

const SALLY_MASON_COLLECTIONS = "https://www.sallymasonphotography.com/collections";
const SALLY_MASON_POST = "https://www.instagram.com/p/DcX9L3AszrG/";

export default function Others() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <main className="others-page" id="others">
            <header className="others-intro">
                <div className="others-kicker">A personal collection</div>
                <h1>Others</h1>
                <p>
                    Here are some artists I really like—including photographers and
                    painters—as well as a few films.
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
                        href={SALLY_MASON_POST}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Muted Spring by Sally Mason on Instagram"
                    >
                        <img
                            src={sallyMasonPreview}
                            alt="Muted Spring, a floral photograph by Sally Mason"
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
                        <div className="artist-credit">
                            Muted Spring · Image and work © Sally Mason
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}
