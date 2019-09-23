function createElement(type, props, ...children) {
    // console.log(arguments);
    props.children = children;
    delete props.__source;
    delete props._self;
    //type:标签的类型，div
    return { type, props }
}
export default { createElement }

export class Component{
    static isClassComponent = true;
    constructor(props){
        this.props = props;
        this.state = {};
    }
    setState() {

    }
}