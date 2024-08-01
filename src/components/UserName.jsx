import PropTypes from 'prop-types';

function UserName(props) {
  return (
    <p className="display">{props.name}</p>
  );
}

UserName.propTypes = {
  name: PropTypes.string,
};

export default UserName;