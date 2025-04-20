import './Maintenance.css';

const Maintenance = () => {
    return (
        <div className="maintenance dark-theme">
            <div className="maintenance-content">
                <h1>Идут работы!</h1>
                <p>Мы скоро вернёмся с новым контентом и улучшениями.</p>

                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>

                <div className="social-links">
                    <a href="#" className="social-link" aria-label="Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="VK">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 19h-4v-9H8V8h2V7c0-2 1-3 3-3h2v3h-1c-1 0-1 1-1 1v1h3l-1 2h-2v9z"></path>
                        </svg>
                    </a>
                    <a href="https://t.me/Ilya_Burlak"   className="social-link" aria-label="Telegram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;