import { useState } from 'react'
import './App.css'
import { useParams } from 'react-router-dom'

function detail(props){
    let {id} = useParams();
    return(
    <div className="detail">
        <div className="row">
            <div className="col-md-6">
                <img src={props.goods[id].volume == 0 ? '/soldout.jpg' : props.goods[id].img}/>
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.goods[id].title}</h4>
                <p>{props.goods[id].content}</p>
                <p>{props.goods[id].price}</p>
                <button className="btn btn-danger" onClick={()=>{
                    alert("기다려주세요")
                }}>주문하기</button> 
            </div>
        </div>
    </div> 
    )
}
export default detail