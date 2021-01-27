import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import DetailPages from '../pages/DetailPages';
import HomePage from '../pages/Homepage';
import Navbar from '../components/Navbar';
import Register from '../pages/Register';
import Login from '../pages/Login'
import ProfilePage from '../pages/ProfilePage'
import PostPage from '../pages/PostPage'
import UpdatePage from '../pages/UpdatePage'


function AppRouter () {
    return (
        <Router>
        <Navbar/>
        <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/detail' component={DetailPages}/>                
                <Route path='/register' component={Register}/>  
                <Route path="/login" component={Login} />
                <Route path="/profile" component={ProfilePage} />              
                <Route path="/post" component={PostPage} />              
                <Route path="/update" component={UpdatePage} />              
                
        </Switch>   
        
        </Router>
    )
}
export default AppRouter;