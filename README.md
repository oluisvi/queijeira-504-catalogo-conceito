# Queijeira 504 — conceito de catálogo digital

Protótipo estático, responsivo e mobile-first, com três direções visuais alternáveis: **Origem**, **Balcão** e **Feira**. O conceito responde ao problema declarado na conversa: o catálogo da Meta está desatualizado e a equipe não consegue incluir/retirar itens por lá.

## Demonstração
- Catálogo conceitual com busca, filtros e contato contextual pelo WhatsApp.
- Seção de localização e horários transcritos da mensagem automática, com aviso para confirmar antes de publicar.
- Prévia de um painel privado para a equipe incluir/editar/retirar produtos; é somente visual, sem login e sem persistência.
- Conteúdo de produtos e grafismos são exemplos, não representam o estoque, fotos ou produtos confirmados da Queijeira 504.

## Rodar
Abra `index.html` diretamente no navegador. Não requer build ou dependências.

## Arquivos
- `index.html` — interface e conteúdo.
- `styles.css` — três identidades visuais, estados responsivos e foco/redução de movimento.
- `script.js` — alternância de direções, filtros, busca, links de WhatsApp e exemplos não persistentes do painel.
- `BRIEF_DO_PROJETO.md` — fatos, hipótese, limitações e perguntas para fechar escopo.
- `arte/apresentacao.png` — prancha com capturas reais das três telas e um resumo do painel proposto.
- `arte/preview-*.png` — capturas mobile usadas na prancha.

## Limites
- O painel não tem autenticação nem grava dados; é uma demonstração de interface. A ideia é que o acesso real seja exclusivo do responsável definido pela loja.
- O catálogo não está ligado à Meta. A disponibilidade e as informações reais dos produtos precisam ser mantidas conforme o processo que a loja aprovar.
- `?panel-preview=1` abre a demonstração visual do painel no protótipo.
