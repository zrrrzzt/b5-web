import { useState } from 'react'

const SelectLanguage = props => {
  const { selectedLanguage, languages, setLanguage } = props
  const [selectedOption, setSelectedOption] = useState(selectedLanguage)
  const handleLanguageSelect = event => {
    const lang = event.target.value
    setSelectedOption(lang)
    setLanguage(lang)
  }
  languages.sort((a, b) => (a.text > b.text) ? 1 : -1)
  return (
    <select onChange={handleLanguageSelect} value={selectedOption} className='text-xl border border-black bg-blue-100 block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-yellow-300 focus:border-gray-500'>
      {languages.map((lang, index) => <option value={lang.id} key={index}>{lang.text}</option>)}
    </select>
  )
}

export default SelectLanguage
