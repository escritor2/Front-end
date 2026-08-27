# Portal Institucional — Atividade de Componentização com Angular

Projeto Angular standalone que atende à atividade prática: uma página institucional
dividida em 5 componentes (`header`, `sidebar`, `hero-banner`, `card-product`, `footer`),
montados no componente raiz (`app.html`) e estilizados com CSS Grid + Flexbox.

## Estrutura de componentes (`src/app/`)

```
src/app/
├── header/          (app-header)
├── sidebar/          (app-sidebar)
├── hero-banner/      (app-hero-banner)
├── card-product/     (app-card-product)  -> reutilizado 3x
└── footer/           (app-footer)
```

## Comandos usados para gerar os componentes via Angular CLI

Se quiser recriar o projeto do zero com a CLI (em vez de usar os arquivos prontos),
rode a partir da raiz do projeto:

```bash
ng generate component header --standalone
ng generate component sidebar --standalone
ng generate component hero-banner --standalone
ng generate component card-product --standalone
ng generate component footer --standalone
```

## Como rodar este projeto

```bash
npm install
npm start
```

Depois abra http://localhost:4200 no navegador.

## O que cada componente faz

- **header**: logotipo e menu rápido de navegação.
- **sidebar**: lista de links do menu lateral.
- **hero-banner**: bloco de destaque com título, texto e botão de call-to-action.
- **card-product**: card reutilizável com `@Input()` para `titulo`, `descricao` e `preco`
  — por isso é instanciado 3 vezes em `app.html`, cada vez com dados diferentes.
- **footer**: direitos autorais com o ano atual calculado em `footer.ts`.

## Layout

O posicionamento geral (header no topo, sidebar à esquerda, conteúdo principal à
direita e footer no rodapé) é feito em `src/app/app.css` usando **CSS Grid**
(`grid-template-areas`), conforme sugerido na Etapa 4 da atividade. Os 3 cards de
produto usam **Flexbox** (`display: flex; flex-wrap: wrap;`) para se alinharem lado
a lado e quebrarem linha em telas menores.
