import Question from "../Question/Question"
import Result from "../Result/Result"

import { useSelector } from "react-redux"


function App() {
   const { questions} = useSelector((state) => state.questionnaire);

   const element = questions.map((q) => (
    <Question key={q.id} id={q.id} text={q.question} />
  ));
  

  return (
    <>
      {element}
      <Result/>
    </>
  )
}

export default App
