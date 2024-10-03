import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-backgroundLight dark: '>
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
