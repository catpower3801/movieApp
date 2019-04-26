import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
class App extends Component {
  state={}

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : '타이타닉',
            poster : 'http://image.cine21.com/resize/cine21/poster/2018/0102/17_50_39__5a4b47df43cd9[X230,330].jpg'
          },
          {
            title : '캡틴마블',
            poster : 'http://image.cine21.com/resize/cine21/poster/2019/0225/14_10_18__5c7378ba87fb6[X230,330].jpg'
          },
          {
            title : '신데렐라',
            poster : 'http://image.cine21.com/resize/cine21/poster/2015/0319/13_42_29__550a53b540b97[X230,330].jpg'
          },
          {
            title : '베놈',
            poster : 'http://image.cine21.com/resize/cine21/poster/2018/0921/11_48_04__5ba45be496c69[X230,330].jpg'
          }
        ]
      })
    },5000);
  }
  
  //랜더링 function
  _renderMovies = () =>{
    const movies = this.state.movies.map((x,index)=>{return <Movie title={x.title} poster={x.poster} key={index}/>});
    return movies;
  }
 
 render(){
   return (
      <div className="App">
      {
        //this.state.movies가 있을땐 _renderMovies 실행
        //state가 비어있는 상황일땐 loading... 문구
        this.state.movies ? this._renderMovies() : 'Loading'
      }
      </div>
    );
  }
}
export default App;