import Choices from './Choices'

export default ({ data, answers, setAnswer }) => (
  <div className='item-wrapper'>
    <div className='text'>{data.num}. {data.text}</div>
    {data ? <Choices data={data} answers={answers} setAnswer={setAnswer} /> : null}
    <style jsx>
      {`
        .text {
          margin-bottom: 10px;
          font-size: large;
        }
        .item-wrapper {
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          color: black;
          margin-top: 10px;
          padding: 10px;
        }
      `}
    </style>
  </div>
)
