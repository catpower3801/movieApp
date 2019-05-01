import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'
/*
class Movie extends Component..
장정:state를 쓸 수 있음
    -componentDidMount(),
    compontentWillMount().....
단점:코드가 복잡해짐

function Movie({props1,prosp2})
함수형 컴포넌트(domb Component)
단지 어떤 값을 return 해서 출력해주기만들
위한 컴포넌트
장점:코드가 단순
단점:state가 없음
*/
function MovieGenres(genres){
    return(
        <span>{genres}</span>
    )
}
function Movie({title,poster,genres,synopsis}){
    return(
        <div className="card">
            <h1>{title}</h1>
            <Movie_poster poster={poster}/>
            <p>{/*genres.map((y,index) => <MovieGenres genres={y} key={index}/>)*/console.log(MovieGenres(genres))}</p>
            <p><LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
            /></p>
        </div>
    )
}
/*
class Movie extends Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <Movie_poster poster={this.props.poster}/>
            </div>
        )
    }
}
*/

/*
component
- props : 부모로부터 받아오는 값(읽기 전용)
- state : 각각의 컴포넌트가 가지는 객체 string
    state에 변경사항이 있을때 마다
    component가 새로 랜더링 되기 떄문에!!
*/
function Movie_poster({poster}){
    return(
        <img src={poster} alt="Movie Poster"/>
    )
}
/*
class Movie_poster extends Component{
    static propTypes ={
        poster : PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}
*/

Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
Movie_poster.propTypes={
    poster:PropTypes.string.isRequired
}
export default Movie;