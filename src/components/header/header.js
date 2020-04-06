import React from 'react';
import styled from 'styled-components';
import { color, font } from '../../constants';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useScroll } from '../../hooks';

const Header = styled.header`
  background-color: ${({ movil, down }) => movil ? color.prim : down ? color.prim : 'transparent'};
  transition: .5s ease;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  color: ${({ movil, down }) => movil ? color.light : down ? color.light : color.phanton};
`
const Logo = styled.a`
  display: inline-block;
  padding: .5rem 0;
  font-family: ${font.title};
  text-decoration: none;
  font-size: 1.2rem;
  user-select: none;
  cursor: pointer;
  &:visited{
    color: ${color.light};
  }
  &:hover{
    color: ${color.light};
  }
`
const MenuButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: .2rem;
  cursor: pointer;
  color: ${color.light};
  transition: .5s ease;
  &:hover{
    background: ${color.light};
    color: ${color.prim};
  }
`

export default ({ onDrawer })=> {
  const theme = useTheme();
  const isMovil = useMediaQuery(theme.breakpoints.down('sm'));
  const scroll = useScroll();
  return(
    <Header movil={isMovil} down={scroll}>
      <Container maxWidth="md">
        <Grid container
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Logo>Spicy</Logo>
          </Grid>
          <Grid item>
            <Hidden smUp>
              <MenuButton onClick={onDrawer} movil={isMovil} down={scroll}>
                <MenuIcon />
              </MenuButton>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Header>
  )
}
