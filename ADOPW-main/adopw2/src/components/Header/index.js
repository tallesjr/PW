import { Link } from "react-router-dom";
import './style.css'; 
function Header(){
    return(
        <header>
                <h1>Nissan</h1>


                <div>
                    <Link to="/">Home</Link>
                    <Link to="/sobre">Sobre Nós</Link>
                    <Link to="/loja">Loja</Link>
                </div>
        </header>

    )
}
export default Header;