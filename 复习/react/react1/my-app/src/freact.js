import { createVNode } from "./fvdom";
function createElement(type, props, ...children) {
    // console.log(arguments);
    props.children = children;
    delete props.__source;
    delete props._self;
    //type:标签的类型，div
    let vtype;
    if (typeof type === "string") {
        vtype = 1;
    } else if (typeof type === "function") {
        if (type.isClassComponent) {
            //类组件
            vtype = 2;
        } else {
            //函数组件
            vtype = 3;
        }
    }
    return createVNode(vtype,type,props);
}
export default { createElement }

export class Component {
    static isClassComponent = true;
    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState() {

    }
}