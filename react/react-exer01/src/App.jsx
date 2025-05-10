// import Card from "./components/Card";
// import CardDinamico from "./components/CardDinamico";
// import Contador from "./components/Contador";
// import Header from "./components/Header";
// import Input from "./components/Input";
// import Input2 from "./components/Input2";
// import Products from "./components/Products";
import AppRoutes from "./routes/Routes"

const App = () => {
  return (
    <>
      {/* <div style={{ display: 'flex', gap: '12px' }}>
        <Card
          title="Surpresas: Conheça Top 3 Jogos mais Jogados da Twitch em 2024"
          category="Esportes"
          content="Twitch é uma plataforma de transmissão ao vivo altamente popular, focada principalmente em videogames. Embora nos últimos tempos o Twitch tenha visto um influxo de populares “IRL” ou criadores de conteúdo da vida real povoando sua plataforma, o Twitch ainda parece estar comprometido em garantir seu título como o principal destino para conteúdo de videogame centrado na transmissão ao vivo.
          Reunimos insights de twitchmetrics.com durante o mês passado para determinar os jogos mais assistidos. Aqui estão os cinco jogos mais assistidos no Twitch com base nos dados de audiência."
          image="https://cf.shopee.com.br/file/br-11134201-23010-id5ehyjvt4lv62"
        />
        <Card
          title="Bitcoin sobe mais de 3% e volta aos US$ 97 mil com atenção a China e decisão do Fed"
          category="Finanças"
          content="O bitcoin (BTC) opera em alta nesta quarta-feira (7), repercutindo o avanço das negociações entre Estados Unidos e China no âmbito da guerra comercial. Ao mesmo tempo, os investidores esperam com ansiedade pela decisão do Comitê Federal de Mercado Aberto (Fomc) do Federal Reserve (Fed, o banco central americano) hoje à tarde.
          Este trecho é parte de conteúdo que pode ser compartilhado utilizando o link https://valor.globo.com/financas/criptomoedas/noticia/2025/05/07/bitcoin-sobe-mais-de-3-pontos-percentuais-e-volta-aos-us-97-mil-com-ateno-a-china-e-deciso-do-fed.ghtml ou as ferramentas oferecidas na página."
          image={'https://th.bing.com/th/id/OIP.VwcCD4kyWrtpFxDJK2Bx9gHaE8?cb=iwc1&rs=1&pid=ImgDetMain'}
        />
        <Card
          title="Nova tecnologia GPMI da China surge como uma alternativa para HDMI e USB-C"
          category="Tecnologia"
          content="Nos últimos anos, a tecnologia de transmissão de áudio e vídeo tem passado por transformações significativas. Um dos desenvolvimentos mais recentes e promissores é o GPMI, ou Interface de Mídia de Propósito Geral. Este novo padrão, que vem ganhando atenção na China, pode representar uma mudança radical na forma como conectamos nossos dispositivos para transmissão de dados multimídia."
          image={"https://th.bing.com/th/id/OIP.sO5RkCdORo3FjeTXyG9qgwHaE8?cb=iwc1&rs=1&pid=ImgDetMain"}
        />
      </div>

      <CardDinamico>
        <h2>Card Dinâmico</h2>
        <p>Esse é um exemplo de card utilizando children.</p>
      </CardDinamico>

      <Contador />

      <Input />
      <Input2 /> */}

      <AppRoutes />
    </>
  );
};

export default App;
