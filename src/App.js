import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
      <p>Users: {users.map((user) => user.name)}</p>
    </div>
  );
}

export default App;
