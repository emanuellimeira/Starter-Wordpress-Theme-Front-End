# Starter Wordpress Theme (Front-end)
--
Estes códigos servem para iniciar a produção front-end de um tema para Wordpress ou outra plataforma de CMS. Utiliza o Node.JS para instalar os processadores de GULP-SASS entre outros.

É utilizado para instalar também BOWER para copiar os códigos do Bootstrap v4.0.0-alpha.5 e Modernizr v.2.8.3.

## Instalação

Dentro do pacote:

* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [jQuery] - Javascript Library

Tendo instalado o Node.js e o Bower.io  no seu computador. Basta abrir o prompt de comandos e iniciar a instalação:

	npm install --save-dev
	bower install

Com estes componentes instalados. Comece a criar o front-end do seu tema para wordpress ou para outra plataforma.

## Utilização
No prompt você pode ir editando os arquivos dentro da pasta de 'development' os scripts javascript e os estilos css com SASS.

Para compilar os arquivos javascript:
    
    gulp scripts

Para compilar os arquivos de estilo:

    gulp sass

Para continuar editando sem precisar entrar toda vez no prompt:

    gulp watch

## Informações

Para maiores informações entre em contato contato (at) emanuellimeira.com.br

## License

GNU General Public License