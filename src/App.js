import './App.scss';
import {Main, Item, About, Cart, CatalogPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/item/:id' element={<Item />} />
              <Route path='/about' element={<About />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/catalog/:type' element={<CatalogPage />} />
              <Route path='*' element={<div>404 Not found</div>} />
          </Routes>
      </Provider>
  );
}

export default App;
