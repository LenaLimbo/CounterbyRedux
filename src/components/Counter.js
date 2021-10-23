import React from 'react'

class Counter extends React.Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props

        return (
            <div>
                <h3> Count: {value}</h3>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        )
    }
}
export default Counter