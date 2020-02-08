export default ({ addComparison }) => (
  <form onSubmit={addComparison}>
    <div className='flex flex-col'>
      <input type='text' id='comparisonName' placeholder='Name for comparison' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' required />
      <input type='text' id='comparisonData' placeholder='URL or id for comparison' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' required />
      <button type='submit' className='border border-black mt-4 p-4 text-2xl bg-teal-200 hover:bg-yellow-300 w-full shadow'>Add</button>
    </div>
  </form>
)
