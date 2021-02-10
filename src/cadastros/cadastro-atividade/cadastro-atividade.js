import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import {Button} from 'primereact/button';

import axios from "axios";

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const InitialValue = {
  nome: '',
  enunciado: '',
  faixaEtaria: '',
  campoExperiencia: '',
  objetivosAprendizagem: '',
  arquivo: ''
}

function CadastroAtividade() {
  // const formData = new FormData() = useState(InitialValue)
  // const [formData, setValues] = useState(InitialValue);
  const [values, setValues] = useState(InitialValue);
  const history = useHistory();
  
  function onChange(evento) {
    const { name, value } = evento.target;
    // console.log(values)

    setValues({ ...values, [name]: value })
  }
  
  function onSubmit(evento) {
    
    evento.preventDefault();

    // const formData = new FormData();

    // const dados = this.values;
    // Object.keys(dados).forEach(k => {
    //   formData.append(k, dados[k]);
    // });

    // console.log(formData)

    // const arquivo = this.arquivo._files[0];
    // if(arquivo !== undefined) {
    //   formData.append('arquivo', arquivo);

    // }

    // console.log('formData', values)

    // axios.post('http://localhost:8080/atividade/upload-com-dados', formData)
    // // axios.post('http://localhost:8080/atividade/upload-com-dados', values)
    //   .then((response) => {
    //     console.log(response)
    //     history.push('/cadastro-atividade')
    //   })

    const formData = new FormData();
    formData.append('nome', values.nome);

	axios.post('http://localhost:8080/atividade/upload-com-dados', formData)
		.then((response) => {
			console.log(response)
			history.push('/cadastro-atividade')
	})

  }

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
                <InputTextarea id="address" type="text" rows="4" name="enunciado"onChange={onChange}/>
            </div>
        </div>
      
        <h5>Faixa Etaria</h5>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <MultiSelect value={selectedCities2} options={cities} onChange={(e) => 
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
            <FileUpload name="arquivo" url="http://localhost:8080/atividade/upload-com-dados" />
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
