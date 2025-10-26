"use client"
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    console.log("counter", count)
    return (
        <div>
            <p onClick={() => setCount(count + 1)}>counter {count} click</p>
        </div>
    )
}

export default Counter