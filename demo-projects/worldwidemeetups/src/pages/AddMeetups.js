import { useHistory } from 'react-router-dom';

import AddMeetupForm from '../components/meetups/AddMeetupForm';

function AddMeetups() {
    const history = useHistory();

    function AddMeetupsHandler(meetupData) {
        fetch(
            'https://worldwide-meetups-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add Meetups</h1>
            <AddMeetupForm onAddMeetups={AddMeetupsHandler} />
        </section>
    );
}

export default AddMeetups;
