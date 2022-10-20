import './App.css';
import { Route,Switch} from 'react-router-dom';
import { LadingPage } from './components/LadingPage';
import { Home } from './components/Home';
import { DetailDogs } from './components/DetailDogs';
import { CreateDogs } from './components/CreateDogs';
import { NotFound } from './components/NotFound';
require('dotenv').config();
const {
  REACT_APP_API
} = process.env;

function App() {
  return (
    <Switch>
        <Route exact path="/" component={LadingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/:id" component={DetailDogs} />
        <Route exact path="/CreateDogs" component={CreateDogs} />
        <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
