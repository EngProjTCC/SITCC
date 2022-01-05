### UC21 - Adicionar Cronograma de Entregas
---
#### Pré-condições
Ser coordenador estar na visualização de cronogramas de entrega

---
#### Pós-condição
um evento é adicionado a lista de cronograms de entrega

---
#### Fluxo Principal
1. Na tela inicial o coordenador clicka na opção "cronograma de entregas";
2. O sistema carrega a página com o cronograma de entregas atual e com as opções "alterar cronograma" ao lado de cada cronograma criado e de  "adcionar cronograma" abaixo dos cronogramas;
3. O coordenador clicka na opção  "adcionar cronograma";
4. O sistema abre um pop-up com os campos de "dd/mm//yy" e de "evento" para serem preenchidos;
5. O coordenador preenche os campos e clicka "ok"; 
6. O sistema adiciona este envento no cronograma de entregas mantendo uma ordem das datas da mais próxima até a mais distante
--- 
#### Fluxos Alternativos
(caso haja)

---

#### Fluxo de Exceção
No passo principal 5 caso o coordenador não tenha prenchido todos os campos ou tenha preenchido uma data pertencente ao passado ou um evento com o mesmo nome de um atual o sistema não adiciona o evento e mostra uma mensagem explicando o erro
