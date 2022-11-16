//var form = document.getElementById("myForm");
//form.addEventListener("submit", submitted);

var validName = false;
var validEmail = false;
var validPhone = false;
var validZip = false;
//var validCuisine = false;

var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)+@northeastern.edu$/;
var regExPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
var regExZip = /^\d{5}$/;

var miss = document.getElementById('miss');
var mr = document.getElementById('mr');
var mrs = document.getElementById('mrs');

miss.addEventListener("input", title_check);
mr.addEventListener("input", title_check);
mrs.addEventListener("input", title_check);

var fn = document.getElementById("firstName");
fn.addEventListener("input", validate);

var ln = document.getElementById("lastName");
ln.addEventListener("input", validate);

var ei = document.getElementById("emailId");
ei.addEventListener("input", validate);

var pn = document.getElementById("phoneNumber");
pn.addEventListener("input", validate);

var sa1 = document.getElementById("streetAddress1");
sa1.addEventListener("input", validate);

var sa2 = document.getElementById("streetAddress2");
sa2.addEventListener("input", validate);

var ci = document.getElementById("city");
ci.addEventListener("input", validate);

var st = document.getElementById("state");
st.addEventListener("input", validate);

var zc = document.getElementById("zipcode");
zc.addEventListener("input", validate);

var cu = document.getElementById("cuisine");
cu.addEventListener("input", validate);

var facebook = document.getElementById('facebook');
var google = document.getElementById('google');
var yelp = document.getElementById('yelp');

var comments = document.getElementById('comments');
comments.addEventListener("input", validate);


var myTa = document.getElementById("myTable");
myTa.style.display = "none";


var ind = document.getElementById("indian");
var mex = document.getElementById("mexican");
var chi = document.getElementById("chinese");
var ita = document.getElementById("italian");
var jap = document.getElementById("japanese");

//indian text field
var indianPBText = document.getElementById('indianPBText');
var indianDText = document.getElementById('indianDText');
var indianTCText = document.getElementById('indianTCText');

//mexican text field
var mexicanTAText = document.getElementById('mexicanTAText');
var mexicanTOText = document.getElementById('mexicanTOText');
var mexicanEText = document.getElementById('mexicanEText');

//chinese text field
var chineseKPText = document.getElementById('chineseKPText');
var chineseDText = document.getElementById('chineseDText');
var chineseWText = document.getElementById('chineseWText');

//italian text field
var italianPText = document.getElementById('italianPText');
var italianPAText = document.getElementById('italianPAText');
var italianLText = document.getElementById('italianLText');

//japanese text field
var japaneseSText = document.getElementById('japaneseSText');
var japaneseRText = document.getElementById('japaneseRText');
var japaneseTText = document.getElementById('japaneseTText');

var mexicanTA = document.getElementById("mexicanTA");
var mexicanTO = document.getElementById("mexicanTO");
var mexicanE = document.getElementById("mexicanE");

var chineseKP = document.getElementById("chineseKP");
var chineseD = document.getElementById("chineseD");
var chineseW = document.getElementById("chineseW");

var italianP = document.getElementById("italianP");
var italianPA = document.getElementById("italianPA");
var italianL = document.getElementById("italianL");

var indianPB = document.getElementById("indianPB");
var indianD = document.getElementById("indianD");
var indianTC = document.getElementById("indianTC");

var japaneseS = document.getElementById("japaneseS");
var japaneseR = document.getElementById("japaneseR");
var japaneseT = document.getElementById("japaneseT");

ind.style.display = "none";
mex.style.display = "none";
chi.style.display = "none";
ita.style.display = "none";
jap.style.display = "none";

indianPBText.style.display = "none";
indianDText.style.display = "none";
indianTCText.style.display = "none";

mexicanTAText.style.display = "none";
mexicanTOText.style.display = "none";
mexicanEText.style.display = "none";

chineseKPText.style.display = "none";
chineseDText.style.display = "none";
chineseWText.style.display = "none";

italianPText.style.display = "none";
italianPAText.style.display = "none";
italianLText.style.display = "none";

japaneseSText.style.display = "none";
japaneseRText.style.display = "none";
japaneseTText.style.display = "none";

document.getElementById("e_cuisine").style.display = "none";
document.getElementById("e_text").style.display = "none";

indianPBText.addEventListener("input", txt_check);
indianDText.addEventListener("input", txt_check);
indianTCText.addEventListener("input", txt_check);
mexicanTAText.addEventListener("input", txt_check);
mexicanTOText.addEventListener("input", txt_check);
mexicanEText.addEventListener("input", txt_check);
italianPText.addEventListener("input", txt_check);
italianPAText.addEventListener("input",txt_check);
italianLText.addEventListener("input", txt_check);
chineseKPText.addEventListener("input", txt_check);
chineseDText.addEventListener("input", txt_check);
chineseWText.addEventListener("input", txt_check);
japaneseSText.addEventListener("input", txt_check);
japaneseRText.addEventListener("input", txt_check);
japaneseTText.addEventListener("input", txt_check);


