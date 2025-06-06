function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/fruit_doc"><img src="/img/icons/vk.svg"
                                                                                             alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src="/img/icons/instagram.svg" alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="#!"><img src="/img/icons/twitter.svg" alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://github.com/IlyaBurlak"><img
                            src="/img/icons/gitHub.svg" alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src="/img/icons/linkedIn.svg" alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 by Ilya Burlak</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;