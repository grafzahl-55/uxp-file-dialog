const fs=require("uxp").storage.localFileSystem;


async function chooseFile(){
  const result = await fs.getFileForSaving("MyFile.json",{types:["json"]});
  let message;
  if( result ){
    message = "Your choice:"+result.name;
  }else{
    message = "You cancelled the dialog";
  }
  document.getElementById("message").innerText=message;
}



document.getElementById("btnRun").addEventListener("click", chooseFile);