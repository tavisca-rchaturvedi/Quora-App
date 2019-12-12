import React from 'react';
import Answer from './Answer'

export default class Answers extends React.Component {
    render() {
        console.log(this.props)
        if (this.props.answers.length === 0) {
            return (
                <div>
                    No Answers yet!!
                    <br></br>
                    <textarea placeholder="Add a new Answer" ref='input'></textarea>
                    <button onClick={(e) => this.handleClick(e)}>
                        Add Answer
                    </button>
                </div>

            )
        }
        return (
            <ul>
                {
                    this.props.answers.map((answer,index) =>
                        <Answer key={index+1} answer={answer.text} />
                    )
                }
                <textarea placeholder="Add a new Answer" ref='input'></textarea>

                <button onClick={(e) => this.handleClick(e)}>
                    Add Answer
                </button>
            </ul>
        )
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        if (text.length > 0) {
            this.props.onAddClick(text)
            
            node.value = ''
        }
    }
}