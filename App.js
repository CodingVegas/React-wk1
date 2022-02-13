import Navbar from './navbar';
import LoginForm from './loginform';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
