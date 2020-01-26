import Choices from './Choices'

export default ({ data, answers, setAnswer }) => (
  <div className='text-xl text-center p-4'>
    <div className='text'>{data.num}. {data.text}</div>
    {data ? <Choices data={data} answers={answers} setAnswer={setAnswer} /> : null}
  </div>
)
