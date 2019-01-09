import './app.scss';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
const hello = () => {
  document.createElement('block').appendChild(document.createElement('b'));
}
hello();
