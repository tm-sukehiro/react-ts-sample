import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from "react-router";
import Root from "./Root";
import NotFound from "./NotFound";
import CounterRoot from "./counter/Root";
import {Provider} from "react-redux";
import Store from "./Store";
import {Paths} from "./Models";

function render() {
  ReactDOM.render(
    <Provider store={Store}>
      <Router history={browserHistory}>
        <Route path='/' component={Root}>
          <Route path={Paths.COUNTER} component={CounterRoot} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

render();
Store.subscribe(render);