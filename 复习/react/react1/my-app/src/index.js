// import React from 'react'
import React from './freact';
import ReactDom from 'react-dom';

function Comp(props){
    return <h2>hi {props.name}</h2>
}
const jsx = (
    <div id="demo">
        <span>hi</span>
        <Comp name="felix"/>
    </div>
)

console.log(jsx);
ReactDom.render(jsx,document.querySelector('#root'));