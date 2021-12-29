import './app.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Menu from './components/menu/menu'
import NotFound from './components/notFound'
import Landing from './layouts/landing'
import SignUp from './layouts/auth/signUp'
import SignIn from './layouts/auth/signIn'
import Notes from './components/notes/notes'
import { useState } from 'react'

function App() {
  const [login, setLogin] = useState()
  const [authorized, setAuthorized] = useState(false)

  const handleSignUp = (login, password) => {
    setLogin(login)
    setAuthorized(true)
  }
  const handleSignIn = (login, password) => {
    setLogin(login)
    setAuthorized(true)
  }

  const handleSignOut = () => {
    setLogin(undefined)
    setAuthorized(false)
  }

  return (
    <div className="app">
      <Menu
        authorized={authorized}
        login={login}
        handleSignOut={handleSignOut}
      />
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/landing" component={Landing} />
        {!authorized && (
          <Route
            path="/signup"
            component={() => <SignUp handleSignUp={handleSignUp} />}
          />
        )}
        {!authorized && (
          <Route
            path="/signin"
            component={() => <SignIn handleSignIn={handleSignIn} />}
          />
        )}
        {authorized && <Route path="/notes/:noteId?" component={Notes} />}
        <Redirect from="/" exact to={authorized ? '/notes' : '/landing'} />
        {authorized && <Redirect from="/signin" to="/notes" />}
        {authorized && <Redirect from="/signup" to="/notes" />}
        {!authorized && <Redirect from="/notes" to="/" />}
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
