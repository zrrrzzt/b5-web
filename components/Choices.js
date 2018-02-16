import Choice from './Choice'

export default ({ data, answers, setAnswer }) => (
  <div className={'choice-wrapper'}>
    {data && data.choices
    ? data.choices.map(choice => <Choice choice={choice} item={data} answers={answers} setAnswer={setAnswer} />)
    : null}
    <style jsx>
      {`
        .choice-wrapper {
          display: flex;
          justify-content: space-evenly;
        }
      `}
    </style>
  </div>
)
