DROP TABLE IF EXISTS colaboradores_projetos;
DROP TABLE IF EXISTS dependentes;
DROP TABLE IF EXISTS colaboradores;
DROP TABLE IF EXISTS departamentos;
DROP TABLE IF EXISTS projetos;

CREATE TABLE IF NOT EXISTS projetos (
	id SERIAL PRIMARY KEY,
	data_inicio date NOT NULL,
	data_termino date NOT NULL,
	descricao text NOT NULL
);

INSERT INTO 
	projetos (data_inicio, data_termino, descricao)
VALUES
	(DATE(NOW()), DATE(NOW()) + 7, 'Projeto 01'),
	(DATE(NOW()), DATE(NOW()) + 14, 'Projeto 02'),
	(DATE(NOW()), DATE(NOW()) + 30, 'Projeto 03');

CREATE TABLE IF NOT EXISTS departamentos (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL
);

INSERT INTO
	departamentos (nome)
VALUES 
	('Departamento 01'),
	('Departamento 02'),
	('Departamento 03');
	
CREATE TABLE IF NOT EXISTS colaboradores (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	horas_trabalhadas integer NOT NULL,
	total_vendas numeric,
	percentual_comissao numeric,
	valor_hora numeric,
	salario numeric,
	tipo_colaborador text NOT NULL CHECK (tipo_colaborador IN ('ASSALARIADO', 'HORISTA', 'COMISSIONADO')),
	id_gerente integer REFERENCES colaboradores,
	id_departamento integer REFERENCES departamentos
);

INSERT INTO 
	colaboradores (
		nome, 
		horas_trabalhadas,
		total_vendas,
		percentual_comissao,
		valor_hora,
		salario,
		tipo_colaborador,
		id_gerente,
		id_departamento
	)
VALUES 
	('Marcos', 40, null, null, null, 10000, 'ASSALARIADO', null, 1),
	('João', 100, 10000, .2, null, null, 'COMISSIONADO', 1, 1);

CREATE TABLE IF NOT EXISTS colaboradores_projetos (
	id_colaborador integer REFERENCES colaboradores,
	id_projeto integer REFERENCES projetos,
	horas_trabalhadas integer NOT NULL,
	PRIMARY KEY (id_colaborador, id_projeto)
);

INSERT INTO
	colaboradores_projetos
VALUES 
	(1, 1, 10),
	(2, 1, 5);
	
CREATE TABLE IF NOT EXISTS dependentes (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	tipo_dependente text NOT NULL,
	id_colaborador integer NOT NULL REFERENCES colaboradores
);

INSERT INTO
	dependentes (nome, tipo_dependente, id_colaborador)
VALUES 
	('Arthur', 'Filho', 1);
	
