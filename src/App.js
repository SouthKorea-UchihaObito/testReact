import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useState } from 'react';
import keyboardData from './data.js';

import {Routes, Route, Link, Outlet} from 'react-router-dom'
import Main from './pages/main';
import Header from './header';
import Detail from './pages/detail';
import Event from './pages/event';

function App() {
  let [product] = useState(keyboardData)

  
  return (
    <div className="App">
      <Header/>
      {/* router로 페이지 나누기 */}
      <Routes>
        <Route path='/' element={ 
          <Main/>
        }/>
        {/*:url파라미터 문법 */}
        <Route path='/detail/:id' element={<Detail product={product}/> }/>
        {/* 404 Page */}
        <Route path='*' element={<div>존재하지않는페이지</div>}/> 
        
        {/*
          Nested Routes 문법 
          하위페이지 연결
        */}
        <Route path='/event' element={<Event/>}>
          {/* 어디에 보여줄지 작성 Outlet */}
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path='two' element={<p>생일기념 쿠폰이벤트</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
