// 실제 웹페이지에 렌더링하는 파일

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// react는 한번에 하나의 컴포넌트만 렌더링할 수 있다.
ReactDOM.render( < App /> , document.getElementById('root'));
