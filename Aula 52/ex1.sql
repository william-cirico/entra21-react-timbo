DROP TABLE IF EXISTS contratos;
DROP TABLE IF EXISTS imoveis;
DROP TABLE IF EXISTS proprietarios;
DROP TABLE IF EXISTS locatarios;

CREATE TABLE IF NOT EXISTS proprietarios (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	cpf text NOT NULL UNIQUE
);

INSERT INTO
	proprietarios (nome, cpf)
VALUES
	('Pedro', '111.111.111-11'),
	('João', '222.222.222-22'),
	('Marcos', '333.333.333-33');

CREATE TABLE IF NOT EXISTS locatarios (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	cpf text NOT NULL UNIQUE
);

INSERT INTO
	locatarios (nome, cpf)
VALUES
	('Mateus', '444.111.111-11'),
	('Josué', '555.222.222-22'),
	('Lucas', '666.333.333-33');

CREATE TABLE IF NOT EXISTS imoveis (
	id SERIAL PRIMARY KEY,
	numero_quartos integer NOT NULL,
	numero_banheiros integer NOT NULL,
	area numeric NOT NULL,
	piscina boolean DEFAULT false,
	churrasqueira boolean DEFAULT false,
	id_proprietario integer NOT NULL REFERENCES proprietarios
);

INSERT INTO
	imoveis (numero_quartos, numero_banheiros, area, piscina, churrasqueira, id_proprietario)
VALUES
	(2, 1, 150, true, false, 1),
	(3, 2, 200, true, true, 2),
	(1, 1, 100, false, false, 3);
	
CREATE TABLE IF NOT EXISTS contratos (
	id_locatario integer REFERENCES locatarios,
	id_imovel integer REFERENCES imoveis,
	data_inicio date,
	data_termino date NOT NULL,
	dia_vencimento integer NOT NULL,
	valor numeric NOT NULL,
	observacoes text,
	id_proprietario integer NOT NULL REFERENCES proprietarios,
	PRIMARY KEY (id_locatario, id_imovel, data_inicio)
);

INSERT INTO 
	contratos
VALUES
	(1, 1, DATE(NOW()), DATE(NOW()) +  7, 15, 900, null, 1),
	(2, 2, DATE(NOW()), '2021-09-05', 10, 1500, null, 1),
	(3, 3, DATE(NOW()), '2021-09-05', 1, 700, null, 1);








