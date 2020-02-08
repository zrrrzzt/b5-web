export default ({ addResults }) => (
  <form onSubmit={addResults}>
    <input type='text' id='resultData' placeholder='URL or id for result' className='w-full' required />
    <button type='submit' className='border border-black mt-4 p-4 text-2xl bg-teal-200 hover:bg-yellow-300 shadow w-full'>Add</button>
  </form>
)
