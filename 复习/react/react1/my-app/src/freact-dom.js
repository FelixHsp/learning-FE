import { initVnode } from "./fvdom";

// 虚拟dom变成dom
function render(vnode, container) {
    const node = initVnode(vnode);
    container.appendChild(node);
    // container.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`;
}

export default { render }