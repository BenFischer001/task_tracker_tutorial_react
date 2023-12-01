import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = (e) => {
    console.log(e)
  }

  return (
    <header className='header'>

        <h1>{title}</h1>
        <Button color="red" text="Add" onClick={onClick} />
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
