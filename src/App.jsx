import './App.css';
import Main from "./pages/page1/main"
import Post from './pages/page2/twiterpost/Post';
import Contracts from './pages/page4/Contracts';
import NavComponent from './pages/nav';
import InstaPage from './pages/page3/index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <NavComponent />
        <Routes>
          <Route path='/home' element={<Main />}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/contacts' element={<Contracts />}/>
          <Route path='/insta' element={<InstaPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
