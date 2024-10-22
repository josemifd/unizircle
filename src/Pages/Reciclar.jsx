import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import lista from "../lista/lista"
import '../CSS/Reciclar.css'

const Reciclar = () => {
    const [item, setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        setItem(
            lista.find(i => id == i.id)
        )
    }, [id])

    const [liked, setLiked] = React.useState(false);

    if (!item) {
        return (
            <div> Cargando noticia... </div>
        )
    } else {
        return (
            <div className="reciclar flex flex-col items-center">
                <h1 className="mt-[5vh]"> {item.title} </h1>
                <p className="opacity-50"> {item.departamento} </p>
                <h3 className="text-[1.5rem] opacity-70"> {item.facultad} </h3>
                <img className="mt-[5vh] rounded-[20px]" src={item.img}/>
                <Button size="lg" color="primary" className="mt-[5vh]">
                    Contactar
                </Button>
            </div>
        );
    }
}

export default Reciclar