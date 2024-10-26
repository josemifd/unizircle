import "../CSS/Menu.css"
import NavBar from "../components/NavBar";
import MuebleNew from "../components/MuebleNew";
import lista from "../lista/lista";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const Menu = () => {
    const [search, setSearch] = useState("")
    const [filteredList, setFilteredList] = useState(lista)

    useEffect(() => {
        if (search != "") {
            const newList = lista.filter(item => {
                const searchTerm = search.toLowerCase();
                return (
                    item.title.toLowerCase().includes(searchTerm) ||
                    item.facultad.toLowerCase().includes(searchTerm) ||
                    item.departamento.toLowerCase().includes(searchTerm)
                );
            });

            setFilteredList(newList);
        } else {
            setFilteredList(lista)
        }
    }, [search])

    return (
        <div className="home">
            <NavBar page={"menu"} />
            <Input
              classNames={{
                base: "max-w-full h-10 mt-[2vh]",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<CiSearch />}
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex justify-center">
                <div className="muebles mt-5 mb-[5vh]">
                    {filteredList.map((mueble, index) => (
                        <div key={index}>
                            <MuebleNew mueble={mueble} idx={mueble.id}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu