### UC29 - Gerar Cronograma das Bancas
---
#### Pré-condições
estar logado como coordenador

---
#### Pós-condição
O coordenador recebe um arquivo no formato de um cronograma de bancas com as informaçoes que ele adicionou

---
#### Fluxo Principal
1. O coordenador clicka na opção "gerar CDB" na barra de navegação de cima;
2. O sistema carrega uma página com os campo de "numero de bancas";
3. O coordenador seleciona o número total de bancas;
4. O sistema gera na quantidade informada os campos "aluno" "orientador" "titulo do TCC" "data" "horario" e "link" para serem preenchidos;
5. O sistema gera um arquivo no formato de um cronograma de bancas com as informaçoes adicionadas pelo coorndenador e envia o arquivo para o aparelho usado pelo coordenador.
---
#### Fluxos Alternativos
(caso haja)

---
#### Fluxo de Exceção
caso todos campos não tenham sido preenchidos o sistema não gera o arquivo e emite uma mensagem explicando o erro
