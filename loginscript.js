function submit(){
    let userid = document.getElementById('userid').value;
    let password = document.getElementById('password').value;
    
    if(userid == "kishore"&&password=="kishore"){
        
        window.location.replace("https://hack.chat/?(pranav)");   
    }
    else{
        
        window.location.replace("./mon-key.jpg");   
    }
}
document.getElementById('submit').onclick = submit;

function ent(e){
    var key=e.keyCode ? e.keyCode :e.which;
    if(key==13){
        submit();
    }
}
document.getElementById('password').onkeydown=ent;
