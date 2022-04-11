import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'

import Box from '@mui/material/Box'
import { AppBar, Drawer, Typography, List, Avatar, Divider, ListItem,
        ListItemIcon, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { styled } from "@mui/material/styles"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import  avatar  from "../images/profile1.png";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
//import ContactMailIcon from '@mui/icons-material/ContactMail';



const StyledAppBar = styled(AppBar)(({theme}) => ({
icon: {                        
    size:"large",
    edge: "start",
    ariaLabel: "menu", 
},
backgroundColor: theme.palette.secondary.main,
}))
const StyledAvatar = styled(Avatar)(({theme}) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
}))
const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%"
}))



const menuItems = [
    {listIcon: <HomeIcon />, listText: "Home", listPath: "/"},
    {listIcon: <PersonIcon />, listText: "About me", listPath: "About"},
    {listIcon: <AssignmentTurnedInIcon />, listText: "Projects", listPath: "Projects"},
    //tbd => {listIcon: <ContactMailIcon />, listText: "Contact", listPath: "Contact"}
]

const Navbar = () =>{

    const [open, setOpen] = useState(false)
    
    const listDrawer = () => {
       return( 
       <StyledBox >
            <StyledAvatar src={avatar}/>
            <Divider/>
            <List>
                {
                    menuItems.map((item, i) =>
                        (
                            <ListItem
                                button
                                key = {i}
                                onClick = {() => setOpen(false)}
                                component = {Link}
                                to = {item.listPath}
                            >
                                <ListItemIcon>
                                    {item.listIcon}
                                </ListItemIcon>
                                <ListItemText primary={item.listText} />
                            </ListItem>
                        )
                    )
                }
            </List>
        </StyledBox>
       )}

    return(
        <Box component="nav">
            <StyledAppBar position="static">
                <Toolbar open>
                    <Typography variant="h6" component="div">
                        Portfolio
                    </Typography>
                    <IconButton color='primary' onClick={() => setOpen(true)} className = "icon">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </StyledAppBar>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                {listDrawer()}
                <Footer />
            </Drawer>
        </Box>
    )
}

export default Navbar