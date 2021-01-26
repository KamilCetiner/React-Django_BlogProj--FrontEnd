import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import DetailPages from '../pages/DetailPages';
import HomePage from '../pages/Homepage';
import Navbar from '../components/Navbar';
import Register from '../pages/Register';
import Login from '../pages/Login'
import ProfilePage from '../pages/ProfilePage'


function AppRouter () {
    return (
        <Router>
        <Navbar/>
        <Switch>
                <Route path='/home' component={HomePage} exact />
                <Route path='/detail' component={DetailPages}/>                
                <Route path='/register' component={Register}/>  
                <Route path="/login" component={Login} />
                <Route path="/profile" component={ProfilePage} />              
                
        </Switch>   
        
        </Router>
    )
}
export default AppRouter;