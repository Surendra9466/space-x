import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Error from './components/Error';
import RocketDetail from './components/RocketDetail';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rocket/:id" element={<RocketDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;