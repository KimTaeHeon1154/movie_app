import React from 'react';
import Potato from './Potato';
import propTypes from 'prop-types';
// prop-types를 이용해서, 각 컴포넌트마다 제대로 props를 넘겨받았는지 검사 가능!

// 하나의 파일에서 컴포넌트를 생성함. + name, fav 같은 props를 설정하고, 그를 컴포넌트에서 이용함!
function Food({fav, picture, rating}){
    return (
        // fav 자체를 arg로 받아서 이용함
        <div>
            <h2>I like {fav}</h2>
            <h4>{rating}/5</h4>
            <img src={picture} alt={fav}/>
        </div>
    );
}
// prop-types를 이용해서 food 컴포넌트에서 props를 제대로 넘겨받았는가 검사하는 방법 (만약 해당 기준에 안 맞는 props가 들어가게 되면, console창에 에러가 뜬다)
Food.propTypes = {
    fav: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}

function Game(props){
    // props를 arg로 받아서, 그 아래의 name을 이용함
    return <h2>I love {props.name}, {props.genre}</h2>
}

// id는 각각을 구분하기 위해서 임의로 지정한 것
const foodILike = [
    {
      id:1,
      name: "Kimchi",
      image:
        "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating: 5
    },
    {
      id:2,
      name: "Samgyeopsal",
      image:
        "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.9
    },
    {
      id:3,
      name: "Bibimbap",
      image:
        "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 4.8
    },
    {
      id:4,
      name: "Doncasu",
      image:
        "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 4.7
    },
    {
      id:5,
      name: "Kimbap",
      image:
        "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 4.6
    }
  ];

function renderFood(dish){
    // key부분은 각 element 다르게 보이기 위해 id 지정해준것. (에러 해결하기 위해서 한 것 뿐이다)
    return <Food key={dish.id} fav={dish.name} picture={dish.image} rating={dish.rating}/>
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
        {/* map은 array요소 하나하나당 function을 실행해준다. + Food함수의 내용이 들어오는데, fav에 array요소의 name항목이 들어가게 되는 것 */}
        {foodILike.map(renderFood)}
    </div>);
}

export default App;