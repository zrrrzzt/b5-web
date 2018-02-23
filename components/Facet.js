export default ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <p>Score: {data.score}/20 - {data.scoreText}</p>
    <p>{data.text}</p>
  </div>
)
