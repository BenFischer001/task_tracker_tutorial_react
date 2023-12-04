import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, addTaskOpen}) => {


  return (
    <header className='header'>

        <h1>{title}</h1>
        <Button color={addTaskOpen ? "red" : "green" } text={addTaskOpen ? "Close" : "Add"} onClick={onAdd} />
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
