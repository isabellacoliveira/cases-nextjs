import Link from "next/link";
import React from "react";

export default function homePage(){
    return (
        <>
        <div>
            <h1>Alura Cases - Páginas de Perguntas</h1>
            <Link href="/faq">Ir para o FAQ </Link>
        </div>
        </>
    );
}