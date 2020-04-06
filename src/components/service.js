import React from 'react';
import { color } from '../constants';
import styled from 'styled-components';
import MapIcon from '@material-ui/icons/Place';
import SecureIcon from '@material-ui/icons/Lock';
import DollarIcon from '@material-ui/icons/AttachMoney';
import AnonymousIcon from '@material-ui/icons/HelpOutline';

const services = [
  {
    icon: ()=> <AnonymousIcon style={{ color: color.light, fontSize: "4rem" }} />,
    title: 'Anonimo',
    text: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet.',
  },
  {
    icon: ()=> <SecureIcon style={{ color: color.light, fontSize: "4rem" }} />,
    title: 'Seguro',
    text: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet.',
  },
  {
    icon: ()=> <MapIcon style={{ color: color.light, fontSize: "4rem" }} />,
    title: 'Local',
    text: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet.',
  },
  {
    icon: ()=> <DollarIcon style={{ color: color.light, fontSize: "4rem" }} />,
    title: 'Rentable',
    text: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet.',
  },
]

const ServiceCardCont = styled.div`
  display: flex;
  flex-direction: column;
`

const ServiceCard = styled.div`
  background-color: ${({ color }) => color};
  height: 25%;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
`

const ServiceCardItem = styled.div`
  padding: 2rem .5rem;
  text-align: center;
`

const ServiceTitle = styled.p`
  margin: 0;
  font-weight: 900;
  color: ${color.light};
  text-align: left;
`
const ServiceInfo = styled.p`
  margin: 0;
  color: ${color.light};
  text-align: justify;
`
const ServiceImg = styled.div`
  height: 60vh;
  background-color: ${color.prim};
  background-image: url(${require('../images/extra.jpg')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //background-blend-mode: multiply;
`
const ServiceFooter = styled.div`
  height: 15vh;
  background-color: ${color.prim};
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterTitle = styled(ServiceTitle)`
  text-align: center;
`

export default ()=> {
  return(
    <div id="service">
    <ServiceCardCont>
      {
        services.map((service, index) => (
          <ServiceCard key={service.title} color={index % 2 === 0 ? color.sec : color.prim}>
            <ServiceCardItem>
              {service.icon()}
            </ServiceCardItem>
            <ServiceCardItem>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceInfo>{service.text}</ServiceInfo>
            </ServiceCardItem>
          </ServiceCard>
        ))
      }
      <ServiceImg />
      <ServiceFooter>
        <FooterTitle>
          'Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet.'
        </FooterTitle>
      </ServiceFooter>
    </ServiceCardCont>
  </div>
)};
