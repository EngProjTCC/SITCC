### UC23 - Adicionar TCC Concluido

#### Pré-condições
Ser coordenador e estar na visualização de TCCs concluidos

---
#### Pós-condição
um TCC é adicionado a lista de TCCs concluidos

---
#### Fluxo Principal
1. O usuário clicka na opção "lista de TCCs concluidos";
2. O sistema carrega a tela com a lista dos TCCs concluidos adicionados pelo coordenador e com as opções de "adicionar TCC" em um canto e as de "alterar TCC" e "remover TCC" ao lado dos TCCs; 
3. O coordenador clicka na opção  "adcionar TCC";
4. O sistema carrega uma página com os campos de "discente" e de "orientador" "coorientador"(opcional) e "descrição" para serem preenchidos e uma área para se arrastar o arquivo contendo o TCC;
5. O coordenador preenche os campos e adiciona o arquivo e clicka "ok"; 
6. O sistema adiciona este TCC na lista de TCCs mantendo uma ordem dos mais recentes para os mais antigos
--- 
#### Fluxos Alternativos
(caso haja)

#### Fluxo de Exceção
- No passo principal 5 caso o coordenador não tenha prenchido todos os campos obrigatórios e adicionado um arquivo o sistema não adiciona o TCC e mostra uma mensagem explicando o erro
- No passo pricipal caso o coordenador clique na opção "cancelar" o sistema volta para a lista de TCC sem fazer adicionar nenhum TCC
