import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        Header {title}
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
