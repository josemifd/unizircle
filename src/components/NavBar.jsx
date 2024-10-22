import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import constants from "../constants/constants";

export default function App() {
  const navigate = useNavigate()
  return (
    <Navbar>
      <NavbarBrand>
        <img className="h-[50px]" src="unizircle.png"/>
        <p className="font-bold text-inherit"> UniZircle </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link onClick={() => navigate(constants.root + "subir")}>
          <a className="text-white" color="white" onClick={() => navigate}>
            Subir
          </a>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white" aria-current="page">
            Reciclar
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link className="text-white">
            
          </Link>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}