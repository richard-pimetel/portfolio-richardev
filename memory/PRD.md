# PRD - Portfolio Richard Pimentel

## Problem Statement
Portfolio pessoal de Richard Pimentel - Desenvolvedor Full Stack. O usuario pediu melhorias visuais e de interatividade no portfolio existente.

## Architecture
- **Frontend**: React app (port 3000) + Standalone HTML (`/app/index.html`)
- **Backend**: FastAPI minimal (port 8001) - health endpoint
- **No database required** - static portfolio

## User Persona
- Richard Pimentel - Desenvolvedor Full Stack Junior
- Publico alvo: Recrutadores e empresas de tecnologia

## Core Requirements
1. Toggle de tema claro/escuro
2. Cursor padrao (removido cursor:none)
3. Habilidades em abas (Frontend, Backend, Banco de Dados, Mobile, DevOps, Gestao de Projetos)
4. Imagens nos projetos com links separados para facil modificacao
5. Fundo navy atrativo ao inves de preto puro
6. Links e imagens separados em constantes no codigo para facil edicao

## What's Been Implemented (Jan 2026)
- [x] Toggle tema claro/escuro com icones sol/lua
- [x] Habilidades com navegacao por abas (6 categorias)
- [x] Cards de projetos com imagens placeholder e overlay hover
- [x] Fundo navy (#0a1628) com formas geometricas animadas
- [x] Links e imagens em constantes organizadas no topo do codigo
- [x] Menu responsivo mobile com burger menu
- [x] Scroll to top button
- [x] Formulario de contato com EmailJS
- [x] Efeito typing no hero
- [x] Scroll reveal animations
- [x] `/app/index.html` standalone atualizado para deploy direto

## Prioritized Backlog
### P0 (Done)
- Todas as features solicitadas implementadas

### P1
- Substituir imagens placeholder por screenshots reais dos projetos
- Adicionar mais projetos ao portfolio

### P2
- Adicionar secao de certificacoes
- Integrar blog/artigos tecnicos
- Adicionar animacao de loading inicial
- SEO otimizado com meta tags Open Graph

## Next Tasks
- Usuario trocar as imagens placeholder pelas reais (editar constante PROJECT_IMAGES no index.html)
- Considerar adicionar secao de depoimentos/recomendacoes
