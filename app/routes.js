// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { isNil } from 'lodash';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

function requireAuth(nextState, replace, callback) {
  const userExists = !isNil(localStorage.getItem('user')) && localStorage.getItem('user') !== '';
  const user = (userExists) ? JSON.parse(localStorage.getItem('user')) : { name: '' };
  if (user.name === '') replace('/');
  return callback();
}

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',

      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/NavigationContainer/reducer'),
          System.import('containers/NavigationContainer/sagas'),
          System.import('containers/ShipInfoContainer/reducer'),
          System.import('containers/ShipInfoContainer/sagas'),
          System.import('containers/Wccontainer/reducer'),
          System.import('containers/Wccontainer/sagas'),
          System.import('containers/LoginContainer/reducer'),
          System.import('containers/LoginContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          component,
          navigationReducer,
          navigationSagas,
          shipInfoReducer,
          shipInfoSagas,
          wcReducer,
          wcSagas,
          loginReducer,
          loginSagas]) => {
          injectReducer('navigationContainer', navigationReducer.default);
          injectSagas('navigationContainer', navigationSagas.default);
          injectReducer('shipInfoContainer', shipInfoReducer.default);
          injectSagas('shipInfoContainer', shipInfoSagas.default);
          injectReducer('wccontainer', wcReducer.default);
          injectSagas('wccontainer', wcSagas.default);
          injectReducer('loginContainer', loginReducer.default);
          injectSagas('loginContainer', loginSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/ships/:shipName',
          name: 'shipInfoContainer',
          onEnter: requireAuth,
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/ShipInfoContainer/reducer'),
              System.import('containers/ShipInfoContainer/sagas'),
              System.import('containers/ShipInfoContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('shipInfoContainer', reducer.default);
              injectSagas('shipInfoContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/rule',
          name: 'rulesContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/RulesContainer/reducer'),
              System.import('containers/RulesContainer/sagas'),
              System.import('containers/RulesContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('rulesContainer', reducer.default);
              injectSagas('rulesContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/worldcup',
          name: 'wccontainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/Wccontainer/reducer'),
              System.import('containers/Wccontainer/sagas'),
              System.import('containers/Wccontainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('wccontainer', reducer.default);
              injectSagas('wccontainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/forecast',
          name: 'forecastContainer',
          onEnter: requireAuth,
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/ForecastContainer/reducer'),
              System.import('containers/ForecastContainer/sagas'),
              System.import('containers/ForecastContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('forecastContainer', reducer.default);
              injectSagas('forecastContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/positions',
          name: 'positionContainer',
          onEnter: requireAuth,
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/PositionContainer/reducer'),
              System.import('containers/PositionContainer/sagas'),
              System.import('containers/PositionContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('positionContainer', reducer.default);
              injectSagas('positionContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
