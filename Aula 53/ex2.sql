-- a
SELECT * FROM funcionarios
WHERE salario > 1000
ORDER BY nome, sobrenome;
-- b
SELECT nome, sobrenome, data_nascimento FROM funcionarios
ORDER BY data_nascimento DESC;
-- c
SELECT sum(salario) total_salario FROM funcionarios;
-- d
SELECT f.nome, d.nome, f.funcao 
FROM funcionarios f
INNER JOIN departamentos d ON d.id = f.id_departamento;
-- e
SELECT d.nome, f.nome
FROM funcionarios f
INNER JOIN departamentos d ON d.id_gerente = f.id;
-- f
SELECT d.nome, sum(f.salario)
FROM funcionarios f
INNER JOIN departamentos d ON d.id = f.id_departamento
GROUP BY d.nome;
-- g
SELECT count(id) FROM funcionarios;
-- h
SELECT ROUND(avg(salario), 2) FROM funcionarios;
-- i
SELECT d.nome, ROUND(avg(f.salario), 2) media_salario
FROM funcionarios f
INNER JOIN departamentos d ON d.id = f.id_departamento
GROUP by d.nome;
-- j
SELECT d.nome, max(f.salario) 
FROM funcionarios f
INNER JOIN departamentos d ON d.id = f.id_departamento
GROUP BY d.nome;