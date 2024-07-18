import 
{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login'
import { Feed } from "./pages/Feed";
import { AuthContextProvider } from "./pages/context/auth";

function App() {
  return (
    <Router>
      <AuthContextProvider>
      <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/login" element={<Login />} />
      <Route path ="/feed" element={<Feed />} />
      </Routes>
      </AuthContextProvider>
    </Router>
  );
  
}

export default App;
