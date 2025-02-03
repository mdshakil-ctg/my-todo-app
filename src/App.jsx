import React from "react";
import { useState } from "react";
import "./App.css";

import PropTypes from 'prop-types';
// import UserCard from './UserCard ';


const ChildComponent = React.memo(({ count }) => {
  console.log("Child rendered", count);
  return <p>Count: {count}</p>;
});


ChildComponent.displayName = 'ChildComponent'

function App() {
  const [count, setCount] = useState(0);

  console.log("parent component rendered");
  
  return (
    <>
      <div className="bg-amber-300 text-center text-3xl">
        
        <p>Simple Todo App</p>
        <button className="bg-blue-800 p-2" onClick={() => setCount((prev) => prev + 1)}>
          Increment: {count}
        </button>
        <ChildComponent count={count} />
        {/* <UserCard
          name="John Doe"
          age='28'
          isAdmin={true}
          hobbies={["Coding", "Reading", "Gaming"]}
          address={{ city: "New York", country: "USA" }}
          onClick={() => alert("User clicked!")}
        /> */}
        {/* <ReactMemo/> */}
      </div>
    </>
  );
}

export default App;


ChildComponent.propTypes = {
count: PropTypes.number.isRequired,
}
