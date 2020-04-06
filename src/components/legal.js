import React from 'react';
import styled from 'styled-components';
import { color } from '../constants';
import client from '../images/seguidor.jpg';
import scort from '../images/acompañante.jpg';
import {
  Container,
  Grid,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';

const LegalCont = styled.div`
  background-color: ${color.dark};
  padding: 1.5rem 0;
`
const useStyles = makeStyles(({ theme }) => ({
  root:{
    flexGrow: 1,
  },
  media: {
    height: 300,
    width: '100%',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
}));

const ArrowButton = styled.div`
  height: 50px;
  width: 50px;
  border: 0;
  background: ${color.prim};
  border-radius: 50%;
  color: ${color.light};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .5rem;
`
const Title = styled.h2`
  color: ${color.light};
  text-transform: uppercase;
  font-size: 1rem;
`
const Info = styled.p`
  color: ${color.light};
  text-align: justify;
`

export default ()=> {
  const classes = useStyles();
  return(
    <LegalCont>
      <Container>
        <Grid
          container
          className={classes.root}
          direction="column"
          spacing={3}
        >
            <Grid item>
              <CardMedia className={classes.media} image={client}>
                <ArrowButton>
                  <IconButton boxShadow={3}>
                    <ArrowIcon />
                  </IconButton>
                </ArrowButton>
              </CardMedia>
              <Title>cliente</Title>
              <Info>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex fuga et adipisci deleniti. Ducimus, quod facilis. Dolore quibusdam nisi, voluptatem nemo dolorum. Quae est, delectus molestiae unde ipsam sit!
              </Info>
            </Grid>
            <Grid item>
              <CardMedia className={classes.media} image={scort}>
                <ArrowButton>
                  <IconButton boxShadow={3}>
                    <ArrowIcon />
                  </IconButton>
                </ArrowButton>
              </CardMedia>
              <Title>scort</Title>
              <Info>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex fuga et adipisci deleniti. Ducimus, quod facilis. Dolore quibusdam nisi, voluptatem nemo dolorum. Quae est, delectus molestiae unde ipsam sit!
              </Info>
            </Grid>
        </Grid>
      </Container>
    </LegalCont>
  )
}
