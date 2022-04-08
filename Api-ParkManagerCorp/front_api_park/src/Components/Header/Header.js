


//import useState hook to create menu collapse state
import React, { useState } from "react";

// importation des composants de la barre latérale de react pro
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//importation d'icônes depuis react icons

import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiLogIn, FiThumbsUp, FiEye, FiBookmark } from "react-icons/fi";



//importation de la css de la barre latérale permettant la navigation
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  
     // Creation l'état initial de menuCollapse en utilisant le crochet useState
    const [menuCollapse, setMenuCollapse] = useState(false)

    //Créer une fonction personnalisée qui changera l'état de menucollapse de false à true et de true à false.
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          
           {/* Changement de la la taille du menu en utilisant l'état menucollapse  */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* Changement de la taille du logo avec le menuCollapse */}
              <p>{menuCollapse ? "P.M.C" : "Park Manager Corp"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* Changement de l'icône de réduction du menu en cas de clic */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Accueil
              </MenuItem>
               <Link to="/">
              <MenuItem icon={<FiLogIn />}>Compte</MenuItem>
              </Link>
              <Link to="/Home">
              <MenuItem icon={<FiBookmark />}>Réservation</MenuItem>
              </Link>
             
              <Link to="/SignUp">
              <MenuItem icon={<FiThumbsUp />}>Places libres</MenuItem>
              </Link>
              <Link to="/">
              <MenuItem icon={<FiEye />}>Voir le parking</MenuItem>
              </Link>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Déconnexion</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;