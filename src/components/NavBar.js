import React from "react";
import Logo from '../components/Logo'

const navBar = {
    "classname": "navBar",
    "logo": "pictures/Logo.svg",
    "link1": "UI Design",
    "link2":"Front-end",
    "link3": "Back-end",
    "dropdownMenu": "Lainnya",
    "placeholder": "Search",
    "inputType": "search"
};
 
function NavBar(props){
    return(
        <section className={navBar.classname}>
            <Logo logo={navBar.logo}></Logo>
        </section>
    );
    
}

export default NavBar;