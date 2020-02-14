import React from "react";

// movie.js에서 Link에 의해 보내진 state는, location.state.(변수)에 저장되어 있음!

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state === undefined){
            // 홈으로 redirect
            history.push("/");
        }
    }
    render(){
        const {location}=this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        } else{
            return null;
        }
    }
}

export default Detail;