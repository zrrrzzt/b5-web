export default ({ selectedLanguage, info, setLanguage, startTest }) => (
  <div className='intro-wrapper'>
    <p>This is a test for the five factor model of personality based on work from <a href='https://github.com/kholia/IPIP-NEO-PI' target='blank'>IPIP-NEO-PI</a>.</p>
    <p>Tests and evaluation is gathered from <a href='http://ipip.ori.org/' target='_blank' rel='noopener noreferrer'>ipip.ori.org</a>.</p>
    <p>Inventories are from Johnson's (2014) 120-item IPIP NEO-PI-R</p>
    <ul>
      <li>Answer honestly, even if you don't like the answer.</li>
      <li>Describe yourself as you generally are now, not as you wish to be in the future.</li>
      <li>Your spontaneous answer is usually the most accurate.</li>
    </ul>
    <p><strong>Select test language</strong></p>
    <div>
      {info.languages.map((lang, index) => <button data-language={lang} className={selectedLanguage === lang ? 'isActive' : ''} onClick={setLanguage} key={index}>{lang}</button>)}
    </div>
    <div>
      <button onClick={startTest}>Start test</button>
    </div>
    <style jsx>
      {`
        ul {
          list-style-type: none;
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
        .isActive {
          background: yellow;
        }
        .intro-wrapper {
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          color: black;
          margin-top: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
        }
        @media screen and (max-width: 700px) {
          button {
            margin-bottom: 5px;
            width: auto;
          }
          .button-wrapper {
            flex-direction: column;
            justify-content: center;
            width: auto;
            min-width: 300px;
        }
      `}
    </style>
  </div>
)
