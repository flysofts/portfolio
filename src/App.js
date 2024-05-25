import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skill from './components/Skill';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import store from './redux/store';






function App() {
  
  return (
    <>
    <Provider store={store}>
  <Home/>
  <About/>
  <Skill/>
  <Work/>
  <Contact/>
    </Provider>
  
    
    </>
  );
}

export default App;
