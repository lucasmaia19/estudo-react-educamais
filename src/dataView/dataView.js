/* eslint-disable jsx-a11y/alt-text */
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import './DataViewDemo.css';
import axios from 'axios';

const TabelaAtividades = () => {

    function converteImagemBase64ParaHtml(imagem) {
        let novaImagem;
        novaImagem = "data:image/jpg;base64," + imagem + "";

        return novaImagem;
    }

    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    useEffect(() => {
        axios.get('http://localhost:8080/atividade').then(response => {
            console.log('response', response);
            
            console.log('response.data', response.data);
            setProducts(response.data)

            console.log('products', products)
        });
    }, []); 

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    {/* <img src={`${data.arquivo}`} onError={(e) => e.target.src=converteImagemBase64ParaHtml(data.arquivo)} alt={data.name} style={{width: 120, height: 150}} /> */}
                    <img src={`${converteImagemBase64ParaHtml(data.arquivo)}`}  style={{width: 120, height: 150}}/>
                    <div className="product-list-detail">
                        <div className="product-name">{data.nome}</div>
                        <div className="product-description">{data.description}</div>
                        {/* <Rating value={data.rating} readOnly cancel={false}></Rating> */}
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.nome}</span>
                    </div>
                    <div className="product-list-action">
                        {/* <span className="product-price">${data.price}</span> */}
                        {/* <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.nome}</span>
                        </div>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                    <div className="product-grid-item-content">
                    {/* <img src={`${data.arquivo}`} onError={(e) => e.target.src=converteImagemBase64ParaHtml(data.arquivo)} alt={data.name} /> */}
                    <img src={`${converteImagemBase64ParaHtml(data.arquivo)}`} />
                        <div className="product-name">{data.enunciado}</div>
                        <div className="product-description">{data.description}</div>
                        {/* <Rating value={data.rating} readOnly cancel={false}></Rating> */}
                    </div>
                    <div className="product-grid-item-bottom">
                        {/* <span className="product-price">${data.price}</span> */}
                        {/* <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products} layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
            </div>
        </div>
    );
}
                
export default TabelaAtividades;