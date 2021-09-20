import cardclass from './Card.module.css';

function Card(props) {
    return (
    <div className={cardclass.card}>
        {props.children}
    </div>
    );
}

export default Card;