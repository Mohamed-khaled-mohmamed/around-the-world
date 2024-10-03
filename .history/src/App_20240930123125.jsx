import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='text-textLight dark:text-textDark  bg-mainContentLight  dark:bg-mainContentDark  m-auto'>
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
