'use client'

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoDois = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));

    if (name === "pep" || name === "fatca") {
      setFormState(prevState => ({ ...prevState, [name]: value === "true" }));
    }
  };

  const handleCheckboxClickPep = () => {
    setFormState((prevState) => ({
      ...prevState,
      pep: !prevState.pep,
    }));
  };

  const handleCheckboxClickFatca = () => {
    setFormState((prevState) => ({
      ...prevState,
      fatca: !prevState.fatca,
    }));
  };
  
  const handleNext = () => {
    router.push('/form/PassoTres');
  };

  const handleBack = () => {
    router.push('/form/PassoUm');
  };

  return (
    <div className='formulario'>
      <div className='formulario-container'>
        <h1>Passo 2: Informações Complementares</h1>
        <label htmlFor="renda">
          Renda:
          <input
            type='number'
            id="renda"
            name="renda"
            placeholder='0000,00'
            value={formState.renda}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="mae">
          Nome da Mãe:
          <input
            id="mae"
            name="mae"
            placeholder=""
            type="text"
            value={formState.mae}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="pai">
          Nome do Pai:
          <input
            id="pai"
            name="pai"
            placeholder=""
            type="text"
            value={formState.pai}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="nacionalidade">
          Nacionalidade:
          <input
            id="nacionalidade"
            name="nacionalidade"
            placeholder=""
            type="text"
            value={formState.nacionalidade}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="residenciaEstado">
          Estado de Residência:
          <input
            id="residenciaEstado"
            name="residenciaEstado"
            placeholder=""
            type="text"
            value={formState.residenciaEstado}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="residenciaCidade">
          Cidade de Residência:
          <input
            id="residenciaCidade"
            name="residenciaCidade"
            placeholder=""
            type="text"
            value={formState.residenciaCidade}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="classeProfissional">
          Classe Profissional:
          <input
            id="classeProfissional"
            name="classeProfissional"
            placeholder=""
            type="text"
            value={formState.classeProfissional}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="profissao">
          Profissão:
          <input
            id="profissao"
            name="profissao"
            placeholder=""
            type="text"
            value={formState.profissao}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="valorPatrimonio">
          Valor do Patrimônio:
          <input
            id="valorPatrimonio"
            name="valorPatrimonio"
            placeholder=""
            type="number"
            value={formState.valorPatrimonio}
            onChange={handleChange}
            required
          />
        </label>

        <span className='checkbox-container'>
          <div className='checkbox-text' onClick={handleCheckboxClickPep}>
            PEP (Pessoa Exposta Politicamente):
          </div>
          <div className='checkbox-container-input-div'>
            <input
              className='checkbox-container-input'
              autoFocus
              type="checkbox"
              checked={formState.pep}
              onChange={handleCheckboxClickPep}
              required
            />
          </div>
        </span>


        <span className='checkbox-container'>
          <div className='checkbox-text' onClick={handleCheckboxClickFatca}>
            FATCA (Lei de Conformidade Fiscal de Contas Estrangeiras):
          </div>
          <div className='checkbox-container-input-div'>
            <input
              className='checkbox-container-input'
              autoFocus
              type="checkbox"
              checked={formState.fatca}
              onChange={handleCheckboxClickFatca}
              required
            />
          </div>
        </span>

        <label htmlFor="telefonesAdicionais" className="mt-3">
          Telefones Adicionais (separados por vírgula):
          <input
            id="telefonesAdicionais"
            name="telefonesAdicionais"
            placeholder=""
            type="text"
            value={formState.telefonesAdicionais}
            onChange={handleChange}
            required
          />
        </label>
        <div className='formulario-buttons-container'>
          <div className='formulario-button-prev'>
            <button onClick={handleBack}>Voltar</button>
          </div>
          <div className='formulario-button-next'>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoDois;
