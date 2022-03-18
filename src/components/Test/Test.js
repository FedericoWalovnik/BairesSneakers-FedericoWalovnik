import React, { useState }from 'react'
import Button from '@mui/material/Button';

const Test = () => {
    const [count, setCount ] = useState(0);
    const [date, setDate ] = useState('');


    const addCount = () => {
        setDate(new Date().toString())
        setCount(count + 1)
    }

    return(
        <div className="test">
            <Button variant="outlined" onClick={addCount}>Click me</Button>
            <h2>Count: {count}</h2>
            <h3>Date: {date}</h3>
        </div>
    )
}

export default Test;