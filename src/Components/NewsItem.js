import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {

  render() {
   let  { title, description,imageUrl,newsUrl,author, date, source }= this.props;
    return (
      <div className="my-3">
       <div className="card" style={{width: "18rem"}}>
       <img src={!imageUrl?"https://images.indianexpress.com/2023/04/Quantum-information-sharing-20230427.jpg":imageUrl} className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">{title}... <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
    <span class="visually-hidden">unread messages</span>
  </span>
</h5>
       <p className="card-text">{description}...</p>
       <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
       <a ref="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
