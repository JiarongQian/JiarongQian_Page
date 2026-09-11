import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Internship from './components/Internship';
import Footer from './components/Footer';
import './App.css';
import "./css/All.css"
import News from "./components/News.jsx";
import SelectedAwards from "./components/SelectedAwards.jsx";
import Education from "./components/Education.jsx";
import More from "./components/More.jsx";
import Visitor from "./components/Visitor.jsx";
import Others from "./components/Others.jsx";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function PageLayout({ children, className = "" }) {
    return (
        <div className={`main-layout ${className}`}>
            <div className="left-hero">
                <Hero />
            </div>
            <div className="right-content">
                {children}
            </div>
        </div>
    );
}

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.scrollTo) return;

        const frame = window.requestAnimationFrame(() => {
            document.getElementById(location.state.scrollTo)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [location.state]);

    return (
        <PageLayout>
            <div style={{margin: "2rem"}}>
                <About />
                <News />
                <Publications />
                <Internship />
                <Education />
                <SelectedAwards />
                <More />
            </div>
            <Visitor />
        </PageLayout>
    );
}

function App() {
    useEffect(() => {
        window.gtag && window.gtag("config", "G-F053REKZP6", {});
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/others"
                    element={
                        <PageLayout className="others-layout">
                            <Others />
                        </PageLayout>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {/*<Footer />*/}
        </div>
    );
}

export default App;
