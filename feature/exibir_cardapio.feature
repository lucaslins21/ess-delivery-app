Feature: exibicao do cardápio
As a intens do cardápio
I want to apresentar cardápio
So that exibir itens listados

Scenario: exibir informações dos produtos
Given exibir informações dos produtos cadastrados
When clicar "nome_produto" e apresentar as informações
Then página adicionar no carrinho

Scenario: pesquisar os produtos listados
Given pesquisar produto "nome_produto"
When verificar nos produtos cadastrados
And verificar se "nome_produto" está no cardápio
Then retorna produto encontrado
And retorna erro se produto não encontrado

Scenario: alterar itens do pedido
Given exibindo informações do pedido
When caixinha de observações
And checkbox adicionar item + valor
Then conclui e retorna a informações do pedido


