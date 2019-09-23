// import React from 'react'
// import ReactDom from 'react-dom';
import React, { Component } from './freact';
import ReactDom from './freact-dom';
import { link } from 'fs';

function Comp(props) {
    return <h2>hi {props.name}</h2>
}
class Comp2 extends Component {
    render() {
        return (
            <div>
                <h2>hi {this.props.name}</h2>
            </div>
        )
    }
}
const users = [
    { name: 'zs', age: 19 },
    { name: 'ls', age: 20 }
]
const jsx = (
    <div id="demo" onClick={() => { alert('1') }} style={{ color: "red", border: "1px solid black" }}>
        <span>hi</span>
        <Comp name="函数组件" />
        <Comp2 name="类组件" />
        <ul>
            {users.map(user =>
                <li key={user.name}>{user.name}</li>
            )}
        </ul>
    </div>
)

console.log(jsx);
ReactDom.render(jsx, document.querySelector('#root'));