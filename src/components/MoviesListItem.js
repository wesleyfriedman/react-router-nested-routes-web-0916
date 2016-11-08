import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  const movie = props.movie;
  
  return(
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  )
}
