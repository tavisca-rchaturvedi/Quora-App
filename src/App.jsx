import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion } from './actions/actions'

import AddQuestion from './components/AddQuestion.jsx'
import QuestionList from './components/QuestionList.jsx'

class App extends Component {
   render() {
      const { dispatch, questionList } = this.props
      
      return (
         <div>
            <h1 style={{color:"red"}}>Quora App</h1>
               <div style={{padding: 20}}>
                  <QuestionList questionList = {questionList} dispatch={dispatch}/>
                  <AddQuestion onAddClick = {question =>dispatch(addQuestion( question))}  />
               </div>
           </div>
      )
   }
}
function select(state) {
   return {
      questionList: state.questionsList
   }
}
export default connect(select)(App);