function getValue(id) { 
        return document.getElementById(id).value; 
    } 
    function checkuser() { 
        if(getValue('uname') == "2004" && getValue('pwd') == "0621") { 
            return true; 
        }else { 
            alert("登录名或密码错误！")
            return false; 
        } 
    } 