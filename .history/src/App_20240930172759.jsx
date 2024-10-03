import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='text-textLight dark:text-textDark  bg-mainContentLight  dark:bg-mainContentDark flex flex-col items-center m-auto'>
      <Navbar />
      SearchBar
      <MainContent/>
    </div>
  );
}

export default App;
