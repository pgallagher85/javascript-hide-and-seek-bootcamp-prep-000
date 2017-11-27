function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const blahBlah = document.getElementsByClassName('target')[0];
  return blahBlah
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rankList.length; i++) {
  rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n
  }
  return rankList;
}

function deepestChild() {
  let current = document.querySelectorAll(`#grand-node`)[0];
  let next = current.children[0];
  while (next) {
    debugger
    if (current.length === 1) {
      return current;
    } else {
    current = next;
    next = current.children[0];
  }
}
}
