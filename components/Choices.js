import Choice from './Choice'

export default ({ data, answers, setAnswer }) => (
  <div className='choice-wrapper'>
    {data && data.choices
      ? data.choices.map(choice => <Choice choice={choice} item={data} answers={answers} setAnswer={setAnswer} key={choice.score} />)
      : null}
    <style jsx>
      {`
        .choice-wrapper {
          display: flex;
          justify-content: space-evenly;
        }
        @media screen and (max-width: 700px) {
          .choice-wrapper {
            flex-direction: column;
          }
      `}
    </style>
  </div>
)
