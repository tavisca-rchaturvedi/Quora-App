import React from 'react';

export default class Answer extends React.Component {
    render(){
        return (
            <h4>
                Answer : {this.props.answer}
            </h4>
        )
    }
}