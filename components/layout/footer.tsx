import Link from "next/link";
import styles from "/styles/Footer.module.scss";
import Image from "next/image";

function Footer() {
    return (
        <footer className={`${styles.footer} mt-auto py-5`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h6 className={`${styles.headingLabel}`}>logo</h6>
                        <p className="col-md-9">
                            לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גם דמי טקסט או ג'יבריש -
                            ומיועד להיות ממוקם בסקיצות עיצוביות - של עלונים, מגזינים, מודעות, אתרי אינטרנט וכו' - במקום
                            הטקסט האמיתי הסופי - עד שיהיה טקסט אמיתי.
                        </p>
                        <div className="col">
                            <div className="row align-items-center">
                                <div className="col-md-2">
                                    <Link href="https://www.facebook.com/RetterLaw/" legacyBehavior>
                                        <a target="_blank" className={`${styles.footerSocialMedia}`}>
                                            <i className={`${styles.footerSocialIcon} bi bi-facebook `}></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-md-2">
                                    <Link href="/" legacyBehavior>
                                        <a target="_blank" className={`${styles.footerSocialMedia}`}>
                                            <i className={`${styles.footerSocialIcon} bi bi-instagram `}></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-md-2">
                                    <Link href="/" legacyBehavior>
                                        <a target="_blank" className={`${styles.footerSocialMedia}`}>
                                            <i className={`${styles.footerSocialIcon} bi bi-linkedin `}></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className={`${styles.headingLabel}`}> הקשר וחסר</h4>
                        <p className="list-group-item">סקיצה העיצובית</p>
                        <p className="list-group-item">סקיצה העיצובית</p>
                        <p className="list-group-item">סקיצה העיצובית</p>
                        <p className="list-group-item">סקיצה העיצובית</p>
                    </div>
                    <div className="col">
                        <h4 className={`${styles.headingLabel}`}>לראשונה בישראל</h4>
                        <div>
                            <a href="#" className={`${styles.footerSocialMedia}`}>
                                <i className={`${styles.footerSocialIcon} bi bi-geo-alt-fill`}></i>
                            </a>
                            <span className="m-3">טקסט לורם איפסום בעברית לטובת</span>
                        </div>
                        <div>
                            <a href="#" className={`${styles.footerSocialMedia}`}>
                                <i className={`${styles.footerSocialIcon} bi bi-telephone-fill`}></i>
                            </a>
                            <span className="m-3">טקסט לורם איפסום בעברית לטובת</span>
                        </div>

                        <div>
                            <a href="#" target="_blank" className={`${styles.footerSocialMedia}`}>
                                <i className={`${styles.footerSocialIcon} bi bi-envelope-fill`}></i>
                            </a>
                            <span className="m-3">טקסט לורם איפסום בעברית לטובת</span>
                        </div>
                    </div>
                </div>
                <hr className={`${styles.footerMiddleLine}`}/>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6 text-center">
                        <h6> coppyright @ לורם איפסום הוא טקסט חסר הקשר וחסר</h6>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;