import { useState } from "react";
import {Button, Card, CardBody, CardHeader, DatePicker, Tooltip} from "@nextui-org/react";
import {parseDate, getLocalTimeZone} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
import { FaRegTrashAlt } from "react-icons/fa";
import NavBar from "../components/NavBar";
import taller from "../lista/taller";


const Talleres = () => {
    const [value, setValue] = useState(null);

    let formatter = useDateFormatter({dateStyle: "full"});
    
    const equalDates = (date) => {
        if (!value || !date) return false;
    
        // Extrae año, mes y día de "value" y convierte a formato "YYYY-MM-DD"
        const formattedValue = `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}`;
        console.log(formattedValue)
        // Compara la fecha formateada con "dateStr"
        return formattedValue == date;
    }

    return (
        <div className="home">
            <NavBar page={"talleres"}/>
            <div className="flex flex-row items-center gap-2 mt-[2vh]">
                <div className="w-full flex flex-col gap-y-2">
                    <p> Búsqueda por fecha </p>
                    <DatePicker 
                      className="max-w-[284px]" 
                      label="Fecha" 
                      value={value} 
                      onChange={setValue} />
                        <p className="text-default-500 text-sm">
                            Selected date: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
                        </p>
                </div>
                <div className="ml-[3vw]">
                    <Tooltip className="text-black" content="Eliminar fecha">
                        <Button 
                          className="text-red-500 text-[1.25rem]" 
                          color="primary"
                          onClick={() => setValue(null)}
                        >
                            <FaRegTrashAlt />
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="mt-[5vh] mb-[5vh] space-y-[20px] w-[50vw]">
                {taller.map((t, idx) => (
                    <>
                    {(!value || equalDates(t.date)) && (                        <div key={idx}>
                        <Card className="flex py-4 bg-background">
                            <CardHeader className="flex-col pb-0 pt-2 px-4 items-start text-secondary">
                                <h4 className="font-bold text-large">{t.title}</h4>
                                <p className="text-sm text-default-500"> {t.date} </p>
                                <p className="text-tiny uppercase font-bold">{t.lugar}</p>
                            </CardHeader>
                            <CardBody className="flex">
                                <div className="flex justify-center space-x-[5px]">
                                    {t.type == "repair" && (
                                        <Button className="w-1/2" color="primary">
                                            Reparar
                                        </Button>
                                    )}
                                    <Button className="w-1/2" color="primary">
                                        Participar
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Talleres