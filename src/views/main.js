import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../routes'
import Navbar from '../components/navbar'

function Main() {
  return (
    <section>
      <Navbar />

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
  )
}

export default Main
