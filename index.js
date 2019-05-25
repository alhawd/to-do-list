import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoBox from './components/todobox';
export default class Index extends React.Component {
  render() {
    return (
        <TodoBox />
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("example"))
