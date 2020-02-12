import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation';
import "./App.css";

function App() {
    // 라우터 기능 쓰기 위해서, npm i react-router-dom 한 다음, HashRouter, Route를 쓴다!!
    return <HashRouter>
        <Navigation />
        {/* path에는 url이 들어가고, component에는 js파일이 들어간다 */}
        <Route path="/" exact={true} component={Home}/>
        {/* exact={true}를 해줘야, 딱 해당하는 url에서만 렌더링해줌. 안해주면 '/about'에 '/'있으니까 둘다 렌더링 해버림! */}
        <Route path="/about" component={About}/>
    </HashRouter>
}

export default App;