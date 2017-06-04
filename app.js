new Vue({
    el: '#demo',
    data: {
        selected: 'B',
        content: "hello world",
    }
});

new Vue({
    el: '#demo1',
    data: {
        title: 'todos',
        todos: [
            {
                done: true,
                content: 'Learn JavaScript'
            },
            {
                done: false,
                content: 'Learn Vue.js'
            }
        ]
    }
});