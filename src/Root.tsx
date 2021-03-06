import * as React from 'react';
import {Link} from "react-router";
import {Paths} from "./Models";

interface Props {
  children: any
}

export default class Root extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>React Redux sample</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={Paths.COUNTER}>Counter</Link></li>
          <li><Link to={Paths.TODO}>Todo</Link></li>
          <li><Link to="/random_url">NotFound</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}