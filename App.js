import { useState } from "react";
function App()
{
  const questions=[
    {
      questionText:"Which is frontend framework used to creating web apps?",
      answerOption:[
      {answerText:"Nodejs", isCorrect:false},
      {answerText:"Reactjs", isCorrect:true},
      {answerText:"Expressjs", isCorrect:false},
      {answerText:"mongodb", isCorrect:false},    
  ]
},
{
  questionText:"Which of the following statements are true?",
  answerOption:[
    {answerText:"node js is client-side language", isCorrect:false},
    {answerText:"both (a) and (b)", isCorrect:false},
    {answerText:"none of the above", isCorrect:false},
    {answerText:"node js is server side language",isCorrect:true},

  ]
},
{
  questionText:"Which is the web server among this?",
  answerOption:[
    {answerText:"reactjs", isCorrect:false},
    {answerText:"expressjs", isCorrect:false},
    {answerText:"node js",isCorrect:true},
    {answerText:"angular", isCorrect:false},
  ]
},
{
  questionText:"_____ is an interactive shell that processes Node. ",
  answerOption:[
    {answerText:"REAL", isCorrect:false},
    {answerText:"RESP", isCorrect:false},
    {answerText:"None of the above", isCorrect:false},
    {answerText:"REPL",isCorrect:true},
  ]
},
{
  questionText:"Node.js is written in which language?  ",
  answerOption:[
    {answerText:"C++",isCorrect:false},
    {answerText:"Javascript", isCorrect:true},
    {answerText:"C", isCorrect:false},
    {answerText:"Java", isCorrect:false},
  ]
},
{
  questionText:"Which of the following are examples of node modules?  ",
  answerOption:[
    {answerText:"Express",isCorrect:false},
    {answerText:"Body-parser", isCorrect:true},
    {answerText:"Socket.io", isCorrect:false},
    {answerText:"All of the above", isCorrect:false},
  ]
},
{
  questionText:"To include the HTTP server in the node module, what function do we use?  ",
  answerOption:[
    {answerText:"get()",isCorrect:false},
    {answerText:"require()", isCorrect:true},
    {answerText:"createServer()", isCorrect:false},
    {answerText:"All of the above", isCorrect:false},
  ]
},
{
  questionText:"How can we expose node modules?  ",
  answerOption:[
    {answerText:"expose",isCorrect:false},
    {answerText:"requires", isCorrect:false},
    {answerText:"All of the above", isCorrect:false},
    {answerText:"exports", isCorrect:true},
  ]
},
{
  questionText:"Default scope in Node.js application is?  ",
  answerOption:[
    {answerText:"Global",isCorrect:false},
    {answerText:"Local", isCorrect:true},
    {answerText:"Local to Object", isCorrect:false},
    {answerText:"None of the above", isCorrect:false},
  ]
},
{
  questionText:"How many node objects methods are available?  ",
  answerOption:[
    {answerText:"18",isCorrect:true},
    {answerText:"21", isCorrect:false},
    {answerText:"19", isCorrect:false},
    {answerText:"20", isCorrect:false},
  ]
},
{
  questionText:"____ is a debugging tool for NodeJS?  ",
  answerOption:[
    {answerText:"REPL",isCorrect:false},
    {answerText:"Node Console", isCorrect:false},
    {answerText:"Node Inspector", isCorrect:true},
    {answerText:"None Of The Above", isCorrect:false},
  ]
},
{
  questionText:"Which of the following are built-in node modules?  ",
  answerOption:[
    {answerText:"zlib",isCorrect:false},
    {answerText:"dgram", isCorrect:false},
    {answerText:"https", isCorrect:false},
    {answerText:"All Of The Above", isCorrect:true},
  ]
},
{
  questionText:"For path specific operations which of the following operations is required to be used?  ",
  answerOption:[
    {answerText:"OS Module",isCorrect:false},
    {answerText:"FS Module", isCorrect:false},
    {answerText:"both (a) & (b)", isCorrect:true},
    {answerText:"Path Module", isCorrect:false},
  ]
},
{
  questionText:"Which of the following operations can we do with the NodeJS events module?  ",
  answerOption:[
    {answerText:"Create",isCorrect:false},
    {answerText:"listen for", isCorrect:false},
    {answerText:"Fire", isCorrect:false},
    {answerText:"All Of The Above", isCorrect:true},
  ]
},
{
  questionText:"Which of the following is a valid HTTP method?  ",
  answerOption:[
    {answerText:"get",isCorrect:false},
    {answerText:"put", isCorrect:false},
    {answerText:"post", isCorrect:false},
    {answerText:"All Of The Above", isCorrect:true},
  ]
},
{
  questionText:"Which of the following NodeJS module splits up a web address into readable parts?  ",
  answerOption:[
    {answerText:"URL",isCorrect:true},
    {answerText:"Cors", isCorrect:false},
    {answerText:"Express", isCorrect:false},
    {answerText:"None Of The Above", isCorrect:false},
  ]
},
{
  questionText:"NodeJS uses an event-driven, non-blocking IO model?  ",
  answerOption:[
    {answerText:"True",isCorrect:true},
    {answerText:"False", isCorrect:false},
    {answerText:"Cannot be determined", isCorrect:false},
    {answerText:"None Of The Above", isCorrect:false},
  ]
},
{
  questionText:"Which of the following NodeJS modules is used for file uploads?  ",
  answerOption:[
    {answerText:"foridable",isCorrect:true},
    {answerText:"fs", isCorrect:false},
    {answerText:"express", isCorrect:false},
    {answerText:"files", isCorrect:false},
  ]
},
{
  questionText:"Which NodeJS statement is used to list all the locally installed NodeJS modules?  ",
  answerOption:[
    {answerText:"list",isCorrect:false},
    {answerText:"Is", isCorrect:true},
    {answerText:"cwd", isCorrect:false},
    {answerText:"None Of The Above", isCorrect:false},
  ]
},
{
  questionText:"Which node module is used to handle binary data?  ",
  answerOption:[
    {answerText:"binary",isCorrect:false},
    {answerText:"crypto", isCorrect:false},
    {answerText:"buffer", isCorrect:true},
    {answerText:"dgram", isCorrect:false},
  ]
},
  ]
    
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [showScore,setShowScore]=useState(false)
  const [score,setScore]=useState(0)
  const Handle=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else
    {
      setShowScore(true)
    }
  }
  return(
    
    <div className="quiz">
      {
        showScore ?(
          <div className="score-section">
            YOU HAVE SCORED {score} OUT OF {questions.length}!!!
          </div>
        ):
        (
       
          
        <>
        
         <div className="question-section">
          <span>Question - {currentQuestion+1}</span> /{questions.length}   
          <span></span>
         </div>
         <div className="question-text">
          {questions[currentQuestion].questionText}
         </div>
         <div className="answer-question">
          {questions[currentQuestion].answerOption.map((answerOption) =>(
            <button onClick={ () => Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
         </div>
        </>
        )
      }
    </div>
  )

}
export default App