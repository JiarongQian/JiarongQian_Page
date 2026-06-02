import React, { useEffect, useRef } from 'react';

const MAPMYVISITORS_TRACKER_ID =
    import.meta.env.VITE_MAPMYVISITORS_TRACKER_ID || 'H2xuQAzzC5LAB1X9-QLoADwrxOX4JKEOoErGToH1wb4';

export default function Visitor() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const container = mapContainerRef.current;
        if (!container) return;

        container.innerHTML = '';

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mapmyvisitors';
        script.src = `https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=n&d=${MAPMYVISITORS_TRACKER_ID}&co=cbe3ff&cmo=d4a8ff&cmn=fa9bea`;
        script.async = true;

        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            className="visitor-map-container"
            style={{
                width: '80%',
                margin: '0 auto',
                minHeight: '160px',
            }}
        />
    );
}
