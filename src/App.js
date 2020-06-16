import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = props => {
  console.log(props)
  return (
    <div>
    {/* We borrow our topics URL just tell tell our spa what to re-render.*/}
    <Link to='/topics'>Topics</Link>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
