function submit(){
    let userid = document.getElementById('userid').value;
    let password = document.getElementById('password').value;
    
    if(userid == "pranav"&&password=="work"){
        
        window.location.replace("https://hack.chat/?(pranav)");   
    }
    else{
        
        window.location.replace("https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.18169-9/23795592_1668001686591391_373491501446716346_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D6JNLeGw0GAAX_J2bRo&_nc_ht=scontent.fmaa2-1.fna&oh=00_AT9o9JkySXTjE4hmhjZT_pNlVdR0KYVttHxagCv5v1408g&oe=630B885F");   
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
