import GlobalStyle from "../src/components/Theme/GlobalStyle";

function MyApp({ Component, pageProps }){
    return <>
   {/* teste de componente middleware que passa em cima de todo mundo */}
    <GlobalStyle />
    <Component {...pageProps} />
    </>
}

export default MyApp;