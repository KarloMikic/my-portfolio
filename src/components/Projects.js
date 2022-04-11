import React from 'react'
import { Box, Card, Grid, CardActions, CardContent,
CardMedia,Button,Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import data from "../data/ProjectsData"

const StyledCard = styled(Card)(({theme}) => ({
  backgroundColor:`rgba(34,51,51, 0.8)`,
    width: 345

}))
const StyledBox = styled(Box)(({theme}) => ({
  
  minHeight: "100vh",
  backgroundColor:`rgba(34,51,51, 0.8)`
}))
const StyledCardMedia = styled(CardMedia)(({theme}) => ({
  maxHeight: "25vh",
  minHeight: "25vh"

}))

const StyledGrid = styled(Grid)(({theme}) => ({
    margin:"40px"

}))
const StyledCardContent = styled(CardContent)(({theme}) =>({
    backgroundColor: theme.palette.secondary.main,
    minHeight:"18vh",
    color: theme.palette.secondary.contrastText
}))
const StyledCardActions = styled(CardActions)(({theme}) =>({
    background: theme.palette.primary.main,
    display:'flex',
    gap: "10px",
    minHeight:"5vh"
    
}))


const Projects = () =>{
    return (
        <StyledBox>
            <Grid container justifyContent="center">
              {data.map((item, i) => (
                
                <StyledGrid item key={i}>
                    <StyledCard>
                        
                          <StyledCardMedia
                            component="img"
                            alt="Project 1"
                            image={item.img}
                          />
                          <StyledCardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {item.title} 
                            </Typography>
                            <Typography variant="body2">
                              {item.description}
                            </Typography>
                          </StyledCardContent>
                          <StyledCardActions>
                            {item.liveURL && <Button variant='contained' color="secondary" href={item.liveURL} target="_blank" size="small">Live demo</Button> }
                            {item.gitURL && <Button variant='contained' color="secondary" href={item.gitURL} target="_blank" size="small">Git Hub<GitHubIcon /></Button>}
                          </StyledCardActions>
                       
                    </StyledCard>
                </StyledGrid>
                 
              ))}
            </Grid>
        </StyledBox>
    )
}

export default Projects