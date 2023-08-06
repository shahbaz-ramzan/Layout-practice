import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Dropdown from "../Dropdown";
import Portfolio from "../Portfolio";
import Services from "../Services";

const routes=[
    {
        path:"/home",
        name:"Home",
        component:Home,

    },
    {
        path:"/about",
        name:"About",
        component:About
    },
    {
        path:"/contact",
        name:"Contact",
        component:Contact
    },
    {
        path:"/dropdown",
        name:"Dropdown",
        component:Dropdown
    },
    {
        path:"/portfolio",
        name:"Portfolio",
        component:Portfolio
    },
    {
        path:"/services",
        name:"Services",
        component:Services
    }
]