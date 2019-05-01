import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
class App extends Component {
  state={}
  _callApi = () =>{
    //fetch() 자바스크립트로 외부의 url을 가져옴
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count').then(b=>b.json()).then(c=>c.data.movies).catch(err=>console.log(err));
    //에러가 났을떄 catch
  } 
  //async : fetch로 받아온 데이터와 그걸 처리하는 then들을 더욱 간결하고 명료하게 만들어주는 도구
  //fetch(url).then(a => a.json()).then............
  //fetch와 then을 사용해서 일일이 모든 동작을 지정해주지 않고, fetch가 끝난 다음 바로 실행시킬 것들을 지정할 수 잇게 만드는 tool 

  //await
  //async : 비동기
  //async : 이전라인 의 작업이 끝날때까지 기다리지 않고 실행 될 작업
  _getMovies= async () => {
    const movies = await this._callApi();
    console.log(movies)
    this.setState({
      movies
    })
  }
  componentDidMount(){
    this._getMovies();
  }
/*
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
  */
  
  //랜더링 function
  _renderMovies = () =>{
    const movies = this.state.movies.map((x,index)=>{return <Movie title={x.title} poster={x.medium_cover_image} key={index} genres={x.genres} synopsis={x.synopsis}/>});
    return movies;
  }
 
 render(){
   return (
      <div className="App">
      {
        //this.state.movies가 있을땐 _renderMovies 실행
        //state가 비어있는 상황일땐 loading... 문구
        this.state.movies ? this._renderMovies() : 'Loading'
        /*if(this.state.moveis){
          this._renderMovies()
        }else{
          'Loading'
        }
        */
      }
      </div>
    );
  }
}
export default App;