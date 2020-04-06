import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../constants';
import bkgImg from '../images/extratwice1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
  },
}));

const ContactCont = styled.div`
  //height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  background-image: url(${bkgImg});
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  padding: 1.5rem 0;
`
const ContactTitle = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 900;
  color: ${color.light};
  text-align: left;
  border-bottom: 2px solid ${color.prim};
`
const ContactTitleNoBorder = styled(ContactTitle)`
  border: 0;
  padding: 0;
  margin: 0;
`

const Adress = styled(ContactTitle)`
  font-weight: normal;
  padding-top: 0;
  border: 0;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: .5rem;
`
export default ()=> {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const classes = useStyles();

  return(
    <ContactCont id="contact">
      <Container maxWidth="md">
        <Grid
          container
          className={classes.root}
        >
          <Grid xs={12} item>
            <ContactTitle>PUEDES CONTACTARNOS POR LOS SIGUIENTES MEDIOS</ContactTitle>
            <Adress>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam.
            </Adress>
          </Grid>
          <Grid xs={12} item>
            <ContactForm>
              <ContactTitleNoBorder>CORREO</ContactTitleNoBorder>
              <ContactTitle>ELECTRONICO</ContactTitle>
              <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Ingresa tu correo"
                variant="filled"
                style={{ background: color.prim, color: color.light, marginBottom: "1rem" }}
              />
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                label="Escribenos tu mensaje"
                variant="filled"
                style={{ background: color.prim, color: color.light, marginBottom: "1rem" }}
                multiline
                rows="4"
              />
              <Button variant="contained" color="primary" style={{ alignSelf: "flex-end", justifySelf: "flex-end", marginTop: "auto" }}>
                Enviar
              </Button>
            </ContactForm>
          </Grid>
        </Grid>
      </Container>
    </ContactCont>
  )
}
