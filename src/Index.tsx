import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from "./Counter";
import Store from "./Store";
import {DispatchActions} from "./Models";

function render() {
  ReactDOM.render(
    <Counter value={Store.getState()} actions={new DispatchActions(Store.dispatch)} />,
    document.getElementById('app')
  );
}

render();
Store.subscribe(render);