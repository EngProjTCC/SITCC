### UC01 - Recuperar Senha

#### Pré-condições
estar registrado no sistema
#### Pós-condição
uma mensagem avisando que o link para redefinição foi enviado é gerada e o sistema volta para a tela de login
#### Fluxo Principal
1. O anônimo seleciona a opção "recuperar senha";
2. O sistema carrega uma página com um campo "email" para ser preenchido;
3. O sistema envia um link para redefinir a senha ao email provido
#### Fluxos Alternativos
(caso haja)

#### Fluxo de Exceção
caso o email provido não esteja registrado no sistema uma mensagem pedindo para um email registrado ser provido é colocada na tela
