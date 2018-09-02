var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

let object = new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})

let vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})

let numbers = new Vue({
  el: '#numbers',
  data: {
    numbers: [ 1, 2, 3, 4 ,5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 1
      })
    }
  }
})


new Vue({
  el: '#range'
})

new Vue({
  el: '#items',
  data: {
    items: [
      { message: '眠い' },
      { message: '起きた' }
    ]
  }
})