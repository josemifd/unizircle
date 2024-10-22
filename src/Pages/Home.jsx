import "../CSS/Home.css"
import NavBar from "../components/NavBar";
import MuebleNew from "../components/MuebleNew";
import lista from "../lista/lista";

const Home = () => {

    return (
        <div className="home">
            <NavBar/>
            <div className="muebles mt-5">
                {lista.map((mueble, index) => (
                    <div key={index}>
                    <MuebleNew mueble={mueble} idx={mueble.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home