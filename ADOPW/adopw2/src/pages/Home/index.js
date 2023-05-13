import {Link} from 'react-router-dom';
function Home(props){
    return(
        <div>
            <h1>Pagina Home</h1>
            <span>{props.texto}</span>
            <br/>
            
        </div>
    );
}
export default Home;