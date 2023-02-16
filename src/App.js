import BackgroundImg from "./components/BackgroundImg";
import Clock from "./components/Clock";
import SearchBar from "./components/SearchBar";
import Links from "./components/Links";



function App() {
  return (
    <>
      <BackgroundImg/>
      <div className="flex flex-col h-screen justify-between items-center pb-40 pt-40">
          <Clock className='flex'/>
          <SearchBar className='flex'/>
          <Links className='flex'/>
      </div>
    </>
  )
}

export default App;
