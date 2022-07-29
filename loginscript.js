function submit(){
    let userid = document.getElementById('userid').value;
    let password = document.getElementById('password').value;
    
    if(userid == "pranav"&&password=="work"){
        alert("login success");
        window.location.replace("./main.html");   
    }
    else{
        alert("login failed");
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