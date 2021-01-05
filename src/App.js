import RenderUserList from "./components/users-list/UserList";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Link to={'/users'}>users</Link>
        <Route path={'/users'} component={RenderUserList}/>
    </div>
  );
}

export default App;
