import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// eslint-disable-next-line import/no-unresolved
import './styles/Login.css';

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
