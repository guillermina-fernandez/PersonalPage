function showOps(){
    accounting.style.display = "none";
    if (operations.style.display === "none"){
        operations.style.display = "block";
        img_login.style.display = "block";
    } else {
        operations.style.display = "none";
    };
};


function showAcc(){
    operations.style.display = "none";
    if (accounting.style.display === "none"){
        accounting.style.display = "block";
        img_supplier.style.display = "block";
    } else {
        accounting.style.display = "none";
    };
};

function showpic(img_id){
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

function checkTip(){
    if (tip.selectedIndex === 6){
        label_anothertip.style.display = "block";
        custom_tip.style.display = "block";
        custom_tip.required = true;
    } else {
        label_anothertip.style.display = "none";
        custom_tip.style.display = "none";
        custom_tip.required = false;
    };
};


function showBill(url){
    window.open(url, "_blank");
};


// Secret Santa

const regex_mail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i

function addSanta(){
    if (!name_santa.value){
        alert("Please insert a Name");
    } else if (!mail_santa.value){
        alert("Please insert an Email");
    } else if (!regex_mail.test(mail_santa.value)){
        alert("Please insert a Valid Email");
    } else {
        rows = tableSanta.rows.length;
        var new_row = tableSanta.insertRow(-1);
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
    if (tableSanta.rows.length < 4){
        event.preventDefault();
        alert("Please enter at least 3 people...");
    } else {
        var new_santadata = '';
    for (var r = 1, n = tableSanta.rows.length; r < n; r++) {
         var row_name = tableSanta.rows[r].cells[1].innerHTML;
         var row_email = tableSanta.rows[r].cells[2].innerHTML;
         new_santadata = new_santadata + row_name + '/' + row_email + ',';
    };
    santa_data.value = new_santadata;
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


function addTeam(){
    if (!team_name.value){
        alert("Please enter a Team name...");
    } else {
        new_row = team_table.insertRow(-1);
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
        team_name.value = "";
    };
};
