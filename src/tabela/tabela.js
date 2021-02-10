// import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { Dropdown } from 'primereact/dropdown';
// import { Button } from 'primereact/button';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import { Rating } from 'primereact/rating';
// import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';

import axios from 'axios';
// import '../../index.css';
// import ProductService from '../service/ProductService';
// import './index.js.css';

// listarAtividades() {
//     axios.get('http://localhost:8080/atividade').then(function (response){
//         console.log(response);
//      })
// }

const Tabela = () => {

    const [products, setProducts] = useState([]);
    // const productService = new ProductService();

    useEffect(() => {
        // setProducts([]);
        axios.get('http://localhost:8080/atividade').then(response => {
            console.log('response', response);
            
            console.log('response.data', response.data);
            setProducts(response.data)

            console.log('products', products)
        });
        // productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products}>
                    <Column field="nome" header="Nome"></Column>
                    <Column field="arquivoTamanho" header="Tamanho"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Tabela />, rootElement);

export default Tabela;
