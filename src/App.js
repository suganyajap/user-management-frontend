import './App.css';
import {Provider} from "react-redux"
import { store } from './redux/store';
import {BrowserRouter,Route,Switch } from "react-router-dom"
import UserList from './pages/UserList';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import { NotFound } from './NotFound';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/user"><UserList/></Route>
            <Route exact path="/user/add"><AddUser/></Route>
            <Route exact path="/user/:id"><EditUser/></Route>
            <Route exact path="**"><NotFound/></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
       