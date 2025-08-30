/*let numero = 1
console.log(numero)

let gato = ['Cleitinho', 'laranja', 13, 'Paulista', numero, true]

console.log(gato[0])
console.log(`A cor do gato é ${gato[1]}`)

// crie um array com nome, email e nome de usuario para suas credenciais do gitHub. 
// mostre todas essas informações no console. Nos seguinte formato
// Nome: variavel[indice que armazena o nome]
// Email: variavel[indice que armazena o email]
// variavel[indice que armazena o nome de usuario]

let user = [ 'Cleitinho Oliver Nicole Lima da Silva', 'cleitinho@gato.com', 'clietinhoGato']
console.log(`Nome: ${user[0]}`)
console.log(`Email: ${user[1]}`)
console.log(`Nome de Usuário: ${user[2]}`)
// correção de 19:16
console.log(user)
//atualizando o nome
user[0] = 'Cleitinho Lima'
console.log(user)
user[user.length] = 'nova informação adiciona por indice'
console.log(user)
console.log(user.length)
*/




// Um ônibus tem: 
// 1 porta
// 24 janelas
// 42 bancos
// 8 rodas

// a) Crie uma váriavel que armazena as informações do ônibus
// b) atualize a infomação da qtd portas para 2
// c) insira mais uma informação : placa 'hhh-123'

//correção 19:44

let onibus = ['1 porta', '24 janelas', '42 bancos', '8 rodas']
console.log(onibus)

onibus [0] = '2 portas'
console.log(onibus)

//onibus [4] = 'placa "hhh-123'
//atualização usando a propriedade length
onibus [onibus.length] = 'placa "hhh-123'
console.log(onibus)