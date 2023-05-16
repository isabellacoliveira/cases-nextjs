export default function GlobalStyle(){
    // temos que declarar que esse css eh global 
    // ele eh global somente para esse escopo 
    // custom app 
    return (
        <style global jsx>{`
            body {
                font-family: sans-serif;
            }
        `}</style>
    )
}

