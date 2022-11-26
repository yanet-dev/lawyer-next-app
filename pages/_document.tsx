import { Html, Head, Main, NextScript} from 'next/document';

function Document(props:any){

    const {locale} = props.__NEXT_DATA__
    const dir = locale === 'he' ? 'rtl' : 'ltr';

    return (
        <Html dir="rtl" lang="he">
            <Head/>
            <body className="d-flex flex-column h-100">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

export default Document;