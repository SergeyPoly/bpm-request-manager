import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Drawer, Button } from 'antd';

import '../../../shared/styles/scss/style.scss';
import { AppRoutes } from '../../routes';
import { Header } from '../../../client/Header/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerInactive } from '../../../client/ProcessesPage/reducer/processesActionCreators';

export const App = () => {
    const visible = useSelector(store => store.processes.drawerActive);
    const dispatch = useDispatch();
    const onClose = () => {dispatch(setDrawerInactive())};
  return (
      <div className={'container-main'}>
          <Header />
          <AppRoutes />
          <Drawer
              title="New request"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
          >
              <p>Process_1</p>
              <p>Process_2</p>
              <p>Process_3</p>
              <p>Process_4</p>

          </Drawer>
      </div>
      );
};
