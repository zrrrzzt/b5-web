import Choice from './Choice'

export default ({ data }) => (
  <div>
    {data && data.choices
    ? data.choices.map(choice => <Choice choice={choice} item={data} />)
    : null}
  </div>
)
