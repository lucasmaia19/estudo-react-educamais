import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

// import React, { useRef } from 'react';
import React, { useRef } from 'react';


function CadastroCabecalho() {

  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }

  return (

  <div className="p-fluid p-col">

    <h2>Cadastro do Cabecalho</h2>

      <h5>Professora</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Aluno</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>
    
      <h5>Data</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
              <Calendar id="icon" showIcon />
        </div> 
      </div>

      <h5>Turma</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Logo da Prefeitura</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
            emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />
        </div>
      </div>

      <h5>Logo da Escola</h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
          showUploadButton="false" chooseLabel="Adicionar" cancelLabel="Cancelar"
            // emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} 
            />
        </div>
      </div>

      <h4>Dados da Escola</h4>

      <h5>Nome da Escola</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Logradouro</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Tel</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Cep</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
          </div>
      </div>

      <h5>Email</h5>
      <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
              <InputText id="firstname2" type="text"/>
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

export default CadastroCabecalho;
