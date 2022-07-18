
function getValues(){
    let form = {};
    form.myName = document.getElementById("name").value;
    form.email = document.getElementById("email").value;
    form.dob = document.getElementById("dob").value;

    // form.select = document.getElementById("select").value;
    // var e = document.getElementById("select");
    // form.select = e.options[e.selectedIndex].text;

   //form.type = document.querySelector('input[name="type"]:checked').value;

    form.about = document.getElementById("about").value;  
    return form;
}
function validateForm(data){    
    if( data.myName == "" ){
        alert("Please enter your name");
        return false;
    }
    if( data.email == "" ){
        alert("Please enter your email");
        return false;
    }
    if( data.dob == "" ){
        alert("Please select your dob");
        return false;
    }
    // if( data.select == "" ){
    //     alert("Please select your interest");
    //     return false;
    // }
    if( data.type == "" ){
        alert("Please select as an individual/organization");
        return false;
    }
    return true;
}


function convertToQueryString(data)
    {
        var str = [];
        for (var p in data)
        {
            if (data.hasOwnProperty(p))
            {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
            }
        }
        return str.join("&");
    }



function sendForm(){
        let data = getValues(); 
        if(validateForm(data)) {
            window.open("summary.html", convertToQueryString(data) );            
        }    
}   
    