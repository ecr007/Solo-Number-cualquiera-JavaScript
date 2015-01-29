function soloNumeros(event){
  
  //Aqui se colocan las teclas que quedaran fuera.
  if(event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 110){}
        
  //Las que no se permiten.
  else{
    if(event.keyCode < 95){
      if(event.keyCode < 48 || event.keyCode > 57 ){
        event.preventDefault(); 
      }
    }else{
      if(event.keyCode < 96 || event.keyCode > 105){
        event.preventDefault(); 
      }
    }
  }
}

//Get Code de las letras
$('CONTENT').keydown(function(event){
  soloNumeros(event);
});
