// diff算法
//vtype元素类型：1-html元素；2-function组件；3-class组件
export function createVNode(vtype, type, props) {
    const vnode = { vtype, type, props };
    return vnode;
}
// vdom转换为dom
export function initVnode(vnode) {
    const { vtype } = vnode;
    if (!vtype) {
        //文本节点
        return document.createTextNode(vnode);
    }
    if (vtype === 1) {
        return createElement(vnode);
    } else if (vtype === 2) {
        return createClassComp(vnode);
    } else if (vtype === 3) {
        return createFuncComp(vnode);
    }
}
function createElement(vnode) {
    // 根据type创建元素
    const { type, props } = vnode;
    const node = document.createElement(type);
    //处理特殊属性
    const { key, children, ...rest } = props;
    Object.keys(rest).forEach(k => {
        if (k === 'className') {
            node.setAttribute('class', rest[k]);
        } else if (k === 'htmlFor') {
            node.setAttribute('for', rest[k]);
        } else if (k === 'style' && typeof rest[k] === 'object') {
            const style = Object.keys(rest[k]).map(s => s + ':' + rest[k][s]).join(';');
            node.setAttribute("style", style);
        } else if (k.startsWith("on")) {
            //onClick事件
            const event = k.toLowerCase();
            node[event] = rest[k];
        } else {
            node.setAttribute(k, rest[k]);
        }
    });
    // 递归子元素
    children.forEach(c => {
        if(Array.isArray(c)){
            c.forEach(n => node.appendChild(initVnode(n)))
        }else{
            node.appendChild(initVnode(c));
        }
    })
    return node;
}
function createClassComp(vnode) {
    //type 是class组件的声明
    const { type, props } = vnode;
    const component = new type(props);
    const vdom = component.render();
    return initVnode(vdom);

}
function createFuncComp(vnode) {
    //type是函数
    const { type, props } = vnode;
    const vdom = new type(props);
    return initVnode(vdom);
}