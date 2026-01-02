import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
// In a real build, we'd import the JSON or dynamic load it
// import animationData from '../assets/animation.json';

const EpisodePlayer = () => {
    const containerRef = useRef(null);
    const animRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        // Placeholder for Lottie initialization
        // For MVP without actual assets, we will simulate the timing loop with a simple visual fallback
        // If lottie-web was fully active with assets, we'd use:
        /*
        animRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData // need the file
        });
        */

        // Simulation loop logic for "Grain Test"
        // Loop is 12s.
        // Text "Grain direction matters" at t=7s -> t=9s

        const loopDuration = 12000;
        const overlayStart = 7000;
        const overlayEnd = 9000;

        let startTime = Date.now();
        let animationFrame;

        const tick = () => {
            if (!isPlaying) {
                // adjust start time so we don't jump when resuming
                startTime = Date.now() - (lastProgress);
                animationFrame = requestAnimationFrame(tick);
                return;
            }

            const now = Date.now();
            const elapsed = (now - startTime) % loopDuration;
            lastProgress = elapsed;

            // Overlay Logic
            if (elapsed >= overlayStart && elapsed < overlayEnd) {
                setShowOverlay(true);
            } else {
                setShowOverlay(false);
            }

            animationFrame = requestAnimationFrame(tick);
        };

        let lastProgress = 0;
        animationFrame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(animationFrame);
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        // Dispatch analytics event stub
        console.log(`Episode ${!isPlaying ? 'play' : 'pause'}`);
    };

    return (
        <div
            className="episode-container"
            onClick={togglePlay}
            role="button"
            aria-label="Looping animation: beaver testing pencil grain. Click to pause."
            style={{
                width: '100%',
                maxWidth: '760px',
                aspectRatio: '16 / 9',
                border: '2px solid var(--color-ink)',
                position: 'relative',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                cursor: 'pointer'
            }}
        >
            <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
                {/* Placeholder Visual since we don't have the Lottie JSON yet */}
                <div style={{
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column',
                    opacity: 0.3
                }}>
                    <p>[ Animation Placeholder ]</p>
                    <p style={{ fontSize: '0.8rem' }}>Morse the Beaver - Grain Test</p>
                </div>
            </div>

            {showOverlay && (
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    background: 'var(--color-bg)',
                    padding: '4px 8px',
                    border: '1px solid var(--color-ink)',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    Grain direction matters.
                </div>
            )}

            {/* Play/Pause Indicator (Optional, per spec mostly hidden unless hovering or paused) */}
            {!isPlaying && (
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255,255,255,0.8)',
                    padding: '1rem',
                    border: '1px solid black',
                    zIndex: 10
                }}>
                    PAUSED
                </div>
            )}
        </div>
    );
};

export default EpisodePlayer;
