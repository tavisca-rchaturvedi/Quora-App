import { combineReducers } from 'redux'
import { ADD_QUESTION, ADD_ANSWER, MAINTAIN_ANSWERS } from '../actions/actions'

function todo(state, action) {
   console.log(action)
   console.log(state)
   switch (action.type) {
      case ADD_QUESTION:
         return {
            id: action.id,
            question: action.question,
            answers: [],
            likesCount: 0
         }
      
      case ADD_ANSWER:
         return {
            id: action.id,
            text: action.answer,
            comments: [],
            likesCount: 0
         }
      case MAINTAIN_ANSWERS: 
         // state.filter(question =>  question.id == action.id)[0].answers = action.answers;
         let tempState = [...state];
         tempState[action.id].answers = action.answers;
         console.log(tempState);
         return tempState;
      default:
         return state
   }
}
function questionsList(state = [], action) {
   console.log(state)
   console.log()
   switch (action.type) {
      case ADD_QUESTION:
         return [
            ...state,
            todo(undefined, action)
         ]
      case MAINTAIN_ANSWERS:
         return todo(state, action)
      default:
         return state
   }
}
const quoraApp = combineReducers({
   questionsList
})
export default quoraApp