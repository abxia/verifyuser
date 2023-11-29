//get Sign up el
var email=document.querySelector('.username');
var password=document.querySelector('.password');
var btn=document.querySelector('.btn');

//check fields & Signup
function signUp(e){
    e.preventDefault();
    if(email.value.trim()==''|| password.value.trim()==''){
        alert('Hey 欄位不可輸入空白鍵');
        return;
    }
//ajax calls
    let xhr=new XMLHttpRequest();
    let link='https://hex-escape-room.herokuapp.com/api/user/signup';
    xhr.open('post',link,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(`email=${email.value}&password=${password.value}`);
//print
    xhr.onload=function handleResponse(){
        let backData = JSON.parse(xhr.responseText);
        if(backData.message == '帳號註冊成功'){
        alert(backData.message);
            }else{
                alert(backData.message);
            }
        email.value = '';
        password.value = '';
        }
}

btn.addEventListener('click',signUp,false);


//Login getel
var userName=document.querySelector('.loginName');
var userPass=document.querySelector('.loginPass');
var loginBtn=document.querySelector('.loginBtn');

//check fields & Login
function login(e){
    e.preventDefault();
    if(userName.value.trim()==''|| userPass.value.trim()==''){
        alert('欄位不可輸入空白鍵');
        return;
    }
    let xhr=new XMLHttpRequest();
    let loginlink='https://hex-escape-room.herokuapp.com/api/user/signin';
    xhr.open('POST',loginlink,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(`=${userName.value}&password=${userPass.value}`)

    xhr.onload=function(){
        let backData= JSON.parse(xhr.responseText);
        if(backData.message == '登入成功'){
            alert(backData.message);
        }else{
            alert(backData.message);
        }
    }
    userName.value='';
    userPass.value='';
    }


loginBtn.addEventListener('click',login,false);