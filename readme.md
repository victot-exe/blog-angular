# Blog com Angular
Este projeto é um blog para aplicar os conhecimentos adiquiridos em Angular durante o curto da DIO  

## Passos
1. Buscar inspiração
2. Montar o esqueleto da aplicação {
    * `ng new blog` -> terminal
    * Quais os componentes?
    * Planejar antes com um sketch
}
3. Colocar no gitHub {
    * Não ser DEV James Bond
}

### Criando `components`
* A partir do sketch criar os `components`
* Começar a fazer os `components` um por um, deixando apenas o `component` que está mexendo no app.component.html
* O inspecionar(navegador) na aba styles pode servir para dar uma noção do `font-size`
* criar `pages` para diferentes situações na página{
    * Ex: `home` -> para a home page
*@media querios css* (desing responsivo)
}
### Desacoplando os componentes da parte visual
* Declare em variáveis no seu arquivo .ts  
~~~
photoCover: string = "url.da.foto"
cardTitle: string = "Titulo da foto"
cardDescription: string = "descrição da foto"
~~~
* Faça a relação das strings com o arquivo html
~~~
<img
    src="{{ photoCover }}">
<h1><a href="#">{{ cardTitle }}</a></h1>
<p><a href="#">{{cardDescription}}</a></p>
~~~
* Deixe as variáveis para receber de forma dinâmica os valores -> usando o @Input()
~~~
@Input()
photoCover: string = "url.da.foto"
~~~
* E na página.html onde se usa o component vc declara o que vai ficar no component

### Criando outras páginas
* Crie o component na pasta pages
* no módulo `app-routing.module.ts` tem a parte de routes que é um vetor que trata das rotas.  
~~~
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'content',
    component: ContentComponent
  }
];
~~~
* quando entrar na pagina pela url sem especificar nada ele usa o `componen: HomeComponent`, e se colocar `url/content` ele usa o `ContentComponent`  
* ao inves de usar o href usar o [routerLink]
* Os dados da pagina da `ContentPage` virão de um arquivo externo, que pega os dados através de um Id, e altera os dados dinamicamente de acordo com o Id
* Na pagina content no método construtor colocar o activatedRout  
~~~
constructor(
    private route:ActivatedRoute
) { }
~~~
* No `ngOnInit()` definir os parâmetros
