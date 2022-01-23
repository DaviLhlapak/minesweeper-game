import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-gray-800 text-white min-h-screen">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument
