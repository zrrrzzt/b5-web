export default ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <p>Value: {data.score}/20 - {data.scoreText} </p>
    <div>
      {data.text}
    </div>
  </div>
)
