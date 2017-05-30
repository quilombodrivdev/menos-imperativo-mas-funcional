var filtrarSuperHeroes = require('../filtrarSuperHeroes.js');

describe('super heores', function() {

    it('obtener super heroes que tienen poderes', function() {

        var heroes = [{
            nombre: "Ragnar",
            tieneSuperPoderes: false
        }, {
            nombre: "Batman",
            hasSuperPower: false
        }, {
            nombre: "Goku",
            tieneSuperPoderes: true
        }, {
            nombre: "John Snow",
            tieneSuperPoderes: false
        }, {
            nombre: "SuperMan",
            tieneSuperPoderes: true
        }];

        var resultado = filtrarSuperHeroes(heroes);

        expect(resultado).toEqual([{
            nombre: "Goku",
            tieneSuperPoderes: true
        }, {
            nombre: "SuperMan",
            tieneSuperPoderes: true
        }]);

    })
});
