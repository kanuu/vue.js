const array = ['A', 'B', 'C', 'D']
const random = array[Math.floor(Math.random() * array.length)]

new Vue({
  el: '#if',
  data: {
    type: random
  }
})