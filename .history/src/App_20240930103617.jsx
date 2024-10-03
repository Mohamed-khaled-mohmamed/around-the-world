import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-backgroundLight dark:bg-backgroundDark'>
      <Navbar />
      <MainContent className='bg-mainContentLight dark:bg-mainContenDark'/>
    </div>
  );
}

export default App;
