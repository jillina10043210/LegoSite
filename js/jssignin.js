
let falseBox = [true, true];
let logbox = 0;
let cart = JSON.parse(localStorage.getItem("signupdata"))
var yesme={}
var idss=[]
var ids={}
let logsignin = JSON.parse(localStorage.getItem("log"))
console.log(logsignin)
$(document).on("click", '#signInButton', function () {
    // console.log($(document.activeElement).attr('id'))
    let buttonRec = $(document.activeElement).attr('id')
    switch (buttonRec) {
        case "signInButtonBack":
            location.href='./index.html'
                        
            //go to index


            break;
        case "signInButtonClear":
            // console.log(buttonRec)
            clearInfobox()
            break;
        case "signInButtonDone":
            checkingValueInfobox()
            checkingValueTwo()
            if (logbox != 0) {
                
                getSource()
                checkSource()
            }
            //need to show complete
            break;
    }
})
//form check ☆☆☆☆☆☆☆☆☆☆☆☆//
function checkingValueInfobox() {
    $('.signInInput').each(function (index) {
        if (!$(this).val()) {
            $(this).addClass("infoError")
            $(this).removeClass("infoDone")
            falseBox[index] = false
            $(`.signInForm li:eq(${index})`).addClass("infoError")
            $(`.signInForm li:eq(${index})`).removeClass("infoDone")
        }
        else {
            $(this).removeClass("infoError")
            $(this).addClass("infoDone")
            console.log(index)

            falseBox[index] = true
            $(`.signInForm li:eq(${index})`).removeClass("infoError")
            $(`.signInForm li:eq(${index})`).addClass("infoDone")
        }


    })
    console.log(falseBox)
}
function checkingValueTwo() {
    console.log(falseBox)
    if (falseBox[0] && falseBox[1]) {
        $('.signInMessage').text("")
        $('.signInMessage').text("Welcome!")
        logbox = 1;
    }
    else {

        $('.signInMessage').text("")
        $('.signInMessage').text("Please fill up all boxes below!")
    }
}
//★★★★★★★★★★★★ form check //
//ID password ☆☆☆☆☆☆☆☆☆☆☆☆//
function getSource(){
    yesme = {
        id : $("#signInId").val(),
        password : $("#signInPassword").val()
    }
    
    
    cart.forEach((value, index) => {
        
        ids = {
            id : value.id,
            password : value.password
        }
        idss.push(ids)
    });
    
    
    
}
function checkSource(){
    let simple = 0;
    idss.forEach((value, index)=>{
        if((value.id == yesme.id)&&(value.password==yesme.password)){
            simple=1;
        }
        else{
            simple--;
        }
    })
    if(simple>0){
        orderRemove()
        $('#signInGoHome').delay(800).fadeIn()
        localStorage.setItem("Logged",true)
        checklogged = true;
        $('#headerSign span').text("SIGN-OUT")
        $('#headerSign div').addClass("loging")

    }
    else{
        orderError()
    }
    
    
}
function orderError(){
    $('#signInFace').addClass("face2")
    var target = $(".signInForm");
    removeElement2(target);
    $("#signInErrorbox").delay(500).fadeIn()
    $('#signInFace').removeClass("face3")
}
$(document).on("click","#signInErrorbox",function(){
    $('#signInFace').removeClass("face2")
    $("#signInErrorbox").delay(500).fadeOut()
    $('#signInFace').addClass("face3")
    removeElement3($(".signInForm"))
    
   
})

//★★★★★★★★★★★★ ID password //
//clear ☆☆☆☆☆☆☆☆☆☆☆☆//
function clearInfobox() {
    $("li input").each(function () {
        $(this).val("")
    })
}
//★★★★★★★★★★★★ clear //
//input modify ☆☆☆☆☆☆☆☆☆☆☆☆//
function isNumber(evt) { //<input type="text" onkeypress="return isNumber(event)>
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
$('#signInId').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
});
$('input[type="password"]').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
});

//★★★★★★★★★★★★ input modify//
//face clear ☆☆☆☆☆☆☆☆☆☆☆☆//
function orderRemove(){
    
    $('#signInFace').removeClass()
    var target = $(".signInForm");
    removeElement(target);
}
function removeElement(target) {
    
    $('#signInFace').addClass("face")
    target.animate({
        opacity: "-=1"
    }, 180, function () {
        target.remove();
    });
}
function removeElement2(target) {
    
    
    target.animate({
        opacity: "-=1"
    }, 180, function () {
        
    });
}
function removeElement3(target) {
    
    
    target.animate({
        opacity: "+=1",
        animationDelay:"1s"
    }, 1800, function () {
        
    });
}
//★★★★★★★★★★★★face clear//

//★★★★★★★★★★★★ home//

$(document).on("click","#signInGoHome",function(){
    
        location.href='./index.html'
    
})
//home ☆☆☆☆☆☆☆☆☆☆☆☆//

//signINOUT ☆☆☆☆☆☆☆☆☆☆☆☆//




if (a==true){
    
    $('#headerSign span').text("SIGN-OUT")
    $('#headerSign div').addClass("loging")

$(document).on("click","#headerSign",function(){
    
    console.log("gio")
    if(a==true){

        $('#headerMessageBox').toggleClass("unview")
    }
    else{
        location.href='./signin.html'
    }
})
}
else{
    
}
//★★★★★★★★★★★★ signINOUT //