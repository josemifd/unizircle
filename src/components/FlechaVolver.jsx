import { useNavigate } from "react-router-dom";
import "../CSS/FlechaVolver.css"
import {Button, Tooltip} from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa";

const FlechaVolver = () => {
    const navigate = useNavigate()
    return (
        <div className="flecha">
            <Button 
              className="flecha-volver-container"
              onClick={() => navigate(-1)}
              size="lg"
            >
                <FaArrowLeft 
                  className="flecha-volver"
                />
            </Button>
        </div>
    )
}

export default FlechaVolver