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
    <nav className={`nav-container flex justify-between fixed w-full h-[60px] items-center ${scrolled ? 'bg-white text-black shadow-sm shadow-gray-200' : 'bg-transparent text-white '}`}>
      <h1 className="text-3xl uppercase font-[500]">SUPREMA</h1>

      <ul className=" flex gap-5 justify-center ">
        {NavBarData.map((items, key) => (
          <li className="cursor-pointer  items-center hover:text-primary  uppercase text-[18px]" key={key}>
            <Link className={`flex items-center gap-1 ${items.title==="HUB"?'font-bold':''}`} to={items.link}>{items.icon}{items.title}</Link>
          </li>
        ))}
      </ul>

      <h1 className="font-light text-[16px] cursor-pointer">WHERE TO BUY</h1>

      <button className={` bg-white px-4 py-2 cursor-pointer uppercase rounded-xl  ${scrolled?'bg-black text-white':'bg-white text-black'}`}> contact us</button>
    </nav>
  );
};

export default Navbar;
