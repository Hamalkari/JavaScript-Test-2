(function(){
  let form = document.querySelector('.form'),
      positionField = document.querySelector('.form__input');
  
  function submitHandler(e){
    e.preventDefault();
    let position = positionField.value;
    let possiblePositions = getPositionsOfHorse(position);
    alert(`Возможные варианты хода - \n\n ${possiblePositions.join(' ')}`);
  }

  function getPositionsOfHorse(pos){
    let hor = ['A','B','C','D','E','F','G','H'];
    let arrPossiblePosition = [
      {x: 2, y: -1},
      {x: 1, y: -2},
      {x: -1,y: -2},
      {x: -2, y: -1},
      {x: -2, y: 1},
      {x: -1, y: 2},
      {x: 1,y: 2},
      {x: 2, y: 1},
    ];
    let resultPos = [];
    let [x,y] = pos.split('');

    x = hor.findIndex(ch => ch == x) + 1;
    y = +y;

    for (let i = 0; i < arrPossiblePosition.length; i ++){
      let posiblePos = arrPossiblePosition[i];
      let tx = x + posiblePos.x;
      let ty = y + posiblePos.y;
      if ((tx >= 1 && tx <= 8) && (ty >= 1 && ty <=8)){
        let resPos = `${hor[tx - 1]}${ty}`;
        resultPos.push(resPos);
      }
    }
    return resultPos;
  }

  form.addEventListener("submit",submitHandler);
})();