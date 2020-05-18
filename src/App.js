import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './styles/index.css';
import routes from './routes';

function App() {
  return (
    <section>
      <Navbar />

      <section className='mobile:px-10 px-4 pb-10 flex justify-center'>
        <section className='w-fw'>
          <Switch>
            {routes.map(({ path, component: Component, exact }, index) => (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            ))}
          </Switch>
        </section>
      </section>
    </section>
  );
}

export default App;
