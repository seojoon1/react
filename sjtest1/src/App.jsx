import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' //css파일을 사용하려면 상단에 import'css파일 경로'

function App() {
  const post = '안녕하세여'; //변수를 html 안에 넣고싶으면 {변수명} 이게 데이터 바인딩
  const [글제목, TC] = useState(['스팀 게임 추천  ', '콘솔 게임 추천', '모바일 게임 추천']); //state를 쓰면 html 이 자동 재렌더링 됨
  const [Day, setDay] = useState(['6/12', '6/18', '15/57']);
  const [Content, setContent] = useState(['스팀 게임 추천  ', '콘솔 게임 추천', '모바일 게임 추천']);
  const logo= 'React공부';
  const [like, likeChange] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false); //2현재 UI상태를 state 로 저장
  const [Title, setTitle] = useState(0);
  return ( //리턴 안에서만 html 을 작성해야하고 리턴 안에는 병렬로 태그 2개이상 기입을 금지함
    <div className='App'> 
      <div className='black-nav'> 
        <h4>{logo}</h4> {/*스타일은 오브젝트로  style={{color:'red', fontSize: '32px'}}이런식으로 */}
      </div>
      <button onClick={()=>{
        const copy2 = [...글제목];
        const ganada = copy2.sort();
        TC(ganada);
      }}>가나다순 정렬</button>
      
      {/* <div className='list'>class 가 아닌 className 을 사용해서 class를 넣음
        <p className='title' onClick={()=>{
          setModal(!modal);
        }}>{글제목[0]} <span onClick={()=>{
          likeChange(like+1);
        }}>따봉봉</span>{like}</p> 
        <p>6월 15일 발행</p>
      </div> */}
      
      {/* <div className='list'>
        <p className='title'>{글제목[1]} 
          <span onClick={()=>{
          let copy = [...글제목]; 스프레드 문법 [...글제목] 을 사용해 글제목이라는 array에 괄호를 벗기고 다시 입히면서 완전히 독립적인 사본으로 바뀜
          copy[1] = '종목 추천';
          TC(copy);
          }}>똥똥</span></p> 
        <p>6월 15일 발행</p>
      </div> */}

      {/* <div className='list'>
        <p className='title' onClick={()=>{
          setModal(!modal);
        }}>{글제목[2]}</p> 
        <p>6월 15일 발행</p>
      </div> */}
        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i}>
                <h4 className = 'title' onClick={()=>{
                  setModal(!modal); setTitle(i);}}>
                    {글제목[i]} </h4>
                    <span className='like' onClick={()=>{
                      const copy = [...like];
                      copy[i] += 1;
                      likeChange(copy)
                      }}>👍{like[i]}
                    </span>
              <p>{Day[i]}</p>
            </div>)
          })
        }
        <input type="text" onChange={()=>{ //input 이벤트는 onChange or onInput
          
        }}/>
          {
              modal == true ? <Modal 글제목={글제목} Title={Title} Content={Content} Day={Day}/> : null //삼항연산자 조건문 ? '맞음 : '아님 프롭스로 컴포너트에 스테이트 보내기 변?수 = {스테이트명}
          }
    </div> 
  );
}
function Modal(props){ //컴포넌트 1.funtion 만들고 return()안에 html 넣고 <함수명></함수명>으로 사용
  return(  //1 html css 상태를 저장
    <div className="modal"> 
        <h4>{props.글제목[props.Title]}</h4>
        <p>{props.Day[props.Title]}</p>
        <p>{props.Content[props.Title]}</p>
      </div>
  )
}
function Title(props){
  return(
    <div>

    </div>
  )
}
export default App
