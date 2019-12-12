import React, { Component } from 'react'
import Answers from './Answers'
import {maintainAnswers} from '../actions/actions';

export default class Question extends Component {
   
   
   addAnswersArray(text){
      console.log(this.props.answers)
      let currentAnswers = this.props.answers;
      if(currentAnswers === undefined)
         currentAnswers = []
      currentAnswers.push({"id" : currentAnswers.length + 1, text});
      let a =  {"id" : this.props.id, "answers": currentAnswers, questionId: this.props.id};
      console.log(a)
      return a;
   }


   render() {
      console.log(this.props)
      return (
         <div>
            <h2>
               Question : {this.props.question}
               <Answers key={this.props.id} questionId={this.props.id} answers={this.props.answers} onAddClick = {text =>this.props.dispatch(maintainAnswers(this.addAnswersArray(text)))} />
            </h2>
         </div>
      )
   }
}