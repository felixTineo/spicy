import React from 'react';
import styled from 'styled-components';
import { color } from '../constants';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import { makeStyles } from '@material-ui/core/styles';
import Post from './post';

const posts = [
  {
    id: 'post-1',
    author:{
      name: 'jenna',
      lastName: 'haze',
      perfilImg: require('../images/post2.jpg'),
    },
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam.',
    file: require('../images/post1.jpg'),
    createdAt: '2020-04-06',
    likes: Array(50).fill(0),
    shared: Array(35).fill(0),
  },
  {
    id: 'post-2',
    author:{
      name: 'jhon',
      lastName: 'doe',
      perfilImg: require('../images/post5.jpg'),
    },
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam.',
    file: require('../images/post5.jpg'),
    createdAt: '2020-03-30',
    likes: Array(30).fill(0),
    shared: Array(16).fill(0),
  },
  {
    id: 'post-3',
    author:{
      name: 'rachel',
      lastName: 'star',
      perfilImg: require('../images/post3.jpg'),
    },
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita numquam.',
    file: require('../images/post3.jpg'),
    createdAt: '2020-01-26',
    likes: Array(10).fill(0),
    shared: Array(8).fill(0),
  },
]

const ContentCont = styled.div`
  background-color: ${color.dark};
`
const ContentTitle = styled.p`
  margin: 0;
  padding-top: 1.5rem;
  padding-bottom: .5rem;
  font-weight: 900;
  color: ${color.light};
  text-align: center;
`

export default () => {
  return(
    <ContentCont id="content">
      <Container maxWidth="md">
        <ContentTitle>
          RAKING DE PUBLICASIONES POR Y PARA LOS USUARIOS
        </ContentTitle>
        <Grid container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          {
            posts.map((post) => (
              <Grid key={post.id} item>
                <Post {...post} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </ContentCont>
  )
}
