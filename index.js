function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}

function increaseRankBy(n){
	const listElements = document.querySelectorAll('ul.ranked-list li')
	for (let i=0; i < listElements.length; i++) {
		listElements[i].innerHTML = parseInt(listElements[i].innerHTML) + n
	}
}
