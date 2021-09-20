import { useRef } from 'react';

import Card from '../ui/Card';
import formclass from './NewEventForm.module.css';

function NewEventForm() {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const eventData = {
            title: enteredTitle,
            address: enteredAddress,
            description: enteredDescription
        };
    
        console.log(eventData);
    }

    return (
        <Card>
            <form className={formclass.form} onSubmit={submitHandler}>
                <div className={formclass.control}>
                    <label htmlFor='title'>Event Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={formclass.control}>
                    <label htmlFor='address'>Event Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={formclass.control}>
                    <label htmlFor='description'>Event Description</label>
                    <textarea id='description' required rows='7' ref={descriptionInputRef}></textarea>
                </div>
                <div className={formclass.actions}>
                    <button>Add Event</button>
                </div>
            </form>
        </Card>
    );
}

export default NewEventForm;