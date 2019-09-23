// import React from 'react'
// import ReactDom from 'react-dom';
import React, { Component } from './freact';
import ReactDom from './freact-dom';
import { link } from 'fs';

function Comp(props) {
    return <h2>Felix {props.name}</h2>
}
class Comp2 extends Component {
    render() {
        return (
            <div>
                <h2>Felix {this.props.name}</h2>
            </div>
        )
    }
}
const users = [
    { name: 'zs', age: 19 },
    { name: 'ls', age: 20 }
]
const jsx = (
    <div id="demo" onClick={() => { alert('click事件') }} style={{
        width: "400px",
        height: "300px",
        color: "red",
        border: "1px solid black",
        margin: "0 auto"
    }}>
        <span>Felix</span>
        <Comp name="函数组件" />
        <Comp2 name="类组件" />
        <ul>
            {users.map(user =>
                <li key={user.name}>name:{user.name} age:{user.age}</li>
            )}
        </ul>
    </div>
)

console.log(jsx);
ReactDom.render(jsx, document.querySelector('#root'));