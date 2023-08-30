/*1 - Faça uma query que retorna a quantidade de medicamentos da tabela `farmacia`.*/
select count(medicamento) from farmacia;
/*2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela `usuarios`.*/
select min(idade) from usuarios;
/*3 - Faça uma query que retorna apenas a idade do usuario mais velho cadastrado na tabela `usuarios`.*/
select max(idade) from usuarios;
/*4 - Faça uma query que retorna a média de idade entre os usuários cadastrados na tabela `usuarios` com idade maior ou igual a 18 anos.*/
select avg(idade) from usuarios where idade <=18;
/*5 - Faça uma query que retorna a soma total do estoque de todos os medicamentos das categorias `blue` e `black` na tabela `farmacia`.*/
select sum(estoque) from farmacia where categoria = 'blue' or categoria = 'balck';
/*6 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos de cada categoria na tabela `farmacia`.*/
select categoria, sum(estoque) from farmacia where categoria is not null group by categoria;
/*7 - Faça uma query que retorna a soma do estoque disponível dos medicamentos sem categoria na tabela `farmacia`.*/
select categoria, sum(estoque) from farmacia where categoria is null group by categoria;
/*8 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela `farmacia`.*/
select categoria ,count(medicamento) from farmacia where categoria is null group by categoria;
/*9 - Faça uma query que retorna uma única coluna com a junção do nome do medicamento e a categoria entre parenteses de todos os registros em que a categoria não seja nula da tabela `farmacia`. Ex.: `Endocet (green)`.*/
select  concat(medicamento, '  ' , '(' , categoria, ')') as medicamento_e_categoria from farmacia where categoria is not null;
/*10 - Faça uma query que retorna uma única coluna com a junção do identificador e o nome do medicamento separado por um hífen e a categoria entre parenteses de todos os registros da tabela `farmacia`. Quando a categoria for nula, substituir por `(sem categoria)`. Ex.: `1 - Endocet (green)` ou `1 - Endocet (sem categoria)`.*/

/*11 - Faça uma query que retorna o nome, a idade e a data de cadastro no formato `AAAA-MM-DD` de todos os cadastros que aconteceram no ano de 2020, na tabela `usuarios`.*/

/*12 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario menor de 18 anos possui cadastrado na tabela `usuarios`. O tempo precisa ser uma coluna que retorne a quantidade de anos, meses, dias, horas, minutos e segundos em um objeto. Ex.: `{"years":2,"months":2,"days":19,"hours":8,"minutes":22,"seconds":19}`.*/

/*13 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario, maior ou igual a 60 anos, possui cadastrado na tabela `usuarios`. O tempo precisa ser uma coluna que retorne apenas a quantidade de anos, meses, dias em um objeto. Ex.: `{"years":2,"months":2,"days":19}`.*/

/*14 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela `farmacia`.*/

/*15 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela `usuarios`.*/

/*16 - Faça uma query que retorna as três categorias e a soma do estoque de todos os medicamentos de cada categoria, na tabela `farmacia`.*/
