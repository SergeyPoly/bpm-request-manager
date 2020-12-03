import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../shared/styles/scss/style.scss';
import { AppRoutes } from '../../routes';
import { Header } from '../Header';

export const App = () => {
  return (
      <div className={'container-main'}>
          <Header />
          <AppRoutes />
      </div>
      );
};
