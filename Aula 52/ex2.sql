DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS editoras;

DROP TYPE tipo_pessoa;

CREATE TYPE tipo_pessoa AS ENUM ('PF', 'PJ');

CREATE TABLE IF NOT EXISTS clientes (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	rua text NOT NULL,
	numero integer NOT NULL,
	cidade text NOT NULL,
	sigla_estado character(2) NOT NULL,
	numero_documento text NOT NULL UNIQUE,
	tipo_pessoa tipo_pessoa, 
-- 	tipo_pessoa character(2) NOT NULL CHECK (tipo_pessoa IN ('PF', 'PJ')),
	pontos integer DEFAULT 0
);

INSERT INTO
	clientes (
		nome, 
		rua, 
		numero, 		
		cidade, 
		sigla_estado,
		numero_documento,
		tipo_pessoa
	)
VALUES 
	('Pedro', 'Rua 01', 110, 'Cidade 01', 'SC', '111.111.111-11', 'PF'),
	('João', 'Rua 05', 102, 'Cidade 02', 'SP', '111.222.111-11', 'PF'),
	('Marcos', 'Rua 02', 156, 'Cidade 03', 'RJ', '111.333.111-11', 'PF');
	
CREATE TABLE IF NOT EXISTS editoras (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL UNIQUE,
	nome_gerente text NOT NULL,
	rua text NOT NULL,
	numero integer NOT NULL,
	cidade text NOT NULL,
	sigla_estado character(2) NOT NULL
);

INSERT INTO
	editoras (nome, nome_gerente, rua, numero, cidade, sigla_estado)
VALUES
	('Editora 01', 'Marcos', 'Rua 01', 123, 'Cidade 01', 'SC'),
	('Editora 02', 'João', 'Rua 02', 132, 'Cidade 02', 'SP'),
	('Editora 03', 'Ana', 'Rua 03', 182, 'Cidade 03', 'RJ');
	
CREATE TABLE IF NOT EXISTS livros (
	id SERIAL PRIMARY KEY,
	nome_autor text NOT NULL,
	titulo text NOT NULL UNIQUE,
	quantidade_estoque integer NOT NULL,
	id_editora integer NOT NULL REFERENCES editoras	
);

INSERT INTO
	livros (titulo, nome_autor, quantidade_estoque, id_editora)
VALUES
	('Código Da Vinci', 'Dan Brown', 20, 1),
	('Clean Code', 'Robert Cecil Martin', 5, 2),
	('Harry Potter', 'J.K. Rowling', 10, 3);
	
CREATE TABLE IF NOT EXISTS compras (
	id_cliente integer REFERENCES clientes,
	id_livro integer REFERENCES livros,
	data timestamp DEFAULT NOW(),
	valor numeric NOT NULL,
	PRIMARY KEY (id_cliente, id_livro, data)	
);

INSERT INTO
	compras (id_cliente, id_livro, valor)
VALUES 
	(1, 3, 30), 
	(3, 2, 80), 
	(2, 1, 28.9);

