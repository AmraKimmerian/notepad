import PropTypes from 'prop-types'
import { useState } from 'react'
import './auth.css'

const SignUp = ({ handleSignUp }) => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="page">
      <div className="center-in-parent flex-row-center">
        <h2>Регистрация</h2>
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
          onClick={() => handleSignUp(login, password)}
          className="btn btn-primary auth-button mb-3"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}
SignUp.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
}

export default SignUp
