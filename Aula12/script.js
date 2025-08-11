const x = 10
// declaração e atribuição
// constantes aceitam apenas declaração e atribuição
// x = 200 ---> dá erro :)
let y = 20
// declaração e atribuição
// let y = 30
// reatribuição (atualização de valor)
// variáveis do tipo let aceitam declaração, atribuição e reatribuição
// let y = 'outro valor'

var w = 'Káthia'
// variáveis do tipo var aceitam declaração, atribuição e reatribuição, redeclaração.
var w = 80
console.log(x)
console.log(y)
console.log(w)
// função nativa que  exibe as informações das variáveis no console do navegador
// objetivo de debugar a aplicação, durante o desenvolvimento e fazer comunicações com o desenvolvedor

alert(x)
/*função nativa exibe as informações no navegador para o usuário e não tem retorno para o programa. Pausa o programa e aguarda o usuário confirmar o ok*/

y= confirm( "valor de x " + x)
// função que exibe as informações no navegador como uma pergunta, e dá a opção para o usuário confirmar ou cancelar a pergunta. Retorna true ou false. Pausa o programa e aguarda o usuário confirmar ou cancelar a pergunta
console.log(y) // mostra o novo valor de y (reatribuição)

y = prompt("digite seu nome")
console.log(y)
//função que exibe as informações no navegador como uma pergunta, e dá a opção para o usuário digitar algo. Retorna o que o usuário digitou. Pausa o programa e aguarda o usuário digitar algo
