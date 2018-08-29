var data = { a: 1 }

var vm = new Vue({
  data: data
})

vm.a == data.a

vm.a = 2
console.log(data.a)

data.a = 3
console.log(vm.a)

var obj = {
  foo: 'bar'
}

// Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})

// var data = { a: 1 }
// var vm = new Vue({
//   el: '#sample',
//       data: data
// })
//
// vm.$data === data
// vm.$el === document.getElementById('example')
//
// vm.$watch('a', function (newValue, oldValue) {
//
// })

new Vue({
  data: {
    a: 1
  },
  created: function () {
    console.log('a is: ' + this.a)
  }
})