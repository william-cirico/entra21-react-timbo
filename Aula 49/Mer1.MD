<h2>1º Identificando as entidades:</h2>
<strong>Imóveis</strong><br/>
<strong>Proprietários</strong><br/>
<strong>Contratos (Entidade Associativa)</strong><br/>
<strong>Locatários</strong><br/>

<h2>2º Identificando as relações:</h2>
<strong>Proprietários x Imóveis</strong><br/>
<ul>
  <li>Um proprietário possui vários imóveis</li>
  <li>Um imóvel possui um proprietário</li>
</ul>

<strong>Imóveis x Locatários</strong>
<ul>
  <li>Um imóvel é alugado por vários locatários</li>
  <li>Um locatários aluga vários imóveis</li>
</ul>

<strong>Proprietários x Contratos</strong>
<ul>
  <li>Um proprietário assina vários contratos</li>
  <li>Um contrato é assinado por vários proprietários</li>
</ul>

<h2>3º Identificando os atributos:</h2>
<strong>Imóveis</strong>
<ul>
  <li>id</li>
  <li>número_quartos</li>
  <li>número_banheiros</li>
  <li>área</li>
  <li>piscina</li>
  <li>churrasqueira</li>
  <li>bairro</li>
</ul>

<strong>Proprietários</strong>
<li>id</li>
<li>nome</li>
<li>cpf</li>
<li>telefone</li>
<li>endereço (rua, número, cidade, estado)</li>

<strong>Contratos</strong>
<li>id</li>
<li>data_início</li>
<li>data_término</li>
<li>dia_vencimento</li>
<li>valor</li>
<li>observações</li>

<strong>Locatários</strong>
<li>id</li>
<li>nome</li>
<li>cpf</li>
