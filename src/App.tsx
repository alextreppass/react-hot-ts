import * as React from 'react';
import { AppState } from './app-state';
import { inject, observer } from 'mobx-react';

@inject('appState')
@observer
export class App extends React.Component<{appState?: AppState}, {}> {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <div>Welcome to hot-reloading React written in TypeScript! { this.props.appState.count }</div>
      </div>
    );
  }
}
