import RenderUserList from "./components/users-list/UsersList";
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
