//append a ul
//and append a li with 'spot', 'rover', 'bingo', and 'joe'

import styles from './index.css';

const root = document.getElementById('root');
const ul = document.createElement('ul');
ul.className = styles.dogs;
root.appendChild(ul);

['spot', 'rover', 'bingo', 'joe']
  .forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
