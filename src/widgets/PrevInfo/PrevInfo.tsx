function PrevInfo() {
    const handleDownloadCV = () => {
        const cvUrl = 'public/CV.pdf';

        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Ilya_Frontend_Developer_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Ilya</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a id='CV-btn' className="btn" onClick={handleDownloadCV}>Download CV</a>
            </div>
        </header>
    )
}

export default PrevInfo;