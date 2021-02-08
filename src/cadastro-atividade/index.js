import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import {Button} from 'primereact/button';

// import React, { useRef } from 'react';
import React, { useState, useRef } from 'react';


function CadastroAtividade() {

  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
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

  <div className="p-fluid p-col">

    <h2>Cadastro de Atividade</h2>

      <h5>Nome</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Enunciado</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputTextarea id="address" type="text" rows="4" />
          </div>
      </div>
    
      <h5>Faixa Etaria</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          <MultiSelect value={selectedCities2} options={cities} onChange={(e) => 
           setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
        </div>
      </div>

      <h5>Campo Experiência</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          <MultiSelect value={selectedCities2} options={cities} onChange={(e) => 
           setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
        </div>
      </div>

      <h5>Objetivos de aprendizagem e desenvolvimento</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          <MultiSelect value={selectedCities2} options={cities} onChange={(e) => 
           setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
        </div>
      </div>

      <h5>Anexar Imagem</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
            emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />
        </div>
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
            <Button type="button" label="Salvar"/>
        </div>
      </div>
  </div>

  );
}

export default CadastroAtividade;
