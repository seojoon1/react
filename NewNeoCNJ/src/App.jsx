import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown, Col, Row} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.jsx';
import Detail from './detail1.jsx';
function App() {
  const[goods, setgoods] = useState(data)
  const navigate = useNavigate();
  return (
    <div className='App'>
      <Navbar expand="lg" className="customNav">
      <Container>
        <Navbar.Brand href="/">NewNeoCNJ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/detail">어쩌구</Nav.Link>
            <Nav.Link href="#link">저쩌구</Nav.Link>
            <NavDropdown title={<span className='NDDT'>문의하기</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/event/one">이벤트1</NavDropdown.Item>
              <NavDropdown.Item href="/event/two">
              이벤트2
              </NavDropdown.Item>
              <NavDropdown.Item href="*">다</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://namu.wiki/w/CNJ%20esports">
                CNJ나무위키
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path='/' element={<div>
              <div className='main-box'></div>  
              <Container>
                <Row>
                  {
                  goods.map((a,i)=>{
                    return(
                    <List key={a.id} goods = {goods[i]} i = {i}/> //네스트라우트 가능
                  )
                })
                }
                </Row>
              </Container>
        </div>} />
        <Route path='/detail' element={
          <Detail goods = {goods[0]}/>
          } />
        <Route path='*' element={<div><h1>어 나가~</h1></div>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>돌아가렴</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 송글즙 2팩 즉정</div>}/>
          <Route path='two' element={<div>1주년 이벤트 쿠폰 받아가기</div>}/>
        </Route>
      </Routes>
    </div>
  )
}
function List(props){
  return(
      <Col>
          <img src={props.goods.img} className='ListImg'/>
          <h4>{props.goods.title}</h4>
          <p>{props.goods.price}</p>
      </Col>
  )
}
function About(){
  return(
    <div><h1>반갑다 나가라</h1>
      <Outlet/>
    </div>
  )
}
function Event(){
  return(
    <div><h1>오늘의 이벤트</h1>
      <Outlet/>
    </div>
  )
}
export default App
