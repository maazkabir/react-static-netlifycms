import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

export default withRouteData(({ cases }) => (
  <div className="blog-cases">
    <Link to="/casess/">{'<'} Back</Link>
    <br />
    <h3>{cases.data.title}</h3>
    <Moment format="MMMM Do, YYYY">{cases.data.date}</Moment>
    <img className="image" src={cases.data.thumbnail} alt="" />
    <Markdown source={cases.content} escapeHtml={false} />
  </div>
))
