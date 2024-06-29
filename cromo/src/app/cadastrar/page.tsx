import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './cadastrar.module.css'

const Cadastrar: React.FC = () => {
  return (
    <>
      <div className={styles.cadastro}>
        <h1 className={styles.cadastroTitulo}><strong>Obter Financiamento</strong></h1>
        <p>Tudo pronto para começar?</p>
        <p>Escolha o seu perfil para se identificar.</p>
        <div className={styles.cadastroLinksContainer}>
          <div className={styles.cadastroLink}>
            <Link href="/formulario/parceiro">
              <FontAwesomeIcon icon={faHandshake} className={styles.cadastroLinkIcon} />
              <span>Quero ser Parceiro</span>
            </Link>
          </div>
          <div className={styles.cadastroLink}>
            <Link href="/formulario/usuario">
              <FontAwesomeIcon icon={faUser} className={styles.cadastroLinkIcon} />
              <span>Quero ser Usuário</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
