'use strict';

const LinkedList = require('./classes.js')

const SLL = new LinkedList();

function main(){
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');    
  console.log(JSON.stringify(SLL));

}

main();