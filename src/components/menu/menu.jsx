import { Link } from 'react-router-dom'
import './menu.css'
import PropTypes from 'prop-types'

const Menu = ({ authorized, login, handleSignOut }) => {
  return (
    <div>
      <div className="menu p-3">
        <Link className="logo" to="/">
          <h2 className="m-1">Notepad</h2>
        </Link>
        <div className="grower" />
        {!authorized && (
          <div className="btn-group m-2">
            <Link to="/signup" className="btn btn-secondary">
              Зарегистрироваться
            </Link>
            <Link to="/signin" className="btn btn-primary">
              Войти
            </Link>
          </div>
        )}
        {authorized && <div className="m-2">{login}</div>}
        {authorized && (
          <button className="btn btn-secondary" onClick={handleSignOut}>
            Выйти
          </button>
        )}
      </div>
      <div className="divisor" />
    </div>
  )
}
Menu.propTypes = {
  authorized: PropTypes.bool.isRequired,
  handleSignOut: PropTypes.func.isRequired,
}

export default Menu
