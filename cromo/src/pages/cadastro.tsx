import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';

const Cadastro: React.FC = () => {

  const [ehParceiroState, setEhParceiroState] = useState(false);
  
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
          <Button
            label="Quero ser Parceiro"
            icon={faHandshake}
            onClick={() => handleParceiroClick()}
          />
          <Button
            label="Quero ser Usuário"
            icon={faUser}
            onClick={() => handleUsuarioClick()}
          />
        </div>
      </div>
      <p>Você optou por: {ehParceiroState ? 'Parceiro' : 'Usuário'}</p>
    </Layout>
  );
};

export default Cadastro;
