export default ({ addComparison }) => (
  <div className='container'>
    <form onSubmit={addComparison} className='bg-teal-200 text-center px-3 py-4 text-black mx-auto rounded mt-4'>
      <input type='text' id='comparisonName' placeholder='Name for comparison' className='block w-full mx-auto text-sm py-2 px-3 rounded' />
      <input type='text' id='comparisonData' placeholder='URL or id for comparison' className='block w-full mx-auto text-sm py-2 px-3 rounded my-3' />
      <button className='bg-yellow-300 hover:bg-white text-black font-bold py-2 px-4 rounded border block mx-auto w-full' type='submit'>
        Add
      </button>
    </form>
  </div>
)
