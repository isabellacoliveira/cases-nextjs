import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({ Component, pageProps }) {
    return (
        <>
        {/* teste de componente middleware que passa em cima de todo mundo */}
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;