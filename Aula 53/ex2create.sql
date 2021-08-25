DROP TABLE IF EXISTS departamentos CASCADE;
DROP TABLE IF EXISTS funcionarios;

CREATE TABLE IF NOT EXISTS departamentos (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	localizacao text NOT NULL
);

CREATE TABLE IF NOT EXISTS funcionarios (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	sobrenome text NOT NULL,
	data_nascimento date NOT NULL,
	cpf text NOT NULL UNIQUE,
	rg text NOT NULL UNIQUE,
	logradouro text NOT NULL,
	cep text NOT NULL,
	cidade text NOT NULL,
	telefone text NOT NULL UNIQUE,
	funcao text NOT NULL,
	salario numeric NOT NULL,
	id_departamento integer REFERENCES departamentos
);

-- Adicionando a chave-estrangeira na tabela de departamentos
ALTER TABLE departamentos ADD COLUMN id_gerente integer NOT NULL REFERENCES funcionarios;

-- Inserindo gerentes
INSERT INTO 
	funcionarios (nome, sobrenome, data_nascimento, cpf, rg, logradouro, cep, cidade, telefone, funcao, salario) 
VALUES 
	('Pedro', 'Silva', '1990-02-11', '111.111.111-11', '1.231.231', 'Rua 1', '12343-123', 'Timbó', '(47) 9 8282-8282', 'Gerente', 10000),
	('José', 'Silva', '1992-03-01', '111.111.231-11', '1.111.231', 'Rua 1', '12233-123', 'Indaial', '(47) 9 8282-3282', 'Gerente', 20000);
	
-- Criando departamentos	
INSERT INTO
	departamentos (nome, localizacao, id_gerente)
VALUES
	('RH', 'Filial de Blumenau', 1),
	('TI', 'Filial de Indaial', 2);
	
-- Atualizando os departamentos dos gerentes
UPDATE funcionarios SET id_departamento = 1 WHERE id = 1;
UPDATE funcionarios SET id_departamento = 2 WHERE id = 2;

-- Inserindo funcionários
INSERT INTO
	funcionarios (nome, sobrenome, data_nascimento, cpf, rg, logradouro, cep, cidade, telefone, funcao, salario, id_departamento)
VALUES
	('Maria', 'Silva', '2000-02-11', '112.111.111-11', '1.231.777', 'Rua 1', '12343-123', 'Timbó', '(47) 9 8212-8282', 'Estagiário', 1400, 2),
	('Mateus', 'Silva', '1995-02-11', '113.111.111-11', '1.232.888', 'Rua 1', '12343-101', 'Timbó', '(47) 9 8242-0282', 'Desenvolvedor Júnior', 2500, 2),
	('João', 'Silva', '1995-02-11', '114.111.111-11', '1.112.231', 'Rua 1', '12343-113', 'Timbó', '(47) 9 8292-8282', 'Desenvolvedor Pleno', 2500, 2),
	('Judas', 'Silva', '1995-02-11', '115.111.111-11', '1.555.231', 'Rua 1', '12343-142', 'Timbó', '(47) 9 8102-8282', 'Estagiário', 1000, 1);