import React from 'react';
import { color, font } from '../constants';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import aboutImg from '../images/service.jpg';

const useStyles = makeStyles({
  buttonAbout:{
    alignSelf: "flex-start",
    marginTop: "1rem",
    //justifySelf: "flex-end",
    //marginTop: "auto",
    //marginBottom: "2rem",
  }
})

const AboutCont = styled.div`
  background-color: ${color.dark};
  height: 100vh;
`

const InfoCont = styled.div`
  background-color: trasparent;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TitleCont = styled.h2`
  font-family: ${font.normal};
  margin: 0;
`

const TitleLight = styled.span`
  color: ${color.light};
  font-size: 1rem;
`
const TitleBold = styled(TitleLight)`
  font-family: ${font.title};
`

const AboutInfo = styled.p`
  color: ${color.light};
  font-size: 12px;
  text-align: justify;
`
const AboutImg = styled.div`
  height: 50%;
  background-color: ${color.prim};
  background-image: url(${aboutImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export default ()=> {
  const classes = useStyles();
  return(
    <AboutCont id="about">
      <Container style={{ height: "50%" }}>
        <InfoCont>
          <TitleCont>
            <TitleLight>Que es </TitleLight>
            <TitleBold>Spicy?</TitleBold>
          </TitleCont>
          <AboutInfo>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam, vitae explicabo odio nobis illum consectetur! Dignissimos vitae. consectetur adipisicing elit. Expedita numquam, vitae explicabo odio nobis illum consectetur! Dignissimos vitae.
          </AboutInfo>
          <Button color="primary" size="small" variant="contained" className={classes.buttonAbout}>Saber mas</Button>
        </InfoCont>
      </Container>
      <AboutImg />
    </AboutCont>
  )
}
