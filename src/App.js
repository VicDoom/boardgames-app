import './App.scss';
import {Main, Item, About} from "./pages";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<div>404 Not found</div>} />
      </Routes>
  );
}

export default App;
