import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
export class News extends Component {
 
    articles = []
  constructor(props){
    super(props);
    // console.log("Hello I am a Constructor");
    this.state = {
      articles : this.articles,
      loading : false,
      page:1
    }
  
  }
  

  
  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=822b5364a9004db5b5c01ada6feb009d&pagesize=15";
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({articles : passedData.articles , totalResults : passedData.totalResults})
  }

  handlePrevClick = async()=>{
    console.log("Previous");
    // this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=822b5364a9004db5b5c01ada6feb009d&page=${this.state.page - 1}&pagesize=15`;
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({
      page: this.state.page - 1, 
      articles : passedData.articles
      
  })
  // this.props.setProgress(100);

  }

  handleNextClick = async()=>{

    console.log("Next");
    // this.props.setProgress(0);

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/15)){
     
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=822b5364a9004db5b5c01ada6feb009d&page=${this.state.page + 1}&pagesize=15`;
    let data = await fetch(url);
    let passedData = await data.json()  
    console.log(passedData);
    this.setState({
      page: this.state.page + 1, 
      articles : passedData.articles
    
    })
    //  this.props.setProgress(100);

  }
  }
  

  render() {
    return (
      
        <div className="container my-3 text-center text-dark">
          <h2 id="new"> NewsMonkey - {this.props.category +" "} Top Headlines </h2>
          <br />
          <div className="timing">
            
          </div>
          <br />
           <spinner/>
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 75):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
               date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          <br />
          <br />
          <div className="container d-flex justify-content-between">
          <button setProgress={this.setProgress} disabled={this.state.page <= 1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          
          <button  setProgress={this.setProgress}  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/15)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
     
      </div>
    )
  }
}

export default News
