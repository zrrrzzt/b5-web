import Choices from './Choices'

export default ({ data, answers, setAnswer }) => (
  <div className={'item-wrapper'}>
    <div>{data.text}</div>
    {data ? <Choices data={data} answers={answers} setAnswer={setAnswer} /> : null}
    <style jsx>
      {`
        .item-wrapper {
          background: white;
          color: black;
          margin: 5px;
          padding: 10px;
        }
      `}
    </style>
  </div>
)
