import React from 'react';
import { color } from '../constants';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import heroImg from '../images/hero.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';

const UpDown = keyframes`
  to{
    transform: translateY(10px);
  }
`

const ArrowCont = styled.a`
  user-select: none;
  display: block;
  text-decoration: none;
  position: absolute;
  bottom: 5rem;
  animation: ${UpDown} 1s linear alternate infinite;
  color: ${color.light};
  font-size: 2rem;
  &:hover{
    color: ${color.prim};
  }
`

const HeroCont = styled.div`
  background-color: rgba(0, 0, 0, .5);
  background-image: url(${heroImg});
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const MainText = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${color.light};
  font-family: {font.title};

`

const SecondText = styled.p`
  width: 70%;
  font-size: 10px;
  text-align: center;
  color: ${color.light};
  margin-bottom: 2rem;
`

export default ({ router })=> (
  <HeroCont>
    <Container maxWidth="md">
      <Grid container justify="center" alignItems="center" direction="column">
        <MainText>
          Encuentra y ofrece servicios de acompañantes, en tu localidad.
        </MainText>
        <SecondText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam, vitae explicabo odio nobis illum consectetur! Dignissimos vitae.
        </SecondText>
        <Button onClick={()=> router.push('/register')} color="primary" size="small" variant="contained">REGISTRO</Button>
        <ArrowCont href="#about">
          <ArrowDownIcon style={{ fontSize: "2rem" }} />
        </ArrowCont>
      </Grid>
    </Container>
  </HeroCont>
);
