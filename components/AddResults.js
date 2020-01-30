export default ({ addResults }) => (
  <form onSubmit={addResults}>
    <input type='text' id='resultData' placeholder='URL or id for result' required />
    <br />
    <button type='submit'>Add</button>
  </form>
)
