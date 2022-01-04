# Especificação dos Requisitos do SITCC

## Requisitos Funcionais

### Lista de Requisitos Funcionais

- RF01 - O sistema requer uma página de Login com usuário e senha
- RF02 - O sistema precisa ser capaz de enviar um link para o email do usuário para recuperar a sua senha
- RF03 - O sistema deve permitir ao coordenador do TCC incluir/excluir  usuários, com estes podendo ser discentes, docentes e possivelmente um novo coorndenador
- RF04 - O sistema precisa possuir uma reserva com todos TCC's concluidos, e permitir a obtenção de seus arquivos por qualquer tipo de usuário
- RF05 - O sistema tem que permitir ao coordenador criar um cronograma de entregas das atividades da disciplina de TCC, que pode ser visualizado por todos usuários
- RF06 - O sistema necessita que o discente tenha uma área para fazer a entrega das atividades da disciplina de TCC, como TCO(termo de concordância de orientação), pré projeto e a monografia
- RF07 - O sistema deve ser capaz de gerar arquivos como ata de banca, certificados dos professores, folhas de aprovação dos trabalhos e cronograma das bancas. Com o coordenador sendo o único com acesso a essa função
- RF08 - O sistema requer que os docentes possam criar/excluir projetos de TCC e víncular um aluno e possivelmente um co-orientador a este
- RF09 - O sistema deve permitir aos docentes orientadores e co-orientadores de um projeto de TCC postarem orientações para o discente vínculado a este
- RF10 - O sitema necessita que o discente ao ser vínculado a um projeto seja capaz de acessar uma página contendo as orientações dos orientadores e, caso haja, co-orientadores


### Diagrama de Casos de Uso

```plantuml
@startuml
left to right direction
actor estudante as e
actor professor as p
actor coordenador as c

package SITCC {
  usecase "fazer login" as UC1
  usecase "fazer logoff" as UC2
  usecase "visualizar TCCs concluidos" as UC3
  usecase "baixar TCC concluido" as UC4
  usecase "visualizar orientações do projeto" as UC5
  usecase "visualizar cronograma de entregas" as UC6
  usecase "realizar entrega do TCO" as UC7
  usecase "realizar entrega do pré projeto" as UC8
  usecase "realizar entrega da monografia" as UC9
  usecase "criar projeto de TCC" as UC10  
  usecase "alterar projeto de TCC" as UC11
  usecase "remover projeto de TCC" as UC12
  usecase "criar orientação de projeto" as UC13
  usecase "alterar orientação de projeto" as UC14
  usecase "remover orientação de projeto" as UC15
  usecase "visualizar lista de usuários" as UC16
  usecase "adicionar usuário" as UC17
  usecase "alterar usuário" as UC18
  usecase "remover usuário" as UC19
  usecase "adicionar cronograma de entregas" as UC20
  usecase "alterar cronograma de entregas" as UC21
  usecase "adicionar TCC concluido" as UC22
  usecase "gerar ata de banca" as UC23
  usecase "gerar certificado dos professores" as UC24
  usecase "gerar folha de aprovação de trabalho" as UC25
  usecase "gerar cronograma das bancas" as UC26
  
}
e --> UC1
e --> UC2
e --> UC3
e --> UC4
e --> UC5
e --> UC6
e --> UC7
e --> UC8
e --> UC9
p --> UC1
p --> UC2
p --> UC3
p --> UC4
p --> UC5
p --> UC6 
p --> UC10
p --> UC11
p --> UC12
p --> UC13
p --> UC14
p --> UC15
p --> UC16
c --> UC1
c --> UC2
c --> UC3
c --> UC4
c --> UC6
c --> UC16
c --> UC17
c --> UC18
c --> UC19
c --> UC20
c --> UC21
c --> UC22
c --> UC23
c --> UC24
c --> UC25
c --> UC26
@enduml
```

### Especificicações de Casos de Uso

- [UC_01](reqs_UC01.md)
- [UC_02](reqs_UC02.md)


## Requisitos não-funcionais

### Usabilidade

... Segundo ... Nilsen ...

## Referências

[1] Nilsen ...

[2] Ian Somerville ...

[3] Angular ...

[4] PlantUML ...
