### UC26 - Gerar Ata de Banca
---
#### Pré-condições
estar logado como coordenador

---
#### Pós-condição
O coordenador recebe um arquivo no formato de uma ata de banca com as informaçoes que ele adicionou

---
#### Fluxo Principal
1. O coordenador clicka na opção "gerar ata de banca" na barra de navegação de cima;
2. O sistema carrega uma página com os campos de "aluno" "matricula" "titulo do TCC" "orientador" "professor 1" "professor 2" "numero da defesa" "data" "sala" e "horario" para serem preenchidos;
3. O coordenador preenche esse campos;
4. O sistema gera um arquivo no formato de uma ata de banca com as informaçoes adicionadas pelo coorndenador e envia o arquivo para o aparelho usado pelo coordenador.
---
#### Fluxos Alternativos
(caso haja)

---
#### Fluxo de Exceção
caso todos campos não tenham sido preenchidos o sistema não gera o arquivo e emite uma mensagem explicando o erro
