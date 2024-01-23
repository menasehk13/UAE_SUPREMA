import React,{useState,useEffect} from "react";
import { NavBarData } from "../../utils/data";
import { Link } from "react-router-dom";

import './styles/Nav.scss'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, []);


  return (
    <nav className={`nav-container flex justify-between fixed w-full h-[50px] items-center ${scrolled ? 'bg-white text-black shadow-sm shadow-gray-200' : 'bg-transparent text-white '}`}>
      <h1 className="text-3xl uppercase font-[500]">SUPREMA</h1>

      <ul className="flex items-center gap-3">
        {NavBarData.map((items, key) => (
          <li className="cursor-pointer " key={key}>
            <Link to={items.link}>{items.title}</Link>
          </li>
        ))}
      </ul>

      <button className="cursor-pointer uppercase rounded-xl  "> contact us</button>
    </nav>
  );
};

export default Navbar;
