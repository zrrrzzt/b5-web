export default ({ choice, item, answers, setAnswer }) => (
  <div>
    <button
      key={`${item.id}-${choice.score}`}
      data-qid={item.id}
      data-num={item.num}
      data-domain={item.domain}
      data-facet={item.facet}
      data-score={choice.score}
      onClick={setAnswer}
      className={Object.keys(answers).includes(item.id) && answers[item.id].score === choice.score.toString() ? 'isActive' : ''}
    >{choice.text}
    </button>
    <style jsx>
      {`
        button {
          background-color: white;
          border-radius: 3px;
          color: black;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease 0s;
        }
        button:focus {
          outline:0;
        }
        button:active {
          outline: 0;
        }
        .isActive {
          background: yellow;
        }
        @media screen and (max-width: 700px) {
          button {
            width: 300px;
            margin-bottom: 5px;
          }
      `}
    </style>
  </div>
)
