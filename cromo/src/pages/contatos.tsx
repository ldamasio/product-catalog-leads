import React from 'react';
import Layout from "@/components/Layout";

const Contatos: React.FC = () => {
  return (
    <Layout>
      <div className="Contatos">
        <h1 className="Contatos-titulo">Quem Somos</h1>

        <p>
          Na <strong>Cromo Cadastro</strong>, transformar sonhos em realidade é a nossa paixão!
          Há mais de 10 anos, somos
          especialistas em realizar o sonho da casa própria, do carro novo, da moto
          desejada, do caminhão que impulsiona seu negócio ou da embarcação que te leva
          para momentos inesquecíveis.
        </p>
        <h2>Bem-vindo(a) à <strong>Cromo Cadastro</strong>!</h2>
        <h3>Realize seus sonhos com a gente!</h3>
        <h4>Oferecemos diversas opções de financiamento para você alcançar seus objetivos, seja investir em um novo negócio, reformar a casa dos seus sonhos ou até mesmo realizar aquela viagem tão desejada.</h4>
        <p>Antes de começar:</p>
        <p>Para garantir uma experiência segura e transparente, pedimos que você leia atentamente os nossos Termos de Uso antes de solicitar qualquer financiamento. Neles, você encontrará todas as informações sobre:</p>
        <li>
          <ul>Juros e taxas: Condições de pagamento, prazos e encargos dos nossos financiamentos.</ul>
          <ul>Direitos e obrigações: Seus direitos como cliente e suas responsabilidades ao contratar um financiamento conosco.</ul>
          <ul>Segurança e privacidade: Como protegemos seus dados e informações pessoais.</ul>
        </li>
        <p>Leia os Termos de Uso: [Link para os Termos de Uso]</p>
        <p>Ao clicar em "Continuar", você confirma que leu e concorda com os Termos de Uso.</p>
        <p>Pronto para começar?</p>
        <p>Preencha o formulário rápido abaixo e um de nossos especialistas entrará em contato com você para te auxiliar na escolha do financiamento ideal para suas necessidades.</p>
        <p>Clique em "Continuar" para iniciar sua jornada!</p>
      </div>
    </Layout>
  );
};

export default Contatos;
