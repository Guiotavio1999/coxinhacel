Pasta reservada para a imagem real do iPhone 17 usada no hero da home.

STATUS ATUAL: nenhuma imagem real foi fornecida ainda. O hero
(components/home/product-visual.tsx) está renderizando um placeholder
abstrato (silhueta desenhada em CSS/gradientes, sem foto), conforme
combinado — não uma foto genérica, distorcida ou sem licença.

QUANDO A LOJA FORNECER UMA IMAGEM REAL, ela deve:
- Ser uma foto própria da loja, material licenciado, ou material oficial
  de imprensa/revenda com uso autorizado (nunca capturada sem verificar a
  origem, nunca com marca d'água, nunca com fundo branco mal recortado).
- Ter uma versão otimizada para desktop e, se necessário, uma versão
  recortada/enquadrada diferente para mobile.
- Ser fornecida em formato moderno (WebP/AVIF) além do original, quando
  possível, para carregamento leve (a imagem do hero carrega com
  prioridade — impacta LCP diretamente).
- Preservar a proporção original (sem esticar/deformar).

COMO TROCAR O PLACEHOLDER PELA IMAGEM REAL:
1. Salve o(s) arquivo(s) nesta pasta (ex.: iphone-17-desktop.png,
   iphone-17-mobile.png).
2. Em components/home/product-visual.tsx, aponte a constante
   PRODUCT_HERO_IMAGE_SRC para o caminho do arquivo
   (ex.: "/assets/products/iphone-17/iphone-17-desktop.png").
3. Nenhuma outra alteração de layout é necessária — o componente já está
   preparado para renderizar a imagem real no lugar do placeholder assim
   que essa constante deixar de ser null.
