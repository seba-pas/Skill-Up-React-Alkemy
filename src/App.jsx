// hooks
import { Provider } from 'react-redux';
// store
import { store } from './store/store';
// components
import Router from './router/Router';
import GlobalTheme from './styles/Theme';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <GlobalTheme>
                    <Router />
                </GlobalTheme>
            </Provider>
        </div>
    );
}

export default App;
