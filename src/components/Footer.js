import React from 'react'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from "@mui/material/styles"

const StyledBottomNavigation = styled(BottomNavigation)(({theme}) => ({
        backgroundColor: theme.palette.secondary.main,
    }))

const Footer = () =>{

    
    return (
        <StyledBottomNavigation
            showLabels
        >
  <BottomNavigationAction component="button" href="https://www.linkedin.com/in/karlo-miki%C4%87-a86234237/" target="_blank" rel="noreferrer"  icon={<LinkedInIcon />} />
  <BottomNavigationAction component="button" href="https://www.instagram.com/mikic_karlo/" target="_blank" rel="noreferrer" icon={<InstagramIcon />} />
  <BottomNavigationAction component="button" href="https://github.com/KarloMikic" target="_blank" rel="noreferrer" icon={<GitHubIcon />} />
</StyledBottomNavigation>
    )
}

export default Footer