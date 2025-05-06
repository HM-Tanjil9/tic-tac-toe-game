import Card from '../Card/Card'
import './Grid.css'

function Grid({numberOfCards}) {
  return (
    <div className='grid'>
        {Array(numberOfCards).fill(<Card/>).map((element, index) => {
            return <Card key={index}/>
        })}
    </div>
  )
}

export default Grid