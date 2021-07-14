import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import './styles/App.css';

function App() {
  return (
    <>
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <Header />
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
