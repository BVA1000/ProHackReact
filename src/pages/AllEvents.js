import EventList from '../components/events/EventList';

const Event_Data = [
    {
        id: 'm1',
        title: 'JavaScript Hackathon',
        location: 'Google San Francisco',
        address: ' 345 Spear Street, San Francisco, CA, 94105',
        description: 'Fun & Interactive JavaScript Hackathon Event hosted by Google San Francisco.'
    },
    {
        id: 'm2',
        title: 'Java Hackathon',
        location: 'Oracle Austin',
        address: ' 2300 Oracle Way, Austin, TX, 78741',
        description: 'Fun & Interactive Java Hackathon Event hosted by Oracle in Austin, Texas.'
    },
    {
        id: 'm3',
        title: 'Python Hackathon',
        location: 'Amazon Seattle',
        address: ' 410 Terry Avenue North, Seattle, WA, 98109',
        description: 'Fun & Interactive Python Hackathon Event hosted by Amazon Seattle.'
    }
]


function AllEventsPage() {
    return (
        <section>
            <h1>All Events</h1>
            <EventList events={Event_Data} />
        </section>
    );
}

export default AllEventsPage;