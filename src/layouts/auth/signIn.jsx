import './auth.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

const SignIn = ({ handleSignIn }) => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="page">
      <div className="center-in-parent flex-row-center">
        <h2>Вход</h2>
        <input
          type="text"
          className="form-control auth-input mb-3"
          id="exampleFormControlInput1"
          placeholder="Логин"
          onChange={event => {
            setLogin(event.target.value)
          }}
        />
        <input
          type="password"
          className="form-control auth-input mb-3"
          id="exampleFormControlInput2"
          placeholder="Пароль"
          onChange={event => {
            setPassword(event.target.value)
          }}
        />
        <button
          type="submit"
          onClick={() => handleSignIn(login, password)}
          className="btn btn-primary auth-button mb-3"
        >
          Войти
        </button>
        <Link to="/signup">Зарегистрироваться</Link>
      </div>
    </div>
  )
}
SignIn.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
}

export default SignIn
