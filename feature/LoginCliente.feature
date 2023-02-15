Feature: Login de cliente 
As a cliente do estabelecimento 
I want to logar no sistema
So that eu possa acessar as funcionalidades internas do sistema

# Cenário: Login com sucesso
Given  eu estou na página de login do site de delivery
When eu insiro meu email e senha corretamente
And clico em "login"
Then eu sou redirecionado para a página inicial do meu perfil
And vejo a mensagem "Bem-vindo, [nome do usuário]"

# Cenário: Login com email inválido

  Given que eu estou na página de login do site de delivery
  When eu insiro um email inválido
  And clico em "login"
  Then vejo a mensagem de erro "Email e/ ou senha incorretos."

# Cenário: Login com senha inválida

  Given que eu estou na página de login do site de delivery
  When eu insiro uma senha inválida para o meu email
  And clico em "login"
  Then vejo a mensagem de erro "Email e/ ou senha incorretos."

# Cenário: Login com campos vazios

  Given que eu estou na página de login do site de delivery
  When eu não insiro nenhum email e senha
  And clico em "login"
  Then vejo as mensagens de erro "Não foi possível logar. Existem campos obrigatórios vazios."

# Cenário: Cliente recupera senha com sucesso

   Given que o cliente está na página de login
   When o cliente clica em "Esqueceu a senha?"
   And insere seu endereço de email registrado
   And clica no botão "Enviar"
   Then o cliente deve receber um email com um link para redefinir sua senha
   And o cliente deve clicar no link enviado por email
   And deve ser redirecionado para a página de redefinição de senha
   And deve inserir uma nova senha segura
   And clica no botão "Confirmar"
   Then o cliente deve ver a mensagem "Sua senha foi alterada com sucesso."
   And deve ser redirecionado para a página de login

  # Cenário: Cliente insere email inválido
  
    Given que o cliente está na página de login
    When o cliente clica em "Esqueceu a senha?"
    And insere um endereço de email inválido
    And clica no botão "Enviar"
    Then o cliente deve ver a mensagem de erro "Endereço de email inválido. Por favor, insira um endereço de email válido."

  # Cenário: Cliente não recebe email de redefinição de senha
  
    Given que o cliente está na página de recuperação de senha
    When o cliente insere um endereço de email registrado
    And clica no botão "Enviar"
    Then o cliente deve ver a mensagem "Um email de redefinição de senha foi enviado para o seu endereço de email."
    And o cliente não deve receber nenhum email de redefinição de senha
