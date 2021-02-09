import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

// import Header from './components/header';
// import Footer from './components/footer';
// import {withRouter} from 'react-router-dom';


function Menu() {

    const items = [ 
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

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://w7.pngwing.com/pngs/923/37/png-transparent-child-happiness-cartoon-happy-kids-comics-food-hand.png'} height="40" className="p-mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div className="p-fluid p-col">

            <div>
                <div className="card">
                    <Menubar model={items} start={start} end={end} />
                </div>
            </div>
        </div>
    );
}
export default Menu;
