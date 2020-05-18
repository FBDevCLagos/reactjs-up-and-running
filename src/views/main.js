import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../routes'
import Navbar from '../components/navbar'

function Main() {
  return (
    <section>
      <Navbar />

      <section className="mobile:px-10 px-4 pb-10 flex justify-center">
        <section className="w-fw">
          <Switch>
            {routes.map(({ path, component: Component, exact }, i) => (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            ))}
          </Switch>
        </section>
      </section>
    </section>
  )
}

export default Main
