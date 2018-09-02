let example = new Vue ({
  el: '#example-1',
  data: {
    counter: 0
  }
})

let greet = new Vue({
  el: '#greet',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})