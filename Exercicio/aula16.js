const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaemm = 1.80;
let imc; // peso / (alturaemm * alturaemm)
let anoNascimento;

imc = peso / (alturaemm * alturaemm);
anoNascimento = 2019 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaemm} de altura e o seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);