var div_ops = document.getElementById("operations");
var div_acc = document.getElementById("accounting");

function showOps(){
    div_acc.style.display = "none";
    if (div_ops.style.display === "none"){
        div_ops.style.display = "block";
    } else {
        div_ops.style.display = "none";
    };
};


function showAcc(){
    div_ops.style.display = "none";
    if (div_acc.style.display === "none"){
        div_acc.style.display = "block";
    } else {
        div_acc.style.display = "none";
    };
};

function showpic(img_id){
    var img_supplier = document.getElementById("img_supplier");
    var img_vessel = document.getElementById("img_vessel");
    var img_invoice = document.getElementById("img_invoice");
    var img_payment = document.getElementById("img_payment");
    var img_database = document.getElementById("img_database");
    var img_login = document.getElementById("img_login");
    var img_new_vessel = document.getElementById("img_new_vessel");
    var img_vessel_op = document.getElementById("img_vessel_op");
    var img_embarkment = document.getElementById("img_embarkment");
    var img_disembarkment = document.getElementById("img_disembarkment");
    var img_watchmen = document.getElementById("img_watchmen");
    var img_health = document.getElementById("img_health");
    var img_view = document.getElementById("img_view");
    img_supplier.style.display = "none";
    img_vessel.style.display = "none";
    img_invoice.style.display = "none";
    img_payment.style.display = "none";
    img_database.style.display = "none";
    img_login.style.display = "none";
    img_new_vessel.style.display = "none";
    img_vessel_op.style.display = "none";
    img_embarkment.style.display = "none";
    img_disembarkment.style.display = "none";
    img_watchmen.style.display = "none";
    img_health.style.display = "none";
    img_view.style.display = "none";

    var showimg = document.getElementById(`img_${img_id}`);
    showimg.style.display = "block";
};


// Share the Bill

var totalb = document.getElementById("bill_total");
var shareb = document.getElementById("nbr_people");
var lanothertipb = document.getElementById("label_anothertip");

function checkTip(){
    var tipb = document.getElementById("tip");
    var customtipb = document.getElementById("custom_tip");
    if (tipb.selectedIndex === 6){
        lanothertipb.style.display = "block";
        customtipb.style.display = "block";
        customtipb.required = true;
    } else {
        lanothertipb.style.display = "none";
        customtipb.style.display = "none";
        customtipb.required = false;
    };
};


function showBill(url){
    window.open(url, "_blank");
};


// Secret Santa
var santa_table = document.getElementById("tableSanta");
const regex_mail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i

function addSanta(){
    var new_name = document.getElementById("name_santa");
    var new_email = document.getElementById("mail_santa");
    if (!new_name.value){
        alert("Please insert a Name");
    } else if (!new_email.value){
        alert("Please insert an Email");
    } else if (!regex_mail.test(new_email.value)){
        alert("Please insert a Valid Email");
    } else {
        rows = santa_table.rows.length;
        var new_row = santa_table.insertRow(-1);
        var cell1 = new_row.insertCell();
        var cell2 = new_row.insertCell();
        var cell3 = new_row.insertCell();
        var cell4 = new_row.insertCell();
        cell1.innerHTML = rows;
        cell2.innerHTML = new_name.value;
        cell3.innerHTML = new_email.value;
        cell4.innerHTML = '<button class="btn btn-danger" type="button" onclick="removeSanta()">-</button>';
        new_name.value = "";
        new_email.value = "";
    };
};


function removeSanta(){
      var td = event.target.parentNode;
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
};


function santaData(){
    if (santa_table.rows.length < 4){
        event.preventDefault();
        alert("Please enter at least 3 people...");
    } else {
        var new_santadata = '';
    for (var r = 1, n = santa_table.rows.length; r < n; r++) {
         var row_name = santa_table.rows[r].cells[1].innerHTML;
         var row_email = santa_table.rows[r].cells[2].innerHTML;
         new_santadata = new_santadata + row_name + '/' + row_email + ',';
    };
    var inp_santadata = document.getElementById("santa_data");
    inp_santadata.value = new_santadata;
    };
};


// Keep Score
function delPoint(){
    var td = event.target.parentNode;
    var tr = td.parentNode;
    var score = tr.cells[3].innerHTML;
    var num_score = parseInt(score);
    var new_score = num_score - 1;
    tr.cells[3].innerHTML = new_score.toString();
};


function addPoint(){
    var td = event.target.parentNode;
    var tr = td.parentNode;
    var score = tr.cells[3].innerHTML;
    var num_score = parseInt(score);
    var new_score = num_score + 1;
    tr.cells[3].innerHTML = new_score.toString();
};


var table_teams = document.getElementById("team_table");
function addTeam(){
    var team = document.getElementById("team_name");
    if (!team.value){
        alert("Please enter a Team name...");
    } else {
        new_row = table_teams.insertRow(-1);
        var cell0 = new_row.insertCell();
        cell0.style = 'font-size: 20px';
        var cell1 = new_row.insertCell();
        var cell2 = new_row.insertCell();
        var cell3 = new_row.insertCell();
        cell3.style = 'font-size: 30px';
        cell0.innerHTML = team.value;
        cell1.innerHTML = '<button class="btn btn-warning" type="button" onclick="delPoint()">-1</button>';
        cell2.innerHTML = '<button class="btn btn-warning" type="button" onclick="addPoint()">+1</button>';
        cell3.innerHTML = "0";
        team.value = "";
    };
};