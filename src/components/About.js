import React from 'react'

import { Box, Container, Grid, styled, Typography, } from '@mui/material'
import data from "../data/SkillsData.js"

const StyledContainer = styled(Container)(({theme}) => ({
    height: "100vh",
    minWidth:"75%",
    backgroundColor:`rgba(34,51,51, 0.8)`,
  }))
  const StyledBox = styled(Box)(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap: "20px",
    marginLeft: "10vw",
    marginRight: "10vw"
  }))
  
  const StyledGrid = styled(Grid)(({theme}) => ({
      marginTop: "3vh",
  }))

const About = () =>{
    return (
        <StyledContainer fixed>
            <StyledBox>
            
                <Typography sx={{marginTop:"8vh", fontWeight:"bold" , color: "#EFEFEF"}} variant='h4'>Who I am</Typography>
                <Typography variant='h5' color="#F06A27">Frontend Developer set in Rijeka, Croatia</Typography>
                <Typography variant='body1' align='center'>Having a particular interest in creating apps, I have decided to go with Front-end develepment and learn
                    Javascript and React. Currently studying on faculty of informatics and digital technologies so already having a good foundation in programming and logic,
                    makes it easier for me to learn new technologies and programming languages.
                    Being hardworking and result oriented, I always work towards achieving best result on each project I lay my hands on.  
                </Typography>
            </StyledBox>

          
            <StyledBox>
              <Typography variant="h4" sx={{
                marginTop:"50px",
                color: "#F06A27",
                letterSpacing: "0.001px"
              }}>Languages and tools</Typography>
            <StyledGrid container justifyContent="center" > 
              {data.map((item, i) => (
                <Grid key={i} item>
                <Box component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:"center",
                    justifyContent:"center",
                    gap: "10px",
                    color:"#EFEFEF",
                    fontWeight:"bold",
                    marginLeft:"25px",
                    marginRight:"25px"
                  }}
                  >
                  <Box component="img"
                        sx={{
                          height: 50,
                          width: 50,
                        }}
                        src={item.img}
                  ></Box>
                  <Box component="span">{item.description}
                  </Box>
                </Box>
                </Grid>
                ))}
            </StyledGrid>
        </StyledBox>
        <StyledBox>
        <Typography variant="h4" sx={{
                marginTop:"50px",
                color: "#F06A27",
                letterSpacing: "0.001px"
              }}>Interests and hobbies</Typography>
              <Typography variant='body1' align='center'> Gamer. Car enthusiast. Music lover. Food expert. Beer geek. Travelling.  
                </Typography>
        </StyledBox>
        </StyledContainer>
        
        
    )
}

export default About