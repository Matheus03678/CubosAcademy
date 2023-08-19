01 - select id,compositor from musicas;
02 - select composicao, tempo from musicas where tempo > 60*4;
03 - select compositor from musicas where id >= 47 and id <= 123;
04 - select compositor from musicas where compositor IS NOT NULL;
05 - select composicao, tempo from musicas where compositor = 'Mozart' or compositor = 'Bach';
06 - select * from musicas order by id ASC;
07 - select * from musicas order by tempo desc;
08 - select * from musicas order by tempo asc limit 5;
09 - select * from musicas order by tempo desc limit 10;
10 - select * from musicas order by tempo asc limit 10 offset 5;
11 - select * from musicas order by tempo asc limit 10 offset 30;
12 - select * from musicas order by tempo asc limit 12 offset 60;
13 - select distinct compositor from musicas where compositor is not null;
14 - select distinct compositor, composicao from musicas;
15 - select * from musicas where ritmo like '%a';
16 - select * from musicas where ritmo like '%troppo';
17 - select * from musicas where composicao ilike '%quartet%'; 
18 - select * from musicas where composicao != ilike '%quintet%';





