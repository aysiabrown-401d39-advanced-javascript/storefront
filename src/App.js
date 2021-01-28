import Categories from './components/categories';
import Header from './components/header';
import Products from './components/products';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
        <Header/>
        <Categories/>
        <Products />
        <Footer/>
    </div>
  );
}

export default App;
