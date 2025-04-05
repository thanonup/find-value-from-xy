import { useState } from 'react'
import './App.css'

function App() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [input3, setInput3] = useState(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = getDecimalDigit(x, y, input3)
        alert(`Submitted values: X : ${x} Y : ${y} Position : ${input3} \n Result : ${result}`)
    }

    function getDecimalDigit(x: number, y: number, position: number) {
        let remainderFromXY = x % y

        for (let i = 1; i <= position; i++) {
            remainderFromXY *= 10
            const digit = (remainderFromXY / y) | 0
            remainderFromXY %= y

            if (i === position) return digit
        }
    }

    return (
        <>
            <h1>Find Value From X/Y</h1>
            <h2>BigO : O(n) : linear</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Input X:</label>
                    <input type="number" value={undefined} onChange={(e) => setX(Number(e.target.value))} required />
                </div>
                <div>
                    <label>Input Y:</label>
                    <input type="number" value={undefined} onChange={(e) => setY(Number(e.target.value))} required />
                </div>
                <div>
                    <label>Input Position:</label>
                    <input
                        type="number"
                        value={undefined}
                        onChange={(e) => setInput3(Number(e.target.value))}
                        required
                    />
                </div>
                <h3>
                    <button type="submit">Submit</button>
                </h3>
            </form>
        </>
    )
}

export default App
