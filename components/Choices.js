import Choice from './Choice'

export default ({ data, answers, setAnswer }) => (
  <div className='flex flex-col'>
    {data && data.choices
      ? data.choices.map(choice => <Choice choice={choice} item={data} answers={answers} setAnswer={setAnswer} key={choice.score} />)
      : null}
  </div>
)
