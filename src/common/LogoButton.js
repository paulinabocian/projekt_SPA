export function logoButton(onClickCallback) {

    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = `<img src="../src/assets/logo.png" />`;
  
    button.addEventListener('click', onClickCallback);
  
    return button;
    
  }