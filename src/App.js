import React from 'react';
import Potato from './Potato';

// 하나의 파일에서 컴포넌트를 생성함. + name, fav 같은 props를 설정하고, 그를 컴포넌트에서 이용함!
function Food({fav}){
    return (
        // fav 자체를 arg로 받아서 이용함
        <h2>I like {fav}</h2>
    );
}
function Game(props){
    // props를 arg로 받아서, 그 아래의 name을 이용함
    return <h2>I love {props.name}, {props.genre}</h2>
}


// 컴포넌트는, html형식의 코드를 return하는 함수!
function App() {
    return (
    <div>
        Hello!!
        {/* 이런식으로 컴포넌트를 다른 컴포넌트 안에 넣을 수 있다!! */}
        <Potato/>
        {/* 이런 식으로 컴포넌트에 특징(properties, props)를 줄 수 있다. */}
        <Food fav="kimchi"/>
        <Food fav="ramen"/>
        <Game name="LOL" genre="AOS"/>
        <Game name="Battle Ground" genre="FPS"/>
    </div>);
}

export default App;