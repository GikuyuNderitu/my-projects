import React from 'react';
import { render } from 'react-dom';

import './index.sass';

import App from './app/App';

const Root = () => (
    <App title="my_projects"/>
);

render(<Root />, document.querySelector('#root'));