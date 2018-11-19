import _ from 'lodash';
import '@/style/basic.css'
import Icron from '@/pic/cat.png'

function component(){
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');

  // icron test
  var myIcron = new Image();
  myIcron.src = Icron;
  element.appendChild(myIcron);

  return element;
}

document.body.appendChild(component());