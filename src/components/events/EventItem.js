import Card from '../ui/Card';
import itemclass from './EventItem.module.css';

function EventItem(props) {
    return (
    <li className={itemclass.item}>
        <Card>
            <div className={itemclass.content}>
                <h3>{props.title}</h3>
            </div>
            <div className={itemclass.content}>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={itemclass.actions}>
                <button>To Favorites</button>
            </div>
        </Card>
    </li>
    );

}

export default EventItem;