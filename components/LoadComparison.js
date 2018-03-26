function triggerUpload (e) {
  e.preventDefault()
  const fileField = document.getElementById('comparisonUploadFile')
  fileField.click()
}

export default ({ handler }) => (
  <div>
    <input type='file' accept='.json' id={'comparisonUploadFile'} onChange={handler} />
    <button onClick={triggerUpload}>Upload</button>
    <style jsx>
      {`
        input {
          display: none;
          visibility: hidden;
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
      `}
    </style>
  </div>
)
