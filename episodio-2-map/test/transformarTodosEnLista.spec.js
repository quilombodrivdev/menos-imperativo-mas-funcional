var transformarTodosEnLista = require('../transformarTodosEnLista.js');

describe('todos', function() {

    var todos;

    beforeEach(function() {
        todos = [{
            texto: "Levantarme temprano",
            mostrar: false
        }, {
            texto: "Lavarme los dientes",
            mostrar: false
        }, {
            texto: "Tomarme el colectivo",
            mostrar: true
        }, {
            texto: "Ir al trabajo",
            mostrar: true
        }, {
            texto: "Teletransportarme a la facultad",
            mostrar: true
        }];
    });

    it('filtrar y transformar la lista de todos, en otra lista de Componentes ListaItem que contienen el texto', 
        function(){

            var resultado = transformarTodosEnLista(todos);

            expect(resultado).toEqual([
                "<ListaItem>Tomarme el colectivo</ListaItem>", 
                "<ListaItem>Ir al trabajo</ListaItem>", 
                "<ListaItem>Teletransportarme a la facultad</ListaItem>"
            ]);

        })
    
})
