import Link from "../src/components/Link";
import React from "react";

export default function homePage(){
    return (
        <>
        <div>
            <h1>Alura Cases - Home Page</h1>
            {/* garantir que o Href será mostrado na tela */}
            <Link href="/faq">
                Ir para o FAQ
            </Link>
        </div>
        </>
    );
}