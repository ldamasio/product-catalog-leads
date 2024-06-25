import React from 'react';
import Layout from "@/components/Layout";
import { faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
import ButtonCadastro from '@/components/ButtonCadastro';

const Cadastro: React.FC = () => {

  const handleParceiroClick = () => {
    window.location.href = '/formulario?tipo=parceiro';
  };
  
  const handleUsuarioClick = () => {
    window.location.href = '/formulario?tipo=usuario';
  };

  return (
    <Layout>
      <div className="cadastro">
        <h1 className="cadastro-titulo"><strong>Obter Financiamento</strong></h1>
        <p>Tudo pronto para começar?</p>
        <p>Escolha o seu perfil para se identificar.</p>
        <div className="buttons-container">
          <ButtonCadastro 
            label="Quero ser Parceiro"
            icon={faHandshake}
            onClick={() => handleParceiroClick()}
          />
          <ButtonCadastro
            label="Quero ser Usuário"
            icon={faUser}
            onClick={() => handleUsuarioClick()}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Cadastro;
