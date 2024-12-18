import PropTypes from 'prop-types';
import { GROUP_COLORS } from '../../constants/colors';

const ColorPicker = ({ selectedColor, onColorSelect }) => {
  return (
    <div className="color-picker">
      {GROUP_COLORS.map((color) => (
        <button
          key={color}
          className={`color-option ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          type="button"
          aria-label={`Select color ${color}`}
        />
      ))}
    </div>
  );
};

ColorPicker.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

export default ColorPicker;