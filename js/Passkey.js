/*
  Genera una cadena de texto con 3 números aleatorios
*/
export function passkey(){
  // let key = [0, 0 , 0 ];
  // let aux = 0;
  // for(let value in key){
  //   key[aux] = Math.round( (Math.random() * 9) ) ;
  //   aux++;
  // }
  // return key;

  let pwd = "";
  for (let index = 0; index < 3; index++){
    pwd += Math.floor(Math.random() * 10);
  }
  return pwd;
}