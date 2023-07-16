import './App.css';
// import CartItem from './components/cart-item/CardItem';
// import Header from './components/layer/header/header';
// import Footer from './components/layer/footer/footer';
// import Button from './components/button/button';
// import Homework from './components/homework/homework';
import Tab from './components/tab/tab';
// import Accorddions from './components/accorddions/accorddions';



// import { faHome, faHouse, faGhost } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() { // = Home Page
    return (
        <div className="App">
            {/* <Header/>
            <div className='group-item'>
                <CartItem title="Thang dap trai1" descriptions="em iu dep gai1"/>
                <CartItem title="Thang dap trai2" descriptions="ut xinh "/>
                <CartItem title="Thang dap trai3" descriptions="ut xinh dep"/>
                <CartItem title="Thang dap trai4" descriptions="ut "/>
            </div>
            <div className='group-button'>
                <Button title="Hello HAT"/>
                <Button title="Hello VN"/>
                <Button title="Hello NHN"/>
                <button className='btn btn-primary'>
                <FontAwesomeIcon icon={faHome} />
                  Button bootstrap</button>
                  <FontAwesomeIcon icon={faHouse} />
                  <FontAwesomeIcon icon={faGhost} />

            </div> */}
            {/* <div className='products' >
                <Homework/>
            </div> */}
            <div>
                 <Tab/>
            </div>
           
            {/* <div>
            <Accorddions/>
        </div> */}

            {/* <Footer/> */}
        </div>
        

    );

}

export default App;
