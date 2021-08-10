<h2>1º Passo: Mapear as entidades</h2>
Clientes<br/>
Editoras<br/>
Livros<br/>
Compras (Entidade Associativa)

<h2>2º Passo: Mapear os relacionamentos</h2>
<strong>Clientes x Livros</strong>
<ul>
  <li>Um cliente compra vários livros</li>
  <li>Um livro pode ser comprado por vários clientes (estoque)</li>
</ul>
<strong>Editoras x Livros</strong>
<ul>
  <li>Uma editora fornece vários livros</li>
  <li>Um livro é fornecido por uma editora</li>
</ul>

<h2>3º Passo: Mapear os atributos</h2>
<strong>Clientes</strong>
<ul>
  <li>id</li>
  <li>nome</li>
  <li>endereço (rua, número, cidade, estado)</li>
  <li>numero_documento</li>
  <li>tipo_pessoa</li>
  <li>pontos</li>
</ul>

<strong>Livros</strong>
<ul>
  <li>isbn</li>
  <li>nome_autor</li>
  <li>assunto</li>
  <li>quantidade_estoque</li>
</ul>

<strong>Editoras</strong>
<ul>
  <li>id</li>
  <li>endereço (rua, número, cidade, estado)</li>
  <li>telefone</li>
  <li>nome_gerente</li>
</ul>

<strong>Compras</strong>
<ul>
  <li>id</li>
  <li>data</li>
  <li>valor_gasto</li>
</ul>
