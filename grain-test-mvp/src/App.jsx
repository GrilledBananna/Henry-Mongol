import React, { useState } from 'react'
import Header from './components/Header'
import EpisodePlayer from './components/EpisodePlayer'
import './styles/layout.css'

function App() {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <main className="app-container">
            <Header />

            <section className="episode-stage">
                <h2 className="sr-only">Micro-Episode 01: Grain Test</h2>
                <EpisodePlayer />
            </section>

            <footer className="app-footer">
                <button
                    className="details-toggle"
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    aria-expanded={detailsOpen}
                >
                    {detailsOpen ? "Close Details" : "Details"}
                </button>

                {detailsOpen && (
                    <div className="details-drawer">
                        <p>Pencil wood is milled into slats. If grain runs poorly or the wood is brittle, the barrel can crack and sharpen unpredictably. Good pencils start with stable, straight-grain cedar.</p>
                    </div>
                )}

                <div className="copyright">
                    © 2025 Antigravity
                </div>
            </footer>
        </main>
    )
}

export default App
