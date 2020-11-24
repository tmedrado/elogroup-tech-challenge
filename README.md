# Elogroup Tech Challenge !

Esse projeto foi feito por Tomaz Medrado Dias Silveira, inscrito no Processo Seletivo para a equipe de Tech da Elogroup. 
Abaixo, temos as instruções e uma sessão de explicações acerca das decisões tomadas tecnicamente.
Espero que gostem ;)


## Instruções:

Na pasta do projeto, instale as dependencias com:

### `yarn install`

Depois disso, lance o server com: 

### `yarn start`


## Decisões Tomadas:

1) Escolhi a biblioteca JS React para execução do projeto Front-End, pois comecei a estudar React para o Front-End e, agora com o notável crescimento do Next.JS, React se torna bastante interessante por poder ser utilizado com esse Framework no Front e no Backend, apesar de novas features significativas para SEO, que era uma das vulnerabidades do React. 

2) Optei por gerir as páginas com useState pela facilidade que eu tinha observado na execução do projeto. Entretanto, notavelmente, essa não é uma opção para projetos maiores.

3) Fiz o SignupForm, a tela inicial, com CSS e os outros demais componentes utilizei um pouco do React-Bootstrap para que fique explícita minha familiaridade com ambas as utilizações. É notável que, em projetos maiores, essa pode não ser uma boa prática por conta da pouca facilidade de manutenção de códigos e arquivos CSS. 

4) No LeadsPanel, optei inicialmente por fazer um Drag n Drop. Entretanto, mediante a limitação de graus de movimentação do componente, optei por fazer algo mais simples: um estado consegue gerenciar a posição dentro da tabela, uma vez que um lead só pode se mover unilateralmente para frente até a terceira coluna. 

