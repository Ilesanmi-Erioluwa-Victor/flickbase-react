import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer  from '@mui/material/Drawer';

import DehazeIcon from "@mui/icons-material/Dehaze"
import MailIcon from "@mui/icons-material/Mail"
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SideNav = () => {

  const [ state,  setState ] = useState(false);

  return (
    <>
    <DehazeIcon className="drawer_btn" onClick = {()=>setState(true)}/>

    <Drawer anchor={"right"} open={state} onClose ={()=> setState(false)}>
             
             <Box sx={{width : 200}}>
                  <Divider />
                  <List>
                    <ListItem 
                    components={Link}
                     to={"/"}
                     onClick = {()=>setState(false)}

                    
                    >
                      <ListItemIcon> <HomeIcon /> </ListItemIcon>
                    </ListItem>
                  </List>
             </Box>
    </Drawer>
    </>
  )
}
