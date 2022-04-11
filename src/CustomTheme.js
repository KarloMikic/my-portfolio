import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: "#6C1717",
      contrastText: '#EFEFEF',
    },
    secondary: {
      main: "#242424",
      contrastText: '#EFEFEF',
      
    },
  },
  drawer:{
      primary: {
          main:"purple"
      }
  },
  components:{
    MuiButton:{
      styleOverrides:{
        contained:{
          fontSize: "0.8rem",
          fontWeight: "bold",
        },
        outlined:{
          fontSize: "0.8rem",
          fontWeight: "bold",
          color: "#F6A762",
          borderColor: "#F6A762"
        }
      }
    },
    MuiTypography:{
      styleOverrides:{
        body1:{
          fontSize: "1.25rem",
          color: "#EFEFEF",

        },
        h5:{
          color: "#EFEFEF"
        }
      }
    },
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          color:"#F6A762",
           "&:hover":  {fontSize: "2.1rem", color:"#F06A27"}
        }
      }
    }
  }
  
});

export default theme