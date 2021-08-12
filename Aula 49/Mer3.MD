<h2>1º Passo: Mapeamento das Entidades</h2>
Colaboradores<br/>
Comissionados<br/>
Horistas<br/>
Assalariado<br/> 
Projetos<br/> 
Departamentos<br/>  
Dependentes<br/>

<h2>2º Passo: Mapeamento dos Relacionamentos</h2>
<strong>Colaboradores x Projetos</strong>
<ul>
  <li>Um colaborador pode atuar em vários projetos</li>
  <li>Um projeto pode ter vários colaboradores</li>
</ul>
<strong>Colaboradores x Departamentos</strong>
<ul>
  <li>Um colaborador pertence a um departamento</li>
  <li>Um departamento precisa de um colaborador e pode ter vários colaboradores</li>
</ul>
<strong>Colaboradores x Dependentes</strong>
<ul>
  <li>Um colaborador pode sustentar vários dependentes</li>
  <li>Um dependente depende de um colaborador</li>
</ul>
<strong>Colaboradores x Gerentes</strong>
<ul>
  <li>Um colaborador é gerenciado por um gerente</li>
  <li>Um gerente gerencia vários colaboradores</li>
</ul>

<h2>3º Passo: Mapeamento dos Atributos</h2>
<strong>Colaboradores</strong>
<ul>
  <li>id</li>
  <li>nome</li>
  <li>horas_trabalhadas</li>
</ul>
<strong>Comissionados</strong>
<ul>
  <li>id</li>
  <li>nome</li>
  <li>horas_trabalhadas</li>
  <li>percentual_comissao</li>
  <li>total_vendas</li>
</ul>
<strong>Horistas</strong>
<ul>
  <li>id</li>
  <li>nome</li>
  <li>horas_trabalhadas</li>
  <li>valor_hora</li>  
</ul>
<strong>Assalariado</strong>
<ul>
  <li>id</li>
  <li>nome</li>
  <li>horas_trabalhadas</li>
  <li>salário</li>  
</ul>
<strong>Projetos</strong>
<ul>
  <li>id</li>
  <li>data_inicio</li>
  <li>previsao_duração</li>
  <li>data_término</li>  
  <li>descrição</li>  
  <li>horas_trabalhadas</li>
</ul>
<strong>Departamentos</strong>
<ul>
  <li>id</li>
  <li>nome</li>
</ul>

<strong>Dependentes</strong>
<ul>
  <li>id</li>
  <li>nome</li>  
</ul>



