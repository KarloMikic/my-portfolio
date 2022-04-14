import { Box, Avatar, Grid, Typography, Button} from "@mui/material"
import React from "react"
import  avatar  from "../images/profile1.png"
import { styled } from "@mui/material/styles"



const StyledAvatar = styled(Avatar)(({theme}) => ({
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
    

}));
const StyledBox = styled(Box)(({theme}) => ({
    position: "absolute",
    width:"100vw",
    left:"50%",
    top: "50%",
    WebkitTransform: "translate(-50%,-50%)",
    transform: "translate(-50%, -50%)",
    textAlign:"center",
    zIndex: 1,
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "50px"
   
}));
const Home = () =>{

    
    return(
        <React.Fragment>
            <StyledBox >
               <Grid container justifyContent="center">
                    <StyledAvatar alt="Karlo Mikić" src={avatar}/>
                </Grid>
                <StyledTypography>Karlo Mikić</StyledTypography>
                <StyledTypography>Front-end developer</StyledTypography>
                <Box sx={{display:"flex", justifyContent:"center", gap: "30px", height:"50px"}}>
                    <Button href="https://drive.google.com/file/d/19UOHRcndJ0gz22fB2Rl45IPuUqRw3L6C/view" target="_blank" variant = "contained" color="primary">Download CV</Button>
                    <Button href="https://www.linkedin.com/in/karlo-miki%C4%87-a86234237/" target="_blank" variant = "outlined" color="primary">LinkedIn</Button>
                </Box>
            </StyledBox>
    </React.Fragment>

    )
}

export default Home