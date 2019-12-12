export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_COMMMENT = 'ADD_COMMENT';
export const ADD_LIKE = 'ADD_LIKE';
export const MAINTAIN_ANSWERS = 'MAINTAIN_ANSWERS';

let nextQuestion = 0;
let nextAnswer = 0;

export function maintainAnswers(value){
   console.log(value);
   return {
      type: MAINTAIN_ANSWERS,
      id: value.id,
      answers: value.answers,
      likesCount: 0,
      comments: [],
      questionId: value.questionId
   }
}


export function addQuestion(text) {
   return {
      type: ADD_QUESTION,
      id: nextQuestion++,
      question: text
   };
}

export function addAnswer(value) {
   return {
      type: ADD_ANSWER,
      id: nextAnswer++,
      answer: value
   };
}

export function addLike(value) {
   return {
      type: ADD_LIKE,
      likesCount: value
   };
}