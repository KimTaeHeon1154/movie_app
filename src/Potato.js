// 모든 컴포넌트를 작성할 때마다, react를 import해줘야 함! (컴포넌트를 쓰는 방식을 jsx라고 부른다)
import React from "react";
// Potato2.js 컴포넌트를 안에 쓰기 위해서 import를 해줌!
import Potato2 from "./Potato2";

function Potato() {
    return (
        <div>
            <h5>taeheon Kim</h5>
            <Potato2/>
        </div>
    )
}

// index.js에서 어떤 태그에 위 컴포넌트를 넣을지 정해주면 된다.
export default Potato;