function cuisineSelect(list) {

    if (document.getElementById("zero").selected) {
        ind.style.display = "none";
        mex.style.display = "none";
        chi.style.display = "none";
        ita.style.display = "none";
        jap.style.display = "none";

        indianPBText.style.display = "none";
        indianDText.style.display = "none";
        indianTCText.style.display = "none";

        mexicanTAText.style.display = "none";
        mexicanTOText.style.display = "none";
        mexicanEText.style.display = "none";

        chineseKPText.style.display = "none";
        chineseDText.style.display = "none";
        chineseWText.style.display = "none";

        italianPText.style.display = "none";
        italianPAText.style.display = "none";
        italianLText.style.display = "none";

        japaneseSText.style.display = "none";
        japaneseRText.style.display = "none";
        japaneseTText.style.display = "none";

        document.getElementById("e_cuisine").style.display = "block";
        document.getElementById("e_text").style.display = "none";


    }


    else if (document.getElementById("indi").selected) {
        ind.style.display = "block";
        mex.style.display = "none";
        chi.style.display = "none";
        ita.style.display = "none";
        jap.style.display = "none";

        indianPBText.style.display = "none";
        indianDText.style.display = "none";
        indianTCText.style.display = "none";

        document.getElementById("e_cuisine").style.display = "none";

    }
    else if (document.getElementById("mexi").selected) {
        ind.style.display = "none";
        mex.style.display = "block";
        chi.style.display = "none";
        ita.style.display = "none";
        jap.style.display = "none";

        mexicanTAText.style.display = "none";
        mexicanTOText.style.display = "none";
        mexicanEText.style.display = "none";

        document.getElementById("e_cuisine").style.display = "none";
    }

    else if (document.getElementById("chin").selected) {
        ind.style.display = "none";
        mex.style.display = "none";
        chi.style.display = "block";
        ita.style.display = "none";
        jap.style.display = "none";

        chineseKPText.style.display = "none";
        chineseDText.style.display = "none";
        chineseWText.style.display = "none";

        document.getElementById("e_cuisine").style.display = "none";
    }

    else if (document.getElementById("ital").selected) {
        ind.style.display = "none";
        mex.style.display = "none";
        chi.style.display = "none";
        ita.style.display = "block";
        jap.style.display = "none";

        italianPText.style.display = "none";
        italianPAText.style.display = "none";
        italianLText.style.display = "none";

        document.getElementById("e_cuisine").style.display = "none";
    }

    else if (document.getElementById("japa").selected) {
        ind.style.display = "none";
        mex.style.display = "none";
        chi.style.display = "none";
        ita.style.display = "none";
        jap.style.display = "block";

        japaneseSText.style.display = "none";
        japaneseRText.style.display = "none";
        japaneseTText.style.display = "none";

        document.getElementById("e_cuisine").style.display = "none";
    }
    else {

    }
}

function checkBox() {

    var errText = document.getElementById("e_text"); 
    errText.style.display = "none";


    if (indianPB.checked) { 
        indianPBText.style.display = "block";
        errText.style.display = "block";
    }
    else { 
        indianPBText.style.display = "none";
        errText.style.display = "none";
    }

    if (indianD.checked) { 
        indianDText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        indianDText.style.display = "none"; }

    if (indianTC.checked) {
        indianTCText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        indianTCText.style.display = "none"; }

    if (mexicanTA.checked) { 
        mexicanTAText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        mexicanTAText.style.display = "none"; }

    if (mexicanTO.checked) { 
        mexicanTOText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        mexicanTOText.style.display = "none"; }

    if (mexicanE.checked) { 
        mexicanEText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        mexicanEText.style.display = "none"; }

    if (italianP.checked) { 
        italianPText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        italianPText.style.display = "none"; }

    if (italianPA.checked) { 
        italianPAText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        italianPAText.style.display = "none"; }

    if (italianL.checked) { 
        italianLText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        italianLText.style.display = "none"; }

    if (chineseKP.checked) { 
        chineseKPText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        chineseKPText.style.display = "none"; }

    if (chineseD.checked) { 
        chineseDText.style.display = "block"; 
        errText.style.display = "block";
    }
    else { 
        errText.style.display = "none";
        chineseDText.style.display = "none"; }

    if (chineseW.checked) { 
        errText.style.display = "block";
        chineseWText.style.display = "block"; }
    else { 
        errText.style.display = "none";
        chineseWText.style.display = "none"; }

    if (japaneseS.checked) { 
        errText.style.display = "block";
        japaneseSText.style.display = "block"; }
    else { 
        errText.style.display = "none";
        japaneseSText.style.display = "none"; }

    if (japaneseR.checked) { 
        errText.style.display = "block";
        japaneseRText.style.display = "block"; }
    else { 
        errText.style.display = "none";
        japaneseRText.style.display = "none"; }

    if (japaneseT.checked) { 
        errText.style.display = "block";
        japaneseTText.style.display = "block"; }
    else {
        errText.style.display = "none"; 
        japaneseTText.style.display = "none"; }
}

