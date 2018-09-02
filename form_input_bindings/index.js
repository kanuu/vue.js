new Vue({
  el: '#message',
  data: {
    message: ''
  }
})

new Vue({
  el: '#multiline',
  data: {
    message: ''
  }
})

new Vue({
  el: '#check',
  data: {
    boolean: false
  }
})

new Vue({
  el: '#check_box',
  data: {
    checkedNames: []
  }
})

new Vue({
  el: '#radio',
  data: {
    picked: ''
  }
})

new Vue({
  el: '#selected',
  data: {
    selected: []
  }
})


new Vue({
  el: '#selected-v-for',
  data: {
    selected: 'A',
    options: [
      { text: 'one', value: 'A' },
      { text: 'two', value: 'B' },
      { text: 'three', value: 'C' }
    ]
  }
})