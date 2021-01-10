  var flag = true;

function verifyKey(){
  event.preventDefault();
  var key = document.getElementById("keyValue").value;

  if(key == "xVn6A"){
    showHiddenContent();
  }else{
    flag = wrongKeyAnimation(flag);
  }
}

function showHiddenContent(){
  document.getElementById("personalVoice").style.height = 'auto';
  document.getElementById("hiddenContent").style.display = 'inline';
  document.getElementById("unlockContent").style.display = 'none';
}

function wrongKeyAnimation(flag){
  if(flag){
    document.getElementById("unlockButton").style.animation = "wrongKey 1s 1";
    flag = false;
  }
  else if(!flag){
    document.getElementById("unlockButton").style.animation = "wrongKey2 1s 1";
    flag = true;
  }
  return flag;
}
