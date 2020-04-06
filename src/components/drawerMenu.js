import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { color, font } from '../constants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AboutIcon from '@material-ui/icons/Info';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ServiceIcon from '@material-ui/icons/RoomService';
import ContentIcon from '@material-ui/icons/PhotoCamera';
import ContactIcon from '@material-ui/icons/Mail';
import LegalIcon from '@material-ui/icons/AssignmentTurnedIn';
//import LoginIcon from '@material-ui/icons/AccountCircle';
import RegisterIcon from '@material-ui/icons/PersonAdd';

const MenuContainer = styled.div`
  background-color: transparent;
  width: 70vw;
  padding: .2rem;
`

const Title = styled.h2`
  font-family: ${font.title};
  color: ${color.prim};
  margin: 0;
`

const SubTitle = styled.p`
  font-size: 11px;
  color: ${color.prim};
  margin: 0;
`

const SpicyLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:visited{
    text-decoration: none;
    color: #fff;
  }
`
const NoLink = styled.span`
  text-decoration: none;
  color: #fff;
`

const nav = [
  {
    id: "#about",
    name: "Nosotros",
    icon: ()=> <AboutIcon />
  },
  {
    id: "#service",
    name: "Servicios",
    icon: ()=> <ServiceIcon />
  },
  {
    id: "#content",
    name: "Contenido",
    icon: ()=> <ContentIcon />
  },
  {
    id: "#contact",
    name: "Contacto",
    icon: ()=> <ContactIcon />
  },
  {
    id: "#legal",
    name: "Legal",
    icon: ()=> <LegalIcon />
  },
]

export default withRouter(({ onClose })=> {

  return(
    <MenuContainer>
      <List>
        <ListItem>
          <div>
          <Title>
            Spicy
          </Title>
          <SubTitle>
            Encuentra a tu acompañante ideal.
          </SubTitle>
          </div>
          <IconButton onClick={onClose}>
            <ChevronRightIcon style={{ color: color.prim }} />
          </IconButton>
        </ListItem>
        <Divider />
        {
          nav.map(item => (
            <ListItem key={item.id}>
              <ListItemIcon>
                {item.icon()}
              </ListItemIcon>
              <ListItemText>
                <SpicyLink href={item.id}>{item.name}</SpicyLink>
              </ListItemText>
            </ListItem>
          ))
        }
        <Divider />
        <ListItem>
          <ListItemIcon>
            <RegisterIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/register">
              <NoLink>
                Registro
              </NoLink>
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </MenuContainer>
  )
});
