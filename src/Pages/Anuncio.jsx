import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import lista from "../lista/lista"
import '../CSS/Anuncio.css'
import FlechaVolver from "../components/FlechaVolver";

const Reciclar = () => {
    const [item, setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        setItem(
            lista.find(i => id == i.id)
        )
    }, [id])

    if (!item) {
        return (
            <div> Cargando noticia... </div>
        )
    } else {
        console.log(item.img)
        return (
            <div className="reciclar flex flex-col items-center ">
                <FlechaVolver/>
                <h1 className="mt-[5vh]"> {item.title} </h1>
                <p className="opacity-50"> {item.departamento} </p>
                <h3 className="text-[1.5rem] opacity-70"> {item.facultad} </h3>
                <Button size="lg" color="primary" className="mt-[2vh] mb-[2vh]">
                    Contactar
                </Button>
                <div className="img-reciclar flex justify-center items-center">
                  <Image
                    isBlurred
                    alt="Card background"
                    className="rounded-xl"  // Aplicas un 70% de ancho para la imagen
                    src={item.img}
                    height="auto"
                  />
                </div>
            </div>
        );
    }
}

export default Reciclar