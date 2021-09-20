import EventItem from './EventItem';
import listclass from './EventList.module.css';

function EventList(props) {
    return (
    <ul className={listclass.list}>
        {props.events.map((event) => (
        <EventItem 
        key={event.id} 
        id={event.id} 
        title={event.title}
        address={event.address}
        description={event.description}
        />
        ))}
    </ul>
    );
}

export default EventList;