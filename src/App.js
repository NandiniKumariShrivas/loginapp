
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="login_box">
      <img src="./twiter.png" alt="Twitter_logo"className="logo" />
      <h2 >Sign In to Twitter</h2>
      <button>
      <img src="./google.png" alt="google_logo"className="google" />
      Sign In with Google
      </button>
      <button>
      <img src="./apple.png" alt="apple_logo"className="google" />
      Sign In with Apple
      </button>
      <hr></hr>
      <span>Or</span>
      <form className="form">
        <input type="text"
        className="input"
        placeholder="Phone, Email, Username" />
        <button>Next</button>
      </form>
      <button className="forget"> Forget Password</button>
      <p className="P">Don't Have an account<a>Sign Up</a></p>
      
     </div>
    </div>
  );
}

export default App;
