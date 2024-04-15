function drawChess() {
  let mainBlockChess = document.querySelector('.main-block-chess'); // я задав пошук елемнту в css файлі найти такий клас, у мене тут винекла помиолка тому що там був другий клас
  let block; // створив змінну блоку
  let flag = true;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      block = document.createElement('div');

      if (flag) block.className = 'block black';
      else block.className = 'block white';
      mainBlockChess.appendChild(block);
      flag = !flag;
    }
    flag = !flag;
  }
}
drawChess();
