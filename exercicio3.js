// Exercício 3 (slide 80)
// Usando o array do exercício 2, faça um filter no array e retorne apenas o cat.

const animais = [
    {
        nome: "Tom",
        idade: 3,
        tipo: "cat"
    },
    {
        nome: "Jerry",
        idade: 2,
        tipo: "mouse"
    },
];


let cat = animais.filter((animal) => {
	return animal.tipo === "Cat"
});