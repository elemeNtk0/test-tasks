import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Helmet } from 'react-helmet';

import './styles/App.css';

function App() {
  return (
    <div className='main-page'>
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <Helmet>
        <title>PropellerAds Test task</title>
        <meta name='description' content='PropellerAds test task by Alexander Senchenko' />
      </Helmet>
      <Header />
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
