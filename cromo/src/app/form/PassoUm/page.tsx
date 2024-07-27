'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoUm: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxClickParceiroTyping = () => {
    setFormState((prevState) => ({
      ...prevState,
      isParceiroTyping: !prevState.isParceiroTyping,
    }));
  };

  const handleNext = () => {
    router.push('/form/PassoDois');
  };

  return (
    <div className='formulario'>
      <div className='formulario-container'>
        {!formState.isParceiro &&
          <p><strong>ATENÇÃO!</strong> Esta ficha de cadastro é destinada para usuários que desejam ser clientes da Cromo Financiamentos.</p>
        }
        {!formState.isParceiro &&
          <p>Caso você seja um parceiro cadastrando dados em nome de um cliente, identifique-se como parceiro.</p>
        }
        {!formState.isParceiro &&
          <span className='checkbox-container'>
            <div className='checkbox-text' onClick={handleCheckboxClickParceiroTyping}>
              Sou parceiro cadastrando um cliente:
            </div>
            <div className='checkbox-container-input-div'>
              <input
                className='checkbox-container-input'
                type="checkbox"
                checked={formState.isParceiroTyping}
                onChange={handleCheckboxClickParceiroTyping}
                required
              />
            </div>
          </span>
        }

        {formState.isParceiroTyping &&
          <label htmlFor="parceiroFullname">
            Nome Completo do Parceiro:
            <input
              type="text"
              id="parceiroFullname"
              name="parceiroFullname"
              placeholder=""
              value={formState.parceiroFullname}
              onChange={handleChange}
            />
          </label>
        }

        {formState.isParceiroTyping &&
          <label htmlFor="parceiroEmail">
            E-mail do Parceiro:
            <input
              type="text"
              id="parceiroEmail"
              name="parceiroEmail"
              placeholder=""
              value={formState.parceiroEmail}
              onChange={handleChange}
            />
          </label>
        }

        {formState.isParceiroTyping &&
          <label htmlFor="parceiroCpfCnpj">
            CPF ou CNPJ do Parceiro:
            <input
              type="text"
              id="parceiroCpfCnpj"
              name="parceiroCpfCnpj"
              placeholder=""
              value={formState.parceiroCpfCnpj}
              onChange={handleChange}
            />
          </label>
        }

        <h1>Passo 1: Seu Perfil</h1>
        <label htmlFor="fullname">
          Nome Completo:
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder=""
            value={formState.fullname}
            onChange={handleChange}
            autoFocus
            required
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            id="email"
            name="email"
            placeholder=""
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="dataNasc">
          Data de Nascimento:
          <input
            type='date'
            id="dataNasc"
            name="dataNasc"
            value={formState.dataNasc}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="estadoCivil">
          Estado Civil:
          <select
            name="estadoCivil"
            id="estadoCivil"
            value={formState.estadoCivil}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o estado civil</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
            <option value='viuvo'>Viúvo</option>
            <option value='separado'>Separado</option>
          </select>
        </label>
        <label htmlFor="rgNumero">
          RG:
          <input
            type='text'
            id="rgNumero"
            name="rgNumero"
            placeholder="000.000.000-00"
            value={formState.rgNumero}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="rgOrgexp">
          Orgão Expedidor do RG:
          <input
            type='text'
            id="rgOrgexp"
            name="rgOrgexp"
            placeholder="SSP (ou outro órgão) e Estado"
            value={formState.rgOrgexp}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            type='text'
            id="cpf"
            name="cpf"
            placeholder="000.000.000-00"
            value={formState.cpf}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="celular">
          Tel Celular:
          <input
            type='tel'
            id="celular"
            name="celular"
            placeholder="(00) 00000-0000"
            value={formState.celular}
            onChange={handleChange}
            required
          />
        </label>
        <div className='formulario-buttons-container'>
          <div className='formulario-button-next'>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoUm;