/** @format */

import React,{useState} from "react";
import { Button, Switch,useTheme } from "@nextui-org/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { VscMail } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BsDiagram3,BsMoonStars } from "react-icons/bs";

export default function LayoutPrincipal({ children }) {
    const [botonActivate, setBotonActivate] = useState(false)
  return (
    <>
      <div
        className='sidebar'
        class={botonActivate ? "sidebar active" : "sidebar"}>
        <div class='logo_content'>
          <div class='logo'>
            <i class='bx bxs-heart'></i>
            <div class='logo_name'>Div Geeks</div>
          </div>
          <Button size='xs' class='bx bx-menu' id='btn' onPress={()=>(setBotonActivate(!botonActivate))}>
            <FiMenu></FiMenu>
          </Button>
        </div>
        <ul class='nav'>
          <li>
            <a href='/'>
              <i class='bx bx-bar-chart-square'>
                <AiOutlineHome></AiOutlineHome>
              </i>
              <span class='link_name'>Home</span>
            </a>
            <span class='tooltip'>Home</span>
          </li>
          <li>
            <a href='/contacto/contacto'>
              <i class='bx bx-line-chart'>
                <VscMail></VscMail>
              </i>
              <span class='link_name'>Contact</span>
            </a>
            <span class='tooltip'>Contact</span>
          </li>
          <li>
            <a href='#'>
              <i class='bx bx-calendar-event'>
                <FaUsers />
              </i>
              <span class='link_name'>About</span>
            </a>
            <span class='tooltip'>About</span>
          </li>
          <li>
            <a href='#'>
              <i class='bx bxs-heart-circle'>
                <MdWorkOutline></MdWorkOutline>
              </i>
              <span class='link_name'>Projects</span>
            </a>
            <span class='tooltip'>Projects</span>
          </li>
          <li>
            <a href='#'>
              <i class='bx bxs-pie-chart-alt'>
                <BsDiagram3></BsDiagram3>
              </i>
              <span class='link_name'>Skills </span>
            </a>
            <span class='tooltip'>Skills</span>
          </li>
          <li>
            <a>
              <i class='bx bxs-pie-chart-alt'>
                <BsMoonStars></BsMoonStars>
              </i>
              <span class='link_name'>
                <Switch size='xl' color='primary' checked={true} />{" "}
              </span>
            </a>
            <span class='tooltip'>
              <Switch size='xl' color='primary' checked={true} />
            </span>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
}
