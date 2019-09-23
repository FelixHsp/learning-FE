// vdom转换为dom
// diff算法
//vtype元素类型：1-html元素；2-function组件；3-class组件
export function createVNode(vtype, type, props) {
    const vnode = { vtype, type, props };
    return { vnode }
}