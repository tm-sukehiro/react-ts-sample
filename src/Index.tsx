import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from "react-router";
import Root from "./Root";
import NotFound from "./NotFound";
import TodoListRoot from "./todo/Root";
import CounterRoot from "./counter/Root";
import {Provider} from "react-redux";
import Store from "./Store";
import {Paths} from "./Models";
import {getRequest} from "./utils/HttpClient";

function failCB(): void {}

function successCB(val: any): void {
  const Routes = (
    <Route path='/' component={Root}>
      <Route path={Paths.TODO} component={TodoListRoot} />
      <Route path={Paths.COUNTER} component={CounterRoot} />
      <Route path="*" component={NotFound} />
    </Route>
  );
  ReactDOM.render(
    <Provider store={Store}>
      <Router history={browserHistory} routes={Routes}>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

getRequest<any>("authCheck", successCB, failCB);