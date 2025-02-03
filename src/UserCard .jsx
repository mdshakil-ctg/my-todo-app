import PropTypes from "prop-types";

const UserCard  = ({ 
    name, 
    age, 
    isAdmin, 
    hobbies, 
    address, 
    onClick 
  }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? "Yes" : "No"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Address: {address.city}, {address.country}</p>
      <button onClick={onClick} className="mt-2 p-2 bg-blue-500 text-white">
        Click Me
      </button>
    </div>
    );
};

export default UserCard ;

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool,
    hobbies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    address: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string
    }).isRequired,
    onClick: PropTypes.func.isRequired
}