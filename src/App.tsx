import { useState } from "react";
import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles.",
        "O bom senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo do fracasso.",
        "Mesmo que algo pareça difícil, nunca desista antes de tentar.",
        "O êxito é a somatória dos pequenos esforços repetidos diariamente.",
        "O fruto do que você escolher hoje, é o que você viverá amanhã.",
        "Se não está feliz com algo, mexa se!.",
        "Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!.",
        "A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!.",
        "Escreva em seu coração: todo dia é o melhor dia do ano.",
        "Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.",
        "Que o amor esteja presente do começo ao fim do seu dia!",
        "Tenha um bom dia, uma tarde produtiva e uma noite fantástica!",
        "A vida é curta e o tempo passa rápido. Aproveite cada instante. Bom dia!",
        "Quanto mais fortes forem suas provações, maiores serão suas vitórias. Bom dia!",
        "No final, as coisas que nos arrependemos são as decisões que não tomamos. Aproveite este dia sem medo e sem culpa!",
        "A realização de um sonho não chega antes do esforço. Tenha fé, coragem e força para que este dia te dê muito orgulho!",
        "Não tenha medo dos desafios. Tenha medo de não tentar. Bom dia!",
      ],
    },
    {
      id: 3,
      nome: "Amizade",
      frases: [
        "Amigos são as irmãs e os irmãos que nunca tivemos e que estão ao nosso lado nos altos e baixos de nossa caminhada.",
        "Amigos: enquanto alguns escolhem pessoas perfeitas, eu escolho as que me fazem bem.",
        "Bons amigos são como estrelas: nem sempre podemos ver, mas temos certeza que estão sempre lá.",
        "Deus criou a amizade porque ele sabia que, quando o amor machucasse, ela seria a cura.",
        "É difícil expressar em palavras o quanto sou grato por sua amizade, mas obrigado por ser exatamente tudo o que eu preciso.",
        "Uma das melhores sensações da vida é ter a certeza que você pode confiar em alguém, assim como confio em você.",
        "Tem palavras que chegam como um abraço e tem abraços que não precisam de palavras...",
        "Amigos que te tiram um sorriso sincero e espontâneo quando você chega a pensar que tudo está perdido... Esses sim são os verdadeiros!",
        "Pessoas incríveis fazem lugares comuns se tornarem extraordinários. Os amigos são assim!",
        "Quem tem um amigo mesmo que um só, não importa onde se encontre, jamais sofrerá de solidão; poderá morrer de saudades, mas não estará só.",
      ]
    },
  ];

  function handleSwitchCategory(index:number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const numeroAleatorio= Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img className="logo" src={logoImg} alt="logo frases" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button className="category-btn" key={item.id}
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}

          onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="btn-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
