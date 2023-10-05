## App

GymPass styles app.

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil do usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizado pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo o nome;
- [ ] Deve ser possível o usuário fazer check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível 
 
## RNs (Regras de Negócio)

- [x] O usuário não deve poder se cadastrar com um email duplicado;
- [ ] O usuário não pode fazer dois check-ins no mesmo dia;
- [ ] O usuário não pode fazer o check-in se não estiver perto da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] O academia só pode ser cadastrado por administradores;


## RNFs (Requisitos Não Funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as lista de dados precisam estar paginadas com 20 items por página;
- [ ] O usuário deve ser identificado por um token JWT (Json Web Token);
