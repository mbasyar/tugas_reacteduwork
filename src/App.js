import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <img src='/gambar.png' style={{width: '500px', borderRadius: '15px', margin: 'auto'}} alt='gambar' /> 
      <br />
        <img src={logo} className="App-logo" alt="logo" />
        <h2> ini project react pertama saya </h2>
    </div>
  );
}

export default App;
