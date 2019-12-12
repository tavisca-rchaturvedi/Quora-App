import React, { Component } from 'react'

export default class AddQuestion extends Component {
   render() {
      return (
         <div>
            <textarea  placeholder="Add a new Question" type = 'text' ref = 'input' />
				
            <button onClick = {(e) => this.handleClick(e)}>
               Add Question
            </button>
         </div>
      )
   }
   handleClick(e) {
      const node = this.refs.input
      const text = node.value.trim()
      if(text.length > 0){
         this.props.onAddClick(text)
         node.value = ''
      }
   }
}