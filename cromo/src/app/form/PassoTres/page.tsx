'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoTres = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxClickAutonomo= () => {
    setFormState((prevState) => ({
      ...prevState,
      isAutonomo: !prevState.isAutonomo,
    }));
  };

  const handleNext = () => {
    router.push('/form/PassoQuatro');
  };

  const handleBack = () => {
    router.push('/form/PassoDois');
  };

  return (
    <div className='formulario'>
      <div className='formulario-container'>
        <h1>Passo 3: Detalhes Pessoais e Observações Gerais</h1>
        <label htmlFor="telefoneReferencia">
          Telefone Comercial:
          <input
            id="telefoneComercial"
            name="telefoneComercial"
            placeholder="(XX) X XXXX-XXXX"
            type="tel"
            value={formState.telefoneComercial}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="nomeReferencia">
          Nome da Referência:
          <input
            id="nomeReferencia"
            name="nomeReferencia"
            type="text"
            value={formState.nomeReferencia}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="telefoneReferencia">
          Telefone da Referência:
          <input
            id="telefoneReferencia"
            name="telefoneReferencia"
            placeholder="(XX) X XXXX-XXXX"
            type="tel"
            value={formState.telefoneReferencia}
            onChange={handleChange}
            required
          />
        </label>
        <span className='checkbox-container'>
            <div className='checkbox-text' onClick={handleCheckboxClickAutonomo}>
              Sou autônomo:
            </div>
            <div className='checkbox-container-input-div'>
              <input
                className='checkbox-container-input'
                type="checkbox"
                checked={formState.isAutonomo}
                onChange={handleCheckboxClickAutonomo}
                required
              />
            </div>
          </span>
        <label htmlFor="nomeReferenciaComercial">
          Nome da Referência Comercial:
          <input
            id="nomeReferenciaComercial"
            name="nomeReferenciaComercial"
            type="text"
            value={formState.nomeReferenciaComercial}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="telefoneReferenciaComercial">
          Telefone da Referência Comercial:
          <input
            id="telefoneReferenciaComercial"
            name="telefoneReferenciaComercial"
            placeholder="(XX) X XXXX-XXXX"
            type="tel"
            value={formState.telefoneReferenciaComercial}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="valorFinanciamento">
          Valor do Financiamento:
          <input
            type='number'
            id="valorFinanciamento"
            name="valorFinanciamento"
            placeholder='0000,00'
            value={formState.valorFinanciamento}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="marcaVeiculo">
          Marca do Veículo:
          <input
            id="marcaVeiculo"
            name="marcaVeiculo"
            placeholder=""
            type="text"
            value={formState.marcaVeiculo}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="modeloVeiculo">
          Modelo do Veículo:
          <input
            id="modeloVeiculo"
            name="modeloVeiculo"
            placeholder=""
            type="text"
            value={formState.modeloVeiculo}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="anoFabricacaoVeiculo">
          Ano de Fabricação do Veículo:
          <input
            id="anoFabricacaoVeiculo"
            name="anoFabricacaoVeiculo"
            placeholder=""
            type="text"
            value={formState.anoFabricacaoVeiculo}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="placaVeiculo">
          Placa do Veículo:
          <input
            id="placaVeiculo"
            name="placaVeiculo"
            placeholder=""
            type="text"
            value={formState.placaVeiculo}
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

export default PassoTres;

