import React, { Component } from 'react'
import Question from './Question.jsx'

export default class QuestionList extends Component {
   
   render() {
      console.log(this.props)
      if(this.props.questionList.length === 0){
         return (
            <h1>
               No Questions Yet!!
            </h1>
         )
      }
      return (
         <ul>
            {this.props.questionList.map(question =>
               <Question 
                  key={question.id}
                  dispatch={this.props.dispatch}
                  {...question}
               />
            )}
         </ul>
      )
   }
}