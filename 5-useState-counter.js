import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0)
  const complexIncrease = ()=> {
    setTimeout(()=>{
      setCount((prevCount)=>{
        return prevCount + 1;
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h1>Simple Counter</h1>
        <h2>{count}</h2>
        <button className='btn' onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={() => setCount(0)}>
          Reset
        </button>
        <button className='btn' onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h1>Complex Counter</h1>
        <h2>{count}</h2>
        <button className='btn' onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </>
  )
};

export default UseStateCounter;
