import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='text-textLight dark:text-textDark  bg-mainContentLight  dark:bg-mainContentDark flex flex-col it m-auto'>
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
