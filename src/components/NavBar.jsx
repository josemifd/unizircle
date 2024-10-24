import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import constants from "../constants/constants";
import { useEffect, useState } from "react";

const NavBarComponent = ({page}) => {
  const navigate = useNavigate()

  const [crearBold, setCrearBold] = useState(false)

  const crear = () => {
    setCrearBold(true)
    navigate(constants.root + "crear")
  }

  const menu = () => {
    setCrearBold(false)
    navigate(constants.root + "menu")
  }

  useEffect(() => {
    if (page == "menu") setCrearBold(false)
    else if (page == "crear") setCrearBold(true)
  }, [page])

  return (
    <Navbar>
      <NavbarBrand>
        <img className="h-[50px]" src="unizircle.png"/>
        <p className="font-bold text-inherit"> UniZircle </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={!crearBold}>
          <Link 
            onClick={menu}
            className="text-white text-[1.25rem]" aria-current="page">
            Menú
          </Link>
        </NavbarItem>
        <NavbarItem isActive={crearBold}>
          <Link 
            onClick={crear}
            className="text-white text-[1.25rem]" 
            aria current="page">
            Crear
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

export default NavBarComponent