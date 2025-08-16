// // Uma loja deseja facilitar o trabalho dos caixas. Será pedido quantos produtos serão vendidos em uma compra e em um loop serão lidos o valor de cada produto. Ao final, exibir qual foi o valor total da compra.

// iterador
let produto = 1
// acumulador
let totalCompra = 0
// Numero max de repetições
let qtdTotalProdutos = Number(prompt('Digite a quantidade de produtos'))

//totalCompra = valorProduto + totalCompra 
while (produto <= qtdTotalProdutos) {
    let valorProduto = Number(prompt(`Digite o valor do produto ${produto}`))

    totalCompra += valorProduto

    console.log(`O sub-total da compra é ${totalCompra}. Foram lidos ${produto} produtos de ${qtdTotalProdutos}`)
    produto++
}

console.log(`O valor total da compra foi ${totalCompra}`)















// let produto = Number(prompt('Digite a quantidade de produtos'))
// // acumulador
// let totalCompra = 0
// // Numero max de repetições


// //totalCompra = valorProduto + totalCompra 
// while (produto > 0) {
//     let valorProduto = Number(prompt(`Digite o valor do produto ${produto}`))

//     totalCompra += valorProduto

//     produto--
// }