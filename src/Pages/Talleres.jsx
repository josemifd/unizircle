import { useState } from "react";
import {Button, Card, CardBody, CardHeader, DatePicker} from "@nextui-org/react";
import {parseDate, getLocalTimeZone} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
import NavBar from "../components/NavBar";
import taller from "../lista/taller";


const Talleres = () => {
    const [value, setValue] = useState(parseDate("2024-04-04"));

    let formatter = useDateFormatter({dateStyle: "full"});
  
    return (
        <div className="home">
            <NavBar page={"talleres"}/>
            <div className="flex flex-row gap-2 mt-[2vh]">
                <div className="w-full flex flex-col gap-y-2">
                    <DatePicker 
                      className="max-w-[284px]" 
                      label="Fecha" 
                      value={value} 
                      onChange={setValue} />
                        <p className="text-default-500 text-sm">
                            Selected date: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
                        </p>
                </div>
            </div>
            <div className="mt-[5vh] mb-[5vh] space-y-[20px] w-[50vw]">
                {taller.map((t, idx) => (
                    <div key={idx}>
                        <Card className="flex py-4 bg-background">
                            <CardHeader className="flex-col pb-0 pt-2 px-4 items-start text-secondary">
                                <h4 className="font-bold text-large">{t.title}</h4>
                                <p className="text-sm text-default-500"> {t.date} </p>
                                <p className="text-tiny uppercase font-bold">{t.lugar}</p>
                            </CardHeader>
                            <CardBody className="flex">
                                <div className="flex">
                                    <Button color="primary">
                                        Reparar
                                    </Button>
                                    <Button color="primary">
                                        Participar
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Talleres