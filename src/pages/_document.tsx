import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* OGP設定 */}
                    <meta property="og:title" content="JUKEBOXXLONDON"/>
                    <meta property="og:description" content="カスタムライダースジャケットを製作しているブランド"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://jukeboxx_london.com/"/>
                    <meta property="og:image" content="/images/aboutus.jpeg"/>
                    <meta property="og:site_name" content="JUKEBOXXLONDON"/>
                    <meta property="og:locale" content="ja_JP"/>

                    {/* Twitterカード設定 */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@jukeboxx_london"/>
                    <meta name="twitter:title" content="JUKEBOXXLONDON"/>
                    <meta name="twitter:description" content="カスタムライダースジャケットを製作しているブランド"/>
                    <meta name="twitter:image" content="/images/aboutus.jpeg"/>

                    {/* その他のヘッド要素 */}
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;