import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Button} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";
import constants from "../constants/constants";
import { useEffect, useState } from "react";

const NavBarComponent = ({page}) => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [bold, setBold] = useState("")

  const crear = () => {
    setBold("crear")
    setIsMenuOpen(false)
    navigate(constants.root + "crear")
  }

  const menu = () => {
    setBold("menu")
    setIsMenuOpen(false)
    navigate(constants.root)
  }

  const talleres = () => {
    setBold("talleres")
    setIsMenuOpen(false)
    navigate(constants.root + "talleres")
  }


  useEffect(() => {
    setBold(page)
  }, [page])

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img className="h-[50px]" src="unizircle.png"/>
          <p className="font-bold text-inherit"> UniZircle </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        <img className="h-[50px]" src="unizircle.png"/>
        <p className="font-bold text-inherit"> UniZircle </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={bold == "menu"}>
          <Link 
            onClick={menu}
            className="text-white text-[1.25rem]" aria-current="page">
            Menú
          </Link>
        </NavbarItem>
        <NavbarItem isActive={bold == "crear"}>
          <Link 
            onClick={crear}
            className="text-white text-[1.25rem]" 
            aria-current="page">
            Crear
          </Link>
        </NavbarItem>
        <NavbarItem isActive={bold == "talleres"}>
          <Link 
            onClick={talleres}
            className="text-white text-[1.25rem]" 
            aria-current="page">
            Talleres
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="w-full text-white"
            onClick={menu}
            size="lg"
          >
            Menú            
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white"
            onClick={crear}
            size="lg"
          >
            Crear            
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white"
            onClick={talleres}
            size="lg"
          >
            Talleres            
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBarComponent