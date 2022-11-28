import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Navigation.module.scss";


function Navigation() {
    return (
        <div className="container-fluid">
            <nav className={`${styles.header} navbar navbar-expand-lg`}>
                <div className="container">
                    <div className="collapse navbar-collapse align-items-center" id="navbarNav">
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
                            <Image src="/scale.png" alt="mithabrim laneshama" width={50} height={40}/>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;