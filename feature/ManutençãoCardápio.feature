Feature: Cadastro e manutenção de itens no cardápio
    As a proprietário do estabelecimento
    I want to poder adicionar, remover e editar itens
    So that o cardápio mantenha-se atualizado

Scenario: Adição de novo item com sucesso
    Given que estou logado como administrador
    When eu acessar a opção "Gerenciar cardápio"
    And clicar na opção "Adicionar novo item"
    Then deve aparecer um novo item no cardápio
    And um aviso de "Item adicionado com sucesso" deve ser exibido na tela

Scenario: Excluir item do cardápio com sucesso
    Given que estou logado como administrador
    When eu acessar a seção "Gerenciar cardápio"
    And selecionar um item
    And clicar no botão "Excluir item"
    Then uma confirmação de exclusão deve ser exibida
    And ao confirmar a exclusão, o item selecionado deve ser removido do cardápio

Scenario: Edição dos campos de um item com sucesso
    Given que estou logado como administrador
    When eu acessar a seção "Gerenciar cardápio"
    And selecionar um item
    And clicar no botão "Editar item"
    And editar os campos que eu quero
    Then o item com os dados atualizado deve ser exibido no cardápio
