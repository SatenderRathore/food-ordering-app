/**
 * <div id='parent'>
 *  <div id='child1'>
 *      <h1>First</h1>
 *      <h2>Second</h2>
 *  </div>
 *  <div id='child2'>
 *      <h3>Third</h1>
 *      <h4>Fourth</h2>
 *  </div>
 * <div>
 * 
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';



const element = React.createElement('div', {id: 'parent'}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement('h1', {}, 'First'),
        React.createElement('h2', {}, 'Second')
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement('h3', {}, 'Third'),
        React.createElement('h4', {}, 'Fourth')
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);