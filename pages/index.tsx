import Link from "../src/components/Link";
import React from "react";
import GlobalStyle from "../src/components/Theme/GlobalStyle";

// o componente vai renderizar 'as'a alguma coisa 
function Title({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag}{
            color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <div>
        <Title as="h1">Alura Cases - Home Page</Title>
        {/* garantir que o Href será mostrado na tela */}
        <Link href="/faq">Ir para o FAQ</Link>
      </div>
    </>
  );
}
