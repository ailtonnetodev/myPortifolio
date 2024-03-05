import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Neto from "../../../../assets/images/neto.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const Styledimg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: "2px solid #b2a429"
    }))

    return (

      <>
        <StyledHero>
            <Container maxWidth="lg" >
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Typography color="secondary" variant="h1" textAlign={"center"}>Ailton Neto</Typography>
                    <Typography color="secondary" variant="h2" textAlign={"center"}>I'm a Software Engineer</Typography>
                    <Grid container display="flex" justifyContent="center" spacing={3} pt={1}>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                            <DownloadIcon />
                                <Typography>
                                Download Cv
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                                <MailOutlineIcon />
                                <Typography>
                                Contacte me
                                </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box position="relative">
                        <Box position="absolute" width={"150%"} top={-100} right={0}>
                            <AnimatedBackground></AnimatedBackground>
                        </Box>
                        <Box position="relative" textAlign="center">
                            <Styledimg src={Neto} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero