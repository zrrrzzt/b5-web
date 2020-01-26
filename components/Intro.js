export default ({ selectedLanguage, languages, setLanguage, startTest }) => {
  return (
    <div className='container mx-auto p-4'>
      <p>This is a test for the five factor model of personality based on work from <a href='https://github.com/kholia/IPIP-NEO-PI' target='blank'>IPIP-NEO-PI</a>.</p>
      <p>Tests and evaluation is gathered from <a href='http://ipip.ori.org/' target='_blank' rel='noopener noreferrer'>ipip.ori.org</a>.</p>
      <p>Inventories are from Johnson's (2014) 120-item IPIP NEO-PI-R</p>
      <ul>
        <li>Answer honestly, even if you don't like the answer.</li>
        <li>Describe yourself as you generally are now, not as you wish to be in the future.</li>
        <li>Your spontaneous answer is usually the most accurate.</li>
      </ul>
      <p className='font-bold'>Select test language</p>
      <div className='flex flex-wrap justify-around'>
        {languages.map((lang, index) => <button className={lang.id === selectedLanguage ? 'bg-yellow-300 border border-black m-2 p-4 text-center flex-grow' : 'border border-black m-2 p-4 hover:bg-yellow-300 text-center flex-grow'} onClick={() => setLanguage(lang.id)} key={index}>{lang.text}</button>)}
      </div>
      <div>
        <button onClick={startTest}>Start test</button>
      </div>
    </div>
  )
}
