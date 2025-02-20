function sendit(){

    const name = document.getElementById('prName');
    const hp = document.getElementById('prHp');
    const userpw = document.getElementById('prUserpw');
    const userpw_re = document.getElementById('passwordConfirm');
    const nick = document.getElementById('prNick');


    // 정규 표현식
    const expNameText = /[가-힣]+$/;                        // 한글만 가능
    // const expNameText = /^[A-Za-z가-힣]{2,20}$/;           // 
    const expHpText = /^\d{3}\d{3,4}\d{4}$/;                // (-) 제외
    // const expPwText = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/;
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/
    const expPwText = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}/;    
    const expNickText = /^[A-Za-z가-힣\d]{4,20}$/;            //


    if(!expNameText.test(name.value)){
        alert('성명은 두 글자 이상의 한글로 입력하세요');
        name.focus();
        return false;
    }

    if(!expHpText.test(hp.value)){
        alert('하이픈(-)을 제외한 숫자만 입력해 주세요.');
        hp.focus();
        return false;
    }
    
    if(!expPwText.test(userpw.value)){
        alert('비밀번호는 대소문자 구분없이 영문, 숫자, 특수문자를 각각 하나 이상 반드시 사용하여 8-20자리로 설정해주세요.');
        // alert('비밀번호는 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 8-20자리로 설정해주세요.');
            // 8~20, 특1, 대소문자 상관x
        // alert('비밀번호 형식을 확인하세요\n소문자,대문자,숫자,특수문자를 1개씩 꼭 입력해야합니다.');
        userpw.focus();
        return false;
    }

    if(userpw.value != userpw_re.value){
        alert('비밀번호를 확인해 주세요.');
        userpw_re.focus();
        return false;
    }

    if(!expNickText.test(nick.value)){
        alert('닉네임은 4자 이상 20자 이하의 한글, 영문 대소문자, 숫자를 사용할 수 있습니다.');
        nick.focus();
        return false;
    }

    return true;        // return은 하나만 있어야돼
}

function double_check(){
    const nick = document.getElementById('prNick');

    $.ajax({
        url:'/idCheck'
        ,type:'POST'
        ,data:{
            "prNick":nick.value
        }
        ,success:function (data){
            console.log(data);
            if(data){
                alert("사용가능 닉네임입니다")

            }
            else {
                alert("중복된 닉네임 입니다")
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("ERROR : " + textStatus + " : " + errorThrown);
        }
    })
}