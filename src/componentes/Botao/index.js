import './card.css'

const Card = (props) => {
    return (<button className='card'>
        {props.children}
    </button>)
}

export default Card