import { useState } from 'react'

const SelectLanguage = props => {
  const { selectedLanguage, languages, setLanguage } = props
  const [selectedOption, setSelectedOption] = useState(selectedLanguage)
  const handleLanguageSelect = event => {
    const lang = event.target.value
    setSelectedOption(lang)
    setLanguage(lang)
  }
  return (
    <select onChange={handleLanguageSelect} value={selectedOption} className='text-xl border border-black bg-blue-100 block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-yellow-300 focus:border-gray-500'>
      {languages.map((lang, index) => <option value={lang.id} key={index}>{lang.text}</option>)}
    </select>
  )
}

const Intro = props => {
  const { selectedLanguage, languages, setLanguage, startTest } = props

  return (
    <div className='text-xl container mx-auto p-4'>
      <p>This is a test for the five factor model of personality based on work from <a href='https://github.com/kholia/IPIP-NEO-PI' target='blank'>IPIP-NEO-PI</a>.</p>
      <p>Tests and evaluation is gathered from <a href='http://ipip.ori.org/' target='_blank' rel='noopener noreferrer'>ipip.ori.org</a>.</p>
      <p>Inventories are from Johnson's (2014) 120-item IPIP NEO-PI-R</p>
      <ul>
        <li>Answer honestly, even if you don't like the answer.</li>
        <li>Describe yourself as you generally are now, not as you wish to be in the future.</li>
        <li>Your spontaneous answer is usually the most accurate.</li>
      </ul>
      <p className='font-bold'>Select test language</p>
      <SelectLanguage selectedLanguage={selectedLanguage} languages={languages} setLanguage={setLanguage} />
      <div>
        <button className='border border-black mt-4 p-4 text-2xl bg-blue-100 hover:bg-yellow-300 shadow w-full' onClick={startTest}>Start test</button>
      </div>
    </div>
  )
}

export default Intro
