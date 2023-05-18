import './style.css'; 
function Home(props){
    return(
        <div>
            <h1  className="titulo-home">Pagina Home</h1>
            <span className="texti">{props.texto}</span>
            <br/>
            
        </div>
    );
}
export default Home;