import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ cases }) => (
  <div>
    <h1>It's CASE time.</h1>
    <br />
    All Cases:
    <ul>
      {cases.map(cases => (
        <li key={cases.data.slug}>
          <Link to={`/blog/cases/${cases.data.slug}`}>{cases.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
