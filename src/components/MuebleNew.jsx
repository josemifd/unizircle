import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import constants from "../constants/constants";
import '../CSS/MuebleNew.css'

const MuebleNew = ({ mueble, idx }) => {
  const navigate = useNavigate()

  return (
    <a 
      className="mueble-new" 
      onClick={() => navigate(constants.root + "reciclar/" + idx)}>
    <Card className="py-4 bg-background mb-5" >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-secondary">
        <p className="text-tiny uppercase font-bold">{mueble.facultad}</p>
        <small className="text-default-500">{mueble.departamento}</small>
        <h4 className="font-bold text-large">{mueble.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={mueble.img}
          height={200}
          width={270}
        />
      </CardBody>
    </Card>
    </a>
  );
}

export default MuebleNew