import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import NavBar from "../components/NavBar";

const Subir = () => {
    return (
        <div className="reciclar flex flex-col items-center ">
            <NavBar page={"crear"}/>
            <h1 className="mt-[5vh]"> Crear anuncio </h1>
            <div className="space-y-5 sm:w-[30vw] w-[90vw]">
                <Input type="titulo" label="Título" />
                <Input type="titulo" label="Facultad" />
                <Input type="titulo" label="Departamento" />
                <Select 
                  className="text-black"
                  label="Selecciona su estado" >
                    <SelectItem className="text-black">
                      Para usar
                    </SelectItem>
                    <SelectItem className="text-black">
                      Para reparar
                    </SelectItem>

                </Select>

                <div>
                <p className="text-start text-white font-bold mb-[1vh] text-[1.2rem]"> 
                    Subir imagen del anuncio 
                </p>
                <input
                    className="file-upload-input sm:w-[30vw] w-[90vw]"
                    type="file"
                    name="Subir"
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