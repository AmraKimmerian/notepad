import Menu from './components/menu'
import { Switch, Route } from 'react-router-dom'
import Login from './layouts/login'
import Notes from './layouts/notes'

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/notes/:noteId?" component={Notes} />
      </Switch>
    </>
  )
}

export default App
