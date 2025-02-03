import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const ChildComponent = React.memo(({onClick})=>{
    console.log('child component rendered', onClick)
    return <button onClick={onClick}>Click me</button>
})
ChildComponent.displayName = 'childcomponent demo'

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() =>{
        alert ('button clicked')
    },[])

    // console.log({handleClick})

// console.log(toggle)
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={() =>setCount(prev => prev + 1)}>Increment</button><br />
            <button className='btn btn-info' onClick={() => setToggle(!toggle)}>Toggle</button><br />
            <ChildComponent onClick={handleClick}/>
        </div>
    );
};

export default UseCallback;

ChildComponent.propTypes = {
    onClick : PropTypes.func.isRequired
}