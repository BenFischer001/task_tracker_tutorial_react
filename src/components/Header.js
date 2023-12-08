import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, addTaskOpen}) => {
  const location = useLocation()

  return (
    <header className='header'>

        <h1>{title}</h1>
        {location.pathname === '/' && <Button color={addTaskOpen ? "red" : "green" } text={addTaskOpen ? "Close" : "Add"} onClick={onAdd} />
}
    </header>
  )
}

Header.defaultProps = {
    title: 'default'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
