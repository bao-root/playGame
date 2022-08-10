import App from "../App";
import Login from "../page/Login";
import Refistered from "../page/Registered";
import { ReactElement } from "react";
import {
  Snake,
  Other
} from '../games';

interface routerInterface {
  path: string;
  name: string;
  hidden: boolean;
  element: ReactElement;
  children?: Array<routerInterface>;
}

const routerMap: Array<routerInterface> = [
  {
    path: '/',
    name: '主页',
    hidden: true,
    element: <App />,
    children: [
      {
        path: 'snake',
        name: '贪吃蛇',
        hidden: true,
        element: <Snake />,
      },
      {
        path: 'other',
        name: '其他',
        hidden: true,
        element: <Other />,
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    hidden: false,
    element: <Login />
  },
  {
    path: '/registered',
    hidden: false,
    name: '注册',
    element: <Refistered />
  }
]

export default routerMap;