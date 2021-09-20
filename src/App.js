import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import AllEventsPage from './pages/AllEvents';
import NewEventsPage from './pages/NewEvents';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/home' exact>
          <HomePage />
        </Route>
        <Route path='/all-events'>
          <AllEventsPage />
        </Route>
        <Route path='/new-events'>
          <NewEventsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;