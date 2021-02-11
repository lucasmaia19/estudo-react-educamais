import axios from "axios";

export default class CadastroAtividadeService {

    PostCadastroAtividade(formData) {
        axios.post('http://localhost:8080/atividade/upload-com-dados', formData)
		.then((response) => {
			console.log(response)
	    })
    }

    // consultarListaFaixaEtaria() {
    //     axios.get('http://localhost:8080/atividade/faixa-etaria')
	// 	.then((response) => {
    //         const faixaEtariaList = response.data
    //         console.log(faixaEtariaList)
    //         return faixaEtariaList
    //     })
    // }
}