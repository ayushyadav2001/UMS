import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import NavBar from './components/layouts/NavBar';
import AboutPage from "./components/pages/AboutPage";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Routes>
    <Route exact path='/' element={ <Home/>}></Route>
    <Route exact path='/about' element={<AboutPage/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/users/add' element={<AddUser/>}></Route>
    <Route exact path='/users/view/:userId' element={<ViewUser/>}></Route>
    <Route exact path='/users/edit/:userId' element={<EditUser/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
