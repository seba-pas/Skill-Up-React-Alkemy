// hooks
import { Provider } from 'react-redux';
// store
import store from './store/store';
// components
import Router from './router/Router';
import GlobalTheme from './styles/Theme';
import ButtonAppBar from './components/appbar/Appbar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <div className="circle" />
            <ButtonAppBar />
            <Provider store={store}>
                <GlobalTheme>
                    <Router />
                </GlobalTheme>
            </Provider>
            <div className="circle2" />
            <Footer />
        </div>
    );
}

export default App;
