import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NProgress from 'nprogress';
import './styles/nprogress.css';
import Header from './components/header/header';
import Drawer from '@material-ui/core/Drawer';
import DrawerMenu from './components/drawerMenu';

const Loader = () => {
  useEffect(()=> {
    NProgress.start();
    return ()=> NProgress.done();
  },[]);
  return <p />
}

const Home = lazy(()=> import('./pages/home'));

function App() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      <Header onDrawer={()=> setDrawer(true)}/>
      <div>
        <Drawer anchor="right" open={drawer} onClose={()=> setDrawer(false)}>
          <DrawerMenu onClose={()=>setDrawer(false)} />
        </Drawer>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/spicy" component={Home} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
