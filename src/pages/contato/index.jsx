import './index.scss'
import { Link } from 'react-router-dom';
export default function Contato() {

    function Alterou() {
        alert("Você alterou o valor do input");
    }

    function Passou() {
        alert("Passou o Mouse sobre:");
    }

    return (
        <div className='contatopage'>

            <div className='fundo'>
                <h1>Formulário</h1>
                <h2>Preencha os campos abaixo</h2>
                <h2>Entendendo eventos</h2>


                <div className='nome'>
                    <p className='passe' onMouseMove={Passou}  >
                        Passe o mouse aqui
                    </p>
                    <input type="text" placeholder="Coloque seu nome..." />
                    <input onChange={Alterou} type="email" placeholder="Coloque seu email..." />
                    <input type="date" placeholder="Coloque sua data de nascimento..." />
                    <select onChange={(e) => console.log(e.target.value)}>
                        <option className='vdd' value="">Selecione sua vaga</option>
                        <option value="opcao1">Estagiário</option>
                        <option value="opcao2">Operador</option>
                        <option value="opcao3">Gerente</option>
                        <option value="opcao4">Diretor</option>
                        <option value="opcao5">Técnico</option>
                    </select>
                    <button className='butão'>Enviar</button>


                </div>

            </div>



        </div>



    )
}