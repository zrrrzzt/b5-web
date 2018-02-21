export default ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <p>{data.text}</p>
    <p>Score: {data.score}/20 - {data.scoreText} </p>
  </div>
)
