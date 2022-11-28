import Navigation from "../components/layout/navigation";
import Head from 'next/head';
import Footer from "../components/layout/footer";
export default function Home() {
    return (
        <>
            <Head>
                <title>Lawyer App</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Head>
            <Navigation/>
            <main>
                hello
            </main>
            <Footer/>
        </>
    )
}
