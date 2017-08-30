import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { AppContainer } from 'react-hot-loader';

import { App } from './App';
import { AppState } from './app-state';

useStrict(true);
const appState = new AppState();
const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <section>
      <Provider appState={appState}>
        <App />
      </Provider>
      <DevTools />
    </section>
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require<{App: typeof App}>('./App').App;
    ReactDOM.render(
      <AppContainer>
        <section>
          <Provider appState={appState}>
            <NextApp />
          </Provider>
          <DevTools />
        </section>
      </AppContainer>
      ,
      rootEl
    );
  });
}
