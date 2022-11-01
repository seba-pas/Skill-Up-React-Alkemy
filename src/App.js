import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router/Router';

import './App.css';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router />
            </Provider>
        </div>
    );
}

export default App;