function validate(e) {
    var value = e.target.value;
    var type = this.id;
    var em = "error_" + type;

    switch (type) {
        case "firstName":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
            }
            break;

        case "lastName":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
            }
            break;

        case "emailId":
            if (!value.trim().match(regExEmail)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validEmail = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmail = true;
            }
            break;

        case "phoneNumber":
            if (!value.trim().match(regExPhone)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validPhone = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhone = true;
            }
            break;

        case "streetAddress1":
            if (!value){//.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
            }
            break;

       // case "streetAddress2":
       //     if (!value) {
       //         document.getElementById(em).style.display = "block";
       //         this.style.border = "2px solid red";
       //         validName = false;
       //     }
         //   else {
         //       document.getElementById(em).style.display = "none";
         //       this.style.border = "";
         //       validName = true;
         //   }
         //   break;

        case "city":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
            }
            break;

        case "state":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
            }
            break;

        case "zipcode":
            if (!value.trim().match(regExZip)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZip = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZip = true;
            }
            break;

        case "comments":
            if (!value){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZip = false;
                }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZip = true;
                }
            break;    
        
    }

}


function submitted(e) {
    var count = 0;
    //console.log(1);
    //e.preventDefault();
    if ((document.getElementById("miss").checked == false) &&
        (document.getElementById("mr").checked == false) &&
        (document.getElementById("mrs").checked == false)) {
        count++;

        document.getElementById("e_title").style.display = "block";
    }

    if((document.getElementById("facebook").checked == false) &&
       (document.getElementById("google").checked == false) &&
       (document.getElementById("yelp").checked== false))
    {
        count++;
        document.getElementById("e_hear").style.display = "block";

    }

    if(document.getElementById("e_text").value == "")
    {
        count++;
        document.getElementById("e_text").style.display = "block";
    }
    if (validName == true && validEmail == true && validPhone == true && validZip == true && count == 0) {
        alert("Data submitted successfully!!");
        onSubmitCT();
    }
    else {
        alert("Please enter valid details to submit.");
    }
}

function title_check() {
    document.getElementById("e_title").style.display = "none";
}

//function text_check() {
//    document.getElementById("e_text").style.display = "none";
//}
document.getElementById("e_hear").style.display = "none";
facebook.addEventListener("input", hear_check);
google.addEventListener("input", hear_check);
yelp.addEventListener("input", hear_check);

function hear_check()
{
    document.getElementById("e_hear").style.display = "none";
}

function txt_check() {
    if ((document.getElementById("indianPBText").value != "") ||
        (document.getElementById("indianDText").value != "") ||
        (document.getElementById("indianTCText").value != "") ||
        (document.getElementById("mexicanTAText").value != "") ||
        (document.getElementById("mexicanTOText").value != "") ||
        (document.getElementById("mexicanEText").value != "") ||
        (document.getElementById("chineseKPText").value != "") ||
        (document.getElementById("chineseDText").value != "") ||
        (document.getElementById("chineseWText").value != "") ||
        (document.getElementById("italianPText").value != "") ||
        (document.getElementById("italianPAText").value != "") ||
        (document.getElementById("italianLText").value != "") ||
        (document.getElementById("japaneseSText").value != "") ||
        (document.getElementById("japaneseRText").value != "") ||
        (document.getElementById("japaneseTText").value != "")) {
        document.getElementById("e_text").style.display = "none";
    }

}

