var transformarTodosEnLista = function(todos) {

    var filtrarTodos = function(todo) {
        return todo.mostrar;
    }

    var transformarTodosEnComponentes = function(todo) {
        return '<ListaItem>' + todo.texto + '</ListaItem>';
    }

    return todos
            .filter(filtrarTodos)
            .map(transformarTodosEnComponentes);
}

module.exports = transformarTodosEnLista;
