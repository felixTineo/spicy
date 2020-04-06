import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Service from '../components/service';
import Content from '../components/content';
import Contact from '../components/contact';
import Legal from '../components/legal';
import Footer from '../components/footer';

export default ({ history })=> {

  return(
    <React.Fragment>
      <Hero router={history} />
      <About />
      <Service />
      <Content />
      <Contact />
      <Legal />
      <Footer />
    </React.Fragment>
  )
}
