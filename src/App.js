import { Routes, Route} from 'react-router-dom'

import Dashboard from './screens/dashboard/Dashboard'
import Login from "./screens/login/Login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
