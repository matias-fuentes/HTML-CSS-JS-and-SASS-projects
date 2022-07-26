import { Route, Switch } from 'react-router-dom';

import Meetups from './pages/Meetups';
import AddMeetups from './pages/AddMeetups';
import FavoritesMeetups from './pages/FavoritesMeetups';
import Layout from './components/layout/Layout';

function App() {
    document.title = 'Worldwide Meetups';

    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Meetups />
                </Route>
                <Route path="/add-meetups">
                    <AddMeetups />
                </Route>
                <Route path="/favorites-meetups">
                    <FavoritesMeetups />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
