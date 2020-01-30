function triggerUpload (e) {
  e.preventDefault()
  const fileField = e.target.previousSibling
  fileField.click()
}

export default ({ handler, buttonTitle }) => (
  <>
    <input type='file' accept='.json' onChange={handler} />
    <button onClick={triggerUpload}>{buttonTitle}</button>
  </>
)
