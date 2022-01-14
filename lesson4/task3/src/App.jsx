import React from 'react';
import { Provider } from 'react-redux';
import users from './users.js';
import UsersList from './users/UsersList';
import store from './store';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <UsersList users={users}></UsersList>
            </Provider>
        )
    }
}
export default App;