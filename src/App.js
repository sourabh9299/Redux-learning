import Counter from './components/simple-react/Counter';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CounterRedux from './redux/CounterRedux';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Learning</h1>
      {/* <Counter></Counter> */}
      <CounterRedux></CounterRedux>
    </Provider>
  );
}

export default App;
