import { useState } from 'react'
import './App.css'

function detail(props){
    return(
    <div className="detail">
        <div className="row">
            <div className="col-md-6">
                <img src={props.goods.img}/>
        </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.goods.title}</h4>
                <p>{props.goods.content}</p>
                <p>{props.goods.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    )
}
export default detail