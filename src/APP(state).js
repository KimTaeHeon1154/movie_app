import React from 'react';
import propTypes from 'prop-types';

// state (동적으로 변하는 데이터를 처리하기 위함!)


// React.Component라는 모 클래스로부터 파생된 App 클래스. (React.Component클래스의 인스턴스 모두 사용 가능!)
class App3 extends React.Component{
    // state는 인스턴스이고, 안에 동적인 데이터가 들어간다.
    state = {
        count: 0
    };

    // 버튼에 동작할 update 함수들
    add = () => {
        // 반드시 setState함수를 써서 state를 바꿔줘야 한다. 그래야 render메서드도 새로 호출해서 웹사이트에 자동으로 반영된다!!!
        // current를 이용해서 현재의 state를 호출할 수 있다.
        this.setState(current => ({count: current.count +1}));
    };
    minus = () => {
        this.setState(current => ({count: current.count -1}));
    };

    // 렌더링 되고나서 실행되는 함수 (Mount라는 것은 컴포넌트 만들어질 때와 관련이 있다)
    componentDidMount(){
        console.log("After rendering");
    }

    // state 업데이트 하자마자 실행되는 함수들 들어간다. (즉, setState가 실행이 되면, 렌더링을 하고나서 componentDidUpdate가 실행됨)
    componentDidUpdate(){
        console.log("Just updated");
    }

    // 컴포넌트가 죽을 때 실행되는 함수
    componentWillUnmount(){
        console.log("Component disappear");
    }

    // render 메서드 안에서 return으로 웹페이지에 구현한다. / state는 아래와 같은 방식으로 렌더링할 수 있다.
    render(){
        return (
            <div>
                <h1>I am a Class {this.state.count}</h1>
                {/* 클릭했을 때 add, minus 함수 실행 */}
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}> Minus</button>
            </div>
        );
    }
}

export default App3;