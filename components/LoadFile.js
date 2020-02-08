function triggerUpload (e) {
  e.preventDefault()
  const fileField = e.target.previousSibling
  fileField.click()
}

export default ({ handler, buttonTitle }) => (
  <div className='flex'>
    <input type='file' accept='.json' onChange={handler} />
    <button onClick={triggerUpload} className='border border-black mt-4 p-4 text-2xl bg-teal-200 hover:bg-yellow-300 shadow w-full'>{buttonTitle}</button>
  </div>
)
