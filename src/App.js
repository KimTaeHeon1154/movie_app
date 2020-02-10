import React from 'react';
import axios from "axios";
// 외부의 데이터를 가져오기 위한 툴, axios
import Movie from "./Movie";
import PropTypes from 'prop-types';
import "./App.css";
// css적용을 위해 css파일 import

// state (동적으로 변하는 데이터를 처리하기 위함!)


// React.Component라는 모 클래스로부터 파생된 App 클래스. (React.Component클래스의 인스턴스 모두 사용 가능!)
class App extends React.Component{
    state = {
        // state안의 내용물을 밖에서 가져오려면, this.state.isLoading 이렇게 해야함~
        isLoading: true,
        movies: []
    };

    async componentDidMount(){
        // 렌더링을 하고 바로 직후에, axios를 사용해 아래 url에 있는 데이터를 가져온다. (데이터를 온전히 가져올때까지 기다려야 하므로 async, await 쓴다.)
        const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log()해보면, 위 json 파일에서 data.data.movies에 실제 영화 데이터들이 들어잇기 때문에 변수를 저렇게 지정해준다.
        this.setState({ movies, isLoading: false});
        // state의 movies array에, json파일의 movies를 넣어준다 + movies 다 옮겨지면 isLoading을 false로 바꾼다.
    }

    // render 메서드 안에서 return으로 웹페이지에 구현한다. / state는 아래와 같은 방식으로 렌더링할 수 있다.
    render(){
        const {isLoading, movies} = this.state;
        return (
            // 아래 구문은, if (isLoading) {"Loading"} else {movies.map(~~~)}와 같음
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(arg => {
                            return <Movie key={arg.id} id={arg.id} year={arg.year} title={arg.title} summary={arg.summary} poster={arg.medium_cover_image} genres={arg.genres}/>
                        })}
                    </div>
                )}
            </section>
        );
    }
}

export default App;