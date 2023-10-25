import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color='blue'
//         onSetRating={setMovieRating}
//       ></StarRating>
//       <p>The movie has a rating of {movieRating} stars.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      className='test'
      messages={['Very Bad', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={4}
    />
    <Test /> */}
  </React.StrictMode>
);
