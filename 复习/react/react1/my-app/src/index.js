// import React from 'react'
// import ReactDom from 'react-dom';
import React, { Component } from './freact';
import ReactDom from './freact-dom';

function Comp(props) {
    return <h2>hi {props.name}</h2>
}
class Comp2 extends Component {
    render(props) {
        return (
            <div>
                <h2>hi {this.props.name}</h2>
            </div>
        )
    }
}
const jsx = (
    <div id="demo">
        <span>hi</span>
        <Comp name="函数组件" />
        <Comp2 name="类组件" />
    </div>
)

console.log(jsx);
ReactDom.render(jsx, document.querySelector('#root'));