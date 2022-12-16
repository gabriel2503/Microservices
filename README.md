# Compra e venda de Criptomoedas

## Ferramentas utilizadas

- Java 17
  - Maven
  - SpringBoot
  - Junit
- MySql
- Docker
- Angular

## Execução

### PASSO 1: Para utilização do microsserviço é preciso rodar a aplicação de atualização da base de dados de cotação de criptomoedas através de um dos passos abaixo

#### 1.1 Rodar API de cotação conforme instruções do readme.md em github.com/AlexDamiao86/trabalho-microservices/tree/main/cotacao-crypto-api

#### 1.2 Rodar API para carregar a carteira de Criptomoedas conforme instruções do readme.md em github.com/FabioQuimico/carteira-cryptos-spring

### Executar npm: Seguir Passo 2 
### Executar Docker: Seguir Passo 3

### PASSO 2: Executar aplicação com os comandos

```bash
cd crypto
npm install
npm run start
```

### PASSO 3: Executar aplicação com DOCKER

```bash
cd crypto
construir imagem comando: docker build -t crypto:v1 .
cd docker
executar imagem comando: docker-compose up
```

## Acesso à aplicação

```bash
local: localhost:4200
docker: localhost:8099
```