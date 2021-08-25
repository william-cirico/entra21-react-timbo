-- a
SELECT 
	id_nf, 
	id_item, 
	cod_prod, 
	valor_unit 
FROM vendas
WHERE desconto IS NULL;
-- b
SELECT 
	id_nf, 
	id_item, 
	cod_prod, 
	valor_unit, 
	ROUND((valor_unit - (valor_unit * (desconto/100))), 2) valor_vendido
FROM vendas 
WHERE desconto IS NOT NULL;
-- c
UPDATE vendas 
SET desconto = 0 
WHERE desconto IS NULL;
-- d
SELECT 
	id_nf, 
	id_item, 
	cod_prod, 
	valor_unit, 
	(quantidade * valor_unit) valor_total, 
	desconto, 
	ROUND((valor_unit - (valor_unit * (desconto/100))), 2) valor_vendido
FROM vendas;
-- e
SELECT
	id_nf,
	sum((quantidade * valor_unit)) valor_total
FROM vendas
GROUP BY id_nf
ORDER BY valor_total DESC;
-- f
SELECT 
	id_nf,
	sum(ROUND((valor_unit - (valor_unit * (desconto/100))), 2)) valor_vendido
FROM vendas
GROUP BY id_nf
ORDER BY valor_vendido DESC;
-- g
SELECT
	cod_prod,
	sum(quantidade) total_vendas
FROM vendas
GROUP BY cod_prod
ORDER BY total_vendas DESC
LIMIT 1;
-- h
SELECT
	id_nf,
	cod_prod,
	sum(quantidade) quantidade
FROM vendas
WHERE quantidade > 10
GROUP BY id_nf, cod_prod;
-- i
SELECT
	id_nf,
	sum(quantidade * valor_unit) valor_total
FROM vendas
GROUP BY id_nf
HAVING sum(quantidade * valor_unit) > 500;
-- j
SELECT
	cod_prod,
	ROUND(avg(desconto), 2) media_desconto
FROM vendas
GROUP BY cod_prod;
-- k
SELECT 
	cod_prod,
	min(desconto) menor_desconto,
	max(desconto) maior_desconto,
	ROUND(avg(desconto), 2) media_desconto
FROM vendas
GROUP BY cod_prod;
-- l
SELECT 
	id_nf,
	count(id_item) quantidade_itens
FROM vendas
GROUP BY id_nf
HAVING count(id_item) > 3;
	