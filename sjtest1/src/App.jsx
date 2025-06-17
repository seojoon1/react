import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' //css파일을 사용하려면 상단에 import'css파일 경로'

function App() {
  const post = '안녕하세여'; //변수를 html 안에 넣고싶으면 {변수명} 이게 데이터 바인딩
  const [글제목, TC] = useState([]); //state를 쓰면 html 이 자동 재렌더링 됨
  const [Day, setDay] = useState([]);
  const [Content, setContent] = useState([]);
  const logo= 'React공부';
  const [like, likeChange] = useState([]);
  const [modal, setModal] = useState(false); //2현재 UI상태를 state 로 저장
  const [Title, setTitle] = useState(0);
  const [Input, setInput] = useState('')
  const [InputDate, setInputDate] = useState('')
  const [InputContent, setInputContent] = useState('')
  return ( //리턴 안에서만 html 을 작성해야하고 리턴 안에는 병렬로 태그 2개이상 기입을 금지함
    <div className='App'> 
      <div className='black-nav'> 
        <h4>{logo}</h4> {/*스타일은 오브젝트로  style={{color:'red', fontSize: '32px'}}이런식으로 */}
      </div>
      {/* <button onClick={()=>{
        const copy2 = [...글제목];
        const ganada = copy2.sort();
        TC(ganada);
      }}>가나다순 정렬</button> */}
        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i}>
                <h4 className = 'title' onClick={()=>{
                  setModal(!modal); setTitle(i);}}>
                    {글제목[i]} 
                    <span className='like' onClick={(e)=>{
                      e.stopPropagation(); //이벤트 버블링 막음
                      const copy = [...like];
                      copy[i] += 1;
                      likeChange(copy)
                      }}>👍{like[i]}
                    </span>
                    <button onClick={e=>{
                      e.stopPropagation();
                      const copyT = [...글제목];
                      const copyL = [...like];
                      const copyC = [...Content];
                      const copyD = [...Day];
                      copyT.splice(i, 1);
                      TC(copyT)
                      copyC.splice(i, 1);
                      setContent(copyC)
                      copyL.splice(i, 1);
                      likeChange(copyL)
                      copyD.splice(i, 1);
                      setDay(copyD)
                      setModal(Modal = false);
                    }}>삭제</button></h4>
                <p>{Day[i]}</p>
              </div>)
          })
        }
        <div>
          <input type="text" placeholder='제목을 입력하세요' onChange={(e)=>{
            setInput(e.target.value);
          }}/><br/>
          <input type="date" placeholder='날짜를 입력하세요' onChange={(e)=>{
            setInputDate(e.target.value);
          }}/><br/>
          <textarea  placeholder='내용을 입력하세요' onChange={(e)=>{
            setInputContent(e.target.value);
          }}/>
          <button onClick={()=>{
            글제목.push(Input);
            Day.push(InputDate);
            Content.push(InputContent);
            like.push(0)
          }}>추가</button>
        </div>
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
