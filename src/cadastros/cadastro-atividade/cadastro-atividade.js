import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import {Button} from 'primereact/button';

import axios from "axios";

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import CadastroAtividadeService from '../../service/cadastro-atividade-service';

const InitialValue = {
  nome: '',
  enunciado: '',
  faixaEtaria: '',
  campoExperiencia: '',
  objetivosAprendizagem: '',
  arquivo: ''
}

//   const MultSelecFe = {
//   nome: '',
//   code: ''
// }

const apiUploadUrl = 'http://localhost:8080/atividade/upload-com-dados';

const CadastroAtividade = () => {

  const [values, setValues] = useState(InitialValue);
  // const history = useHistory();

  // Eventos...

  function onChange(evento) {
    const { name, value } = evento.target;

    setValues({ ...values, [name]: value })
  }

  const onUploadSelect = (evento) => {
    const name = 'arquivo';
    const value = evento.files[0];

    setValues({ ...values, [name]: value })
  }

  const onRemove = (evento) => {
    const name = 'arquivo';
    const value = '';

    setValues({ ...values, [name]: value })
  }

  // const faixaEtariaList = new Array<MultSelecFe>();

  const faixaEtariaList = [{}];

  const cadastroService = new CadastroAtividadeService();

  axios.get('http://localhost:8080/atividade/faixa-etaria')
		.then((response) => {
      for (var item of response) {
          const dropDownItem = { name: '[' + item.codigo + '] ' + item.descricao, code: item.id }
          faixaEtariaList.push(dropDownItem);
          console.log('faixaEtariaList', faixaEtariaList)
        }
        // const faixaEtaria = response.data
        // console.log('faixaEtaria', faixaEtaria)
        // faixaEtaria.push(faixaEtariaList)
        // // faixaEtariaList = faixaEtaria
        // console.log('faixaEtariaList', faixaEtariaList)
        // return faixaEtariaList
      })

  // Função de uploaud

  function onSubmit(evento) {
    evento.preventDefault();

    const formData = new FormData();

    const dados = values;
    Object.keys(dados).forEach(k => {
      formData.append(k, dados[k]);
    });
    cadastroService.PostCadastroAtividade(formData)
  }

  // Opções dropdown
  const [selectedCities2, setSelectedCities2] = useState(0);
  const cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  return (

   <form onSubmit={onSubmit}> 
      <div className="p-fluid p-col">

        <h3>Cadastro Atividade</h3>

        <h5>Nome</h5>
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-6">
                <InputText id="firstname2" type="text" name="nome" onChange={onChange}/>
            </div>
        </div>

        <h5>Enunciado</h5>
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-6">
                <InputTextarea id="address" type="text" rows="4" name="enunciado" onChange={onChange}/>
            </div>
        </div>

        <h5>Faixa Etaria</h5>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <MultiSelect  options={faixaEtariaList} onChange={(e) => 
            setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip"
            name="faixaEtaria"
            />
          </div>
        </div>

        <h5>Campo Experiência</h5>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <MultiSelect value={selectedCities2} options={cities} onChange={(e) => 
            setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip"
            name="campoExperiencia"
            />
          </div>
        </div>

        <h5>Objetivos de aprendizagem e desenvolvimento</h5>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <MultiSelect value={selectedCities2} options={cities} onChange={(e) => 
            setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip"
            name="objetivosAprendizagem"
            />
          </div>
        </div>

        <h5>Anexar Imagem</h5>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <FileUpload name="arquivo" onSelect={onUploadSelect} onClear={onRemove} url={apiUploadUrl} />
          </div>
        </div>

        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <Button type="submit" label="Salvar"/>
          </div>
        </div>
    </div>
  </form>

  );
}

export default CadastroAtividade;
