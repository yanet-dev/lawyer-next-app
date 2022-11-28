import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Navigation.module.scss";


function Navigation() {
    return (
        <div className="container-fluid">
            <nav className={`${styles.navBar} navbar navbar-expand-lg`}>
                <div className="container">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a className={`${styles.contactButton} btn btn-primary`} type="button">
                            <i className={`${styles.contactIcon} bi bi-arrow-right-circle-fill`}/>
                            Contact Me
                        </a>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-around">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact me</a>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" legacyBehavior>
                        <a className="navbar-brand">
                            <Image src="/scale.png" alt="logo" width={50} height={40}/>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;