import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
    <div className="nav">
        {/* react-router-dom의 Link를 이용하면, Navigation 이 부분은 새로고침 안하고 내용만 바꿀 수 있다. (페이지 전체 새로고침 되는 방식 ㄴㄴ) / Link는 무조건 라우터 안에서 써야한다.*/}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

export default Navigation;