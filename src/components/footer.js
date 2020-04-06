import React from 'react';
import { color } from '../constants';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 1rem 0;
  background-color: ${color.sec};
  color: ${color.light};
`
const CopyCont = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.p`
  margin: 0;
  margin-left: .2rem;
`

export default ()=> (
  <Footer>
    <Container maxWidth="md">
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <CopyCont>
            <CopyrightIcon />
            <Text>Copyright - 2020</Text>
          </CopyCont>
        </Grid>
        <Grid item>
          <Text>Created by: Felix tineo</Text>
        </Grid>
      </Grid>
    </Container>
  </Footer>
)
