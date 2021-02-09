import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import axios from 'axios';
// import '../../index.css';
// import ProductService from '../service/ProductService';
// import './index.js.css';


// function Tabela () {
    
    class Tabela extends React.Component {
        
        listarAtividades() {
            axios.get('http://localhost:8080/atividade').then(function (response){
                console.log(response);
             })
        }

        constructor(props) {
            super(props);
        }

    items = [ 
        {
            label: 'Nova Atividade',
            icon: 'pi pi-fw pi-plus',
            command: () => {window.location = "/cadastro-atividade"},
        },
        {
            label:'Cadastrar Cabeçalho',
            icon:'pi pi-fw pi-plus',
            command: () => {window.location = "/cadastro-cabecalho"},
        },
        {
            
            // label:'Gerenciar Cabeçalho',
            // icon:'pi pi-cog',
        } 
    ];

    // start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://w7.pngwing.com/pngs/923/37/png-transparent-child-happiness-cartoon-happy-kids-comics-food-hand.png'} height="40" className="p-mr-2"></img>;
    //  end = <InputText placeholder="Search" type="text" />;
    
    DataViewDemo = () => {

        const [products, setProducts] = useState(null);
        const [layout, setLayout] = useState('grid');
        const [sortKey, setSortKey] = useState(null);
        const [sortOrder, setSortOrder] = useState(null);
        const [sortField, setSortField] = useState(null);
        const sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
        ];
        
        // const productService = new ProductService();

        // useEffect(() => {
            // productService.getProducts().then(data => setProducts(data));
        // }, []);
        
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
                        <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-list-detail">
                            <div className="product-name">{data.name}</div>
                            <div className="product-description">{data.description}</div>
                            <Rating value={data.rating} readOnly cancel={false}></Rating>
                            <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                        </div>
                        <div className="product-list-action">
                            <span className="product-price">${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
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
                                <span className="product-category">{data.category}</span>
                            </div>
                            <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                        </div>
                        <div className="product-grid-item-content">
                        <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                            <div className="product-name">{data.name}</div>
                            <div className="product-description">{data.description}</div>
                            <Rating value={data.rating} readOnly cancel={false}></Rating>
                        </div>
                        <div className="product-grid-item-bottom">
                            <span className="product-price">${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
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
                    {/* <div className="card">
                        <Menubar model={items} start={start} end={end} />
                    </div> */}
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
        
        render() {
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

        
        // const rootElement = document.getElementById("root");
        // ReactDOM.render(<DataViewDemo />, rootElement);
        // return null;
        // }
        
        // export default Tabela;
    }
    
}
    ReactDOM.render(
        <Tabela />,
    document.getElementById('root')
);

export default Tabela;