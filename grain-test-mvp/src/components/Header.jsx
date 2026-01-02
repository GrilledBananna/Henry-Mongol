import React from 'react';
import '../styles/index.css';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            paddingTop: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)'
        }}>
            <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--spacing-sm)'
            }}>
                Mongol Pencils
            </h1>
            <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: 0.6
            }}>
                Materials. Graphite. Time.
            </p>
        </header>
    );
};

export default Header;
