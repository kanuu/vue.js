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

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: '皿洗い'
      },
      {
        id: 2,
        title: 'ゴミ捨て'
      },
      {
        id: 3,
        title: '芝刈り'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})