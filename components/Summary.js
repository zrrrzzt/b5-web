export default ({ data }) => (
  <div className={'summary-wrapper'} >
    {data
    ? data.map(item => <div>{item.title}<p>{item.scoreText}</p></div>)
    : null}
    <style jsx>
      {`
        .summary-wrapper {
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          color: black;
          margin-top: 10px;
          padding: 10px;
          text-align: center;
          display: flex;
          justify-content: space-evenly;
        }
        @media screen and (max-width: 900px) {
          .summary-wrapper {
            flex-direction: column;
          }
      `}
    </style>
  </div>
)
