import './style.css'; 
import modulo from './imagem/modulo.jpg';
function Loja(){
    return(

        <div>
        <h1 class="titulo-loja">Loja</h1>
            <div className="divimagens">
            <img src={modulo} alt='Modulo Da Nissan'/>
            <p>Modulo Nissan</p>
            <p>R$ 1.600,00</p>
            </div>
        </div>
        
        

    );
}
export default Loja;