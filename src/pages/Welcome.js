import {Route} from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>welcome shabnam</h1>
            <Route path='/welcome/new-user' >
            <p>Welcome,new user</p></Route>
        </div>
    )
}

export default Welcome
