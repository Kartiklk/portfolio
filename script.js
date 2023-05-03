const menu = document.querySelector('#menu');
const hide = document.querySelector('#list');

if(menu){
    var list = document.getElementById('half').style.display = 'none';
    menu.addEventListener('click', e=>{
      // console.log(list == 'none');
      if(list == 'none'){
        list = document.getElementById('half').style.display = 'block';
      }
      else{
        list = document.getElementById('half').style.display = 'none';
      }
    })
  }

  // 
if(hide){
  hide.addEventListener('click', e=>{
    document.getElementById('half').style.display = 'none';
  })
}