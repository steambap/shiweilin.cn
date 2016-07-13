import ReactDOMServer from 'react-dom/server';
import App from './app';

var html = ReactDOMServer.renderToStaticMarkup(App);

console.log(html);
