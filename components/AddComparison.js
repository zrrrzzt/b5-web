export default ({ addComparison }) => (
  <form onSubmit={addComparison} className='no-print'>
    <input type='text' id='comparisonName' placeholder='Name for comparison' required />
    <input type='text' id='comparisonData' placeholder='URL or id for comparison' required />
    <br />
    <button type='submit'>Add</button>
  </form>
)
