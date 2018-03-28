export default ({ addResults }) => (
  <form onSubmit={addResults}>
    <input type='text' id='resultData' placeholder='URL or id for result' required />
    <br />
    <button type='submit'>Add</button>
    <style jsx>
      {`
        input {
          width: 80%;
          height: 40px;
          margin: 10px;
          font-size: 20px;
        }
        input:focus {
          outline:0;
        }
        input:active {
          outline: 0;
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
          width: 200px;
          margin: 10px;
          cursor: pointer;
        }
        button:focus {
          outline:0;
        }
        button:active {
          outline: 0;
        }
        @media screen and (max-width: 700px) {
          button {
            width: 300px;
            margin-bottom: 5px;
        }
      `}
    </style>
  </form>
)
