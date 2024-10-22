import { Button, Input } from "@nextui-org/react"
import FlechaVolver from "../components/FlechaVolver"

const Subir = () => {
    return (
        <div className="reciclar flex flex-col items-center ">
            <FlechaVolver/>
            <h1 className="mt-[5vh]"> Subir anuncio </h1>
            <div className="space-y-5 w-[30vw]">
                <Input type="titulo" label="Título" />
                <Input type="titulo" label="Facultad" />
                <Input type="titulo" label="Departamento" />
                <Input type="titulo" label="Departamento" />

                <div>
                <Input type="titulo" label="Arrastre un fichero o clique aquí para subir uno" />
                <input
                    className="file-upload-input"
                    type="file"
                />
                </div>
            </div>
            <Button size="lg" color="primary" className="mt-[5vh] font-bold">
                    Subir
            </Button>
        </div>
    )
}

export default Subir