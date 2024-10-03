import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='text-textLight dark:text-textDark'>
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
