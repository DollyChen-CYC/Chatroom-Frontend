import { Routes, Route } from 'react-router-dom';
import store from '../src/store';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import PublicChatroom from '../src/pages/PublicChatroom';
import PrivateMessages from './pages/PrivateMessages';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PublicChatroom />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/public" element={<PublicChatroom />} />
            <Route path="/message/" element={<PrivateMessages />} />
            <Route path="/message/:id" element={<PrivateMessages />} />
            <Route path="*" element={<h1> 404 Page Not Found.</h1>} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
};

export default App;
