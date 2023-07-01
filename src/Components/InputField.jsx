import PropTypes from 'prop-types'
import './InputField.css'
import { Label } from './Label'

export const InputField = ({
  id,
  htmlFor,
  labelText,
  type,
  ariaLabel,
  placeholder,
  onChange,
}) => (
  <div>
    <Label id={id} htmlFor={htmlFor} text={labelText} />

    <input
      required
      size="80"
      type={type}
      aria-label={ariaLabel}
      id={id}
      className="input-field"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
)

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}
