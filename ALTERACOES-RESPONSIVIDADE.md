# Pequeno Príncipe — alterações de HTML e CSS

Esta versão foi ajustada preservando o conteúdo, os nomes das páginas, as imagens e a estrutura principal do projeto.

## O que foi alterado

- Adicionado `box-sizing: border-box` para que padding e bordas sejam incluídos no cálculo da largura.
- Layouts, títulos, imagens e espaçamentos agora usam `clamp()` e limites de largura para se adaptar melhor a telas diferentes.
- Menus e cartões têm espaçamentos mais consistentes e estados de foco visíveis para navegação por teclado.
- Camadas escuras de fundo foram organizadas com `isolation` e `z-index`, sem aplicar `position: relative` a todos os elementos da página.
- Os cartões de texto ganharam borda sutil, sombra e espaçamento consistente.
- Corrigidos seletores de responsividade da página Rosa e Raposa: o HTML usa `.meio_2` e `.texto-raposa`, não `.center` e `.texto-rosa`.
- Nas páginas Rosa, Raposa e Rosa e Raposa, o áudio agora tem controles visíveis. A reprodução automática costuma ser bloqueada pelo navegador, e um áudio sem controles não dava ao visitante uma forma simples de iniciar a música.
- O botão de música da página inicial agora trata falhas de reprodução e atualiza seu estado acessível.
- Incluída a preferência `prefers-reduced-motion` para reduzir animações para visitantes que assim configuraram o sistema.

## Como testar

1. Abra `index.html` no navegador.
2. Teste os links de navegação entre as quatro páginas.
3. Redimensione a janela ou use as ferramentas de dispositivo do navegador para testar larguras próximas de 360 px, 768 px e 1280 px.
4. Verifique se não aparece rolagem horizontal, se os textos continuam legíveis e se as imagens não ficam deformadas.
5. Teste o áudio usando os controles de cada página.

## Como levar para seu GitHub sem perder o histórico

Faça uma cópia de segurança do projeto atual. Depois, copie os arquivos atualizados para a pasta do seu repositório, confira `git status` e revise as diferenças com `git diff` antes de criar um commit. O ZIP de entrega não inclui a pasta `.git`, para evitar substituir acidentalmente o histórico local do seu repositório.
