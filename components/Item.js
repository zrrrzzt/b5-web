export default ({ data }) => (
  <div className={'item-wrapper'}>
    <div>{data.text}</div>
    <style jsx>
      {`
        .item-wrapper {
          background: white;
          color: black;
        }
        a, a:visited {
          color: white;
        }
        button {
          background-color: white;
          border-radius: 2px;
          color: black;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          width: 150px;
          margin: 10px;
          cursor: pointer;
        }
        button:focus {
          outline:0;
        }
        
        button:active {
          outline: 0;
        }
      `}
    </style>
  </div>
)
