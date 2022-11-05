/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router/Router';

function App() {
    return (
        <div className="App bg-slate-400 d-flex">
            <Provider store={store}>
                <Router />
            </Provider>
        </div>
    );
}

export default App;
