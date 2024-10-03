import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-backgroundLight dark:bg-backgroundDark'>
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