function onSubmitCT() {


    alert("Please click on reset to add another entry in table.....");
    myTa.style.display = "block";
    var row = myTa.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();

    if (document.getElementById("miss").checked) {
        cell1.innerHTML = document.getElementById("miss").value;
    }
    else if (document.getElementById("mr").checked) {
        cell1.innerHTML = document.getElementById("mr").value;
    }
    else if (document.getElementById("mrs").checked) {
        cell1.innerHTML = document.getElementById("mrs").value;
    }
    else {
        /*DO NOTHING*/
    }


    cell2.innerHTML = document.getElementById("firstName").value;
    cell3.innerHTML = document.getElementById("lastName").value;
    cell4.innerHTML = document.getElementById("emailId").value;
    cell5.innerHTML = document.getElementById("phoneNumber").value;
    cell6.innerHTML = document.getElementById("streetAddress1").value;
    cell7.innerHTML = document.getElementById("streetAddress2").value;
    cell8.innerHTML = document.getElementById("city").value;
    cell9.innerHTML = document.getElementById("state").value;
    cell10.innerHTML = document.getElementById("zipcode").value;

    var hear = "";

    if (document.getElementById("facebook").checked) {
        hear = document.getElementById("facebook").value + " ";
    }
    if (document.getElementById("google").checked) {
        hear = hear + document.getElementById("google").value + " ";
    }
    if (document.getElementById("yelp").checked) {
        hear = hear + document.getElementById("yelp").value;
    }

    cell11.innerHTML = hear;


    if (document.getElementById("indi").selected) {

        var india = document.getElementById("indian").value;

        if (indianPB.checked) {
            india = document.getElementById("indianPB").value;
            india = india + "(" + document.getElementById("indianPBText").value + ")";
        }
        else if (indianD.checked) {
            india = document.getElementById("indianD").value;
            india = india + "(" + document.getElementById("indianDText").value + ")";
        }
        else if (indianTC.checked) {
            india = document.getElementById("indianTC").value;
            india = india + "(" + document.getElementById("indianTCText").value + ")";
        }
        else {
            /*Do Nothing*/
        }
        cell12.innerHTML = india;
    }
    else if (document.getElementById("mexi").selected) {

        var mexic = document.getElementById("mexican").value;

        if (mexicanTA.checked) {
            mexic = document.getElementById("mexicanTA").value;
            mexic = mexic + "(" + document.getElementById("mexicanTAText").value + ")";
        }
        else if (mexicanTO.checked) {
            mexic = document.getElementById("mexicanTO").value;
            mexic = mexic + "(" + document.getElementById("mexicanTOText").value + ")";
        }
        else if (mexicanE.checked) {
            mexic = document.getElementById("mexicanE").value;
            mexic = mexic + "(" + document.getElementById("mexicanEText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = mexic;
    }
    else if (document.getElementById("chin").selected) {

        var china = document.getElementById("chinese").value;

        if (chineseKP.checked) {
            china = document.getElementById("chineseKP").value;
            china = china + "(" + document.getElementById("chineseKPText").value + ")";
        }
        else if (chineseD.checked) {
            china = document.getElementById("chineseD").value;
            china = china + "(" + document.getElementById("chineseDText").value + ")";
        }
        else if (chineseW.checked) {
            china = document.getElementById("chineseW").value;
            china = china + "(" + document.getElementById("chineseWText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = china;
    }

    else if (document.getElementById("ital").selected) {
        var itali = document.getElementById("italian").value;

        if (italianP.checked) {
            itali = document.getElementById("italianP").value;
            itali = itali + "(" + document.getElementById("italianPText").value + ")";
        }
        else if (italianPA.checked) {
            itali = document.getElementById("italianPA").value;
            itali = itali + "(" + document.getElementById("italianPAText").value + ")";
        }
        else if (italianL.checked) {
            itali = document.getElementById("italianL").value;
            itali = itali + "(" + document.getElementById("italianLText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = itali;
    }
    else if (document.getElementById("japa").selected) {
        var japan = document.getElementById("japanese").value;

        if (japaneseS.checked) {
            japan = document.getElementById("japaneseS").value;
            japan = japan + "(" + document.getElementById("japaneseSText").value + ")";
        }
        else if (japaneseR.checked) {
            japan = document.getElementById("japaneseR").value;
            japan = japan + "(" + document.getElementById("japaneseRText").value + ")";
        }
        else if (japaneseT.checked) {
            japan = document.getElementById("japaneseT").value;
            japan = japan + "(" + document.getElementById("japaneseTText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = japan;
    }
    
    else {
        /* DO NOTHING */
    }

    cell13.innerHTML = document.getElementById("comments").value;

    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            elements[i].checked = false;
        }
        else if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
    indianPBText.style.display = "none";
    indianDText.style.display = "none";
    indianTCText.style.display = "none";
    mexicanTAText.style.display = "none";
    mexicanTOText.style.display = "none";
    mexicanEText.style.display = "none";
    chineseKPText.style.display = "none";
    chineseDText.style.display = "none";
    chineseWText.style.display = "none";
    italianPText.style.display = "none";
    italianPAText.style.display = "none";
    italianLText.style.display = "none";
    japaneseSText.style.display = "none";
    japaneseRText.style.display = "none";
    japaneseTText.style.display = "none";

}





