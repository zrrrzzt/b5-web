import { useState } from 'react'

const Choice = props => {
  const { choice, item, setAnswer } = props
  const notActive = 'p-4 mt-2 w-full border border-black hover:bg-yellow-300 focus:bg-yellow-300'
  const isActive = 'p-4 mt-2 w-full border border-black bg-yellow-300'
  const [selected, setSelected] = useState(false)
  const handleClick = event => {
    setAnswer(event)
    setSelected(!selected)
  }
  return (
    <div>
      <button
        key={`${item.id}-${choice.score}`}
        data-qid={item.id}
        data-num={item.num}
        data-domain={item.domain}
        data-facet={item.facet}
        data-score={choice.score}
        onClick={handleClick}
        className={selected ? isActive : notActive}
      >{choice.text}
      </button>
    </div>
  )
}

export default Choice
