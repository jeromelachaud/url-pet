import PropTypes from 'prop-types'
import './Label.css'

export const Label = ({ htmlFor, text, id }) => {
  return (
    <label id={id} htmlFor={htmlFor}>
      {text}
    </label>
  )
}

Label.propTypes = {
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}
