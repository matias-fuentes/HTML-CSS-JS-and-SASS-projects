import { useHistory } from 'react-router-dom';

import AddMeetupForm from '../components/meetups/AddMeetupForm';

function AddMeetups() {
    const history = useHistory();

    function AddMeetupsHandler(meetupData) {
        fetch(
            'https://react-meetups-7fd7d-default-rtdb.firebaseio.com/meetups.json',
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
