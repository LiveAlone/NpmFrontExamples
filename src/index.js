import _ from 'lodash';
import '@/style/basic.css';
import Icron from '@/pic/cat.png';
import Data from '@/data/data.xml';
import printMe from '@/sub_index.js';

function component(){
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');

  // icron test
  var myIcron = new Image();
  myIcron.src = Icron;
  element.appendChild(myIcron);

  // data content
  // console.log(Data);

  // btn to print content
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.append(btn);

  return element;
}

document.body.appendChild(component());