//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

const myTa = document.getElementById("myTable");
const cb = myTa.getElementsByTagName("input");
//const theadEl = document.getElementById("myTable").querySelector("tr");
//var colLen = theadEl.length;
let count = 0;
var del = document.getElementById("delete");
var ed = document.getElementById("edit");

function check() {
  let subBtn = document.getElementById("button");
  subBtn.style.background = "grey";
  for (let i = 0; i <= cb.length; i++) {
    const chkRow = cb[i].parentNode.parentNode;
    cb[i].addEventListener("click", () => {
      if (cb[i].checked) {
        del.style.visibility = "visible";
        ed.style.visibility = "visible";
        count++;
        chkRow.style.backgroundColor = "yellow";
        chkRow.lastElementChild.innerHTML = "<td><button onClick='editRow()'>Edit</button></td>";
        chkRow.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete</button></td>";
        //document.getElementById("delete").style.display = "block";
        //document.getElementById("edit").style.display = "block";
        //theadEl.innerHTML += `
        //<th>DELETE</th>
        //<th>EDIT</th>
        //`;
        //chkRow.innerHTML += "<td><button onClick='deleteRow(this)'>Delete</button></td><td><button onClick='editRow(this)'>Edit</button></td>";
        //cb[i].checked = true;
        //chkRow.lastElementChild.innerHTML += "<td><button>Delete</button></td>";
        subBtn.style.background = "orange";
        //subBtn.style.cursor = "grab";
        subBtn.disabled = false;
      }

      else {
        del.style.visibility = "hidden";
        ed.style.visibility = "hidden";
        //var dele = del.parentElement.lastElementChild;
        //del.style.display = "none";
        //var ed = document.getElementById("edit");
        //ed.style.display = "none"
        //var edi = ed.parentElement.lastElementChild;
        //edi.style.display = "none"
        //document.getElementById("edit").style.display = "none";
        count--;
        chkRow.style.backgroundColor = "white";
        chkRow.lastElementChild.innerHTML = "";
        chkRow.lastElementChild.previousElementSibling.innerHTML = "";

        //theadEl.lastElementChild.innerHTML = "";
        //theadEl.lastChild.previousSibling.lastElementChild.innerHTML = "";
        //theadEl.style.display = "none"
        //theadEl.lastChild.innerHTML = "";
        //theadEl.lastChild.previousSibling.innerHTML = "";
        subBtn.style.background = "grey";
        subBtn.disabled = true;
      }
    })
  }
}

check();

function deleteRow(deed) {
  const d = deed.parentNode.parentNode.rowIndex;
  myTa.deleteRow(d);
  alert(`Record deleted successfully...!!`);
  check();
}

function editRow() {
  prompt("Edit the details");
  check();
}

function toggle(_this) {
  var row = _this.parentNode.parentNode;
  var downRow = row.nextElementSibling;

  if (downRow.style.display == "none") {
    downRow.style.display = "table-row";
  }
  else {
    downRow.style.display = "none";
  }

}

function dropRow() {
  const row = myTa.insertRow(myTa.rows.length);
  row.classList.add("dropDownTextArea");
  row.innerHTML +=
    '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';
  check();
}

function newRow() {
  const nrow = myTa.insertRow(myTa.rows.length);
  var rowCount = myTa.rows.length;
  console.log(rowCount);
  const newCb = nrow.insertCell(0);
  const student = nrow.insertCell(1);
  const advisor = nrow.insertCell(2);
  const awardStatus = nrow.insertCell(3);
  const semester = nrow.insertCell(4);
  const type = nrow.insertCell(5);
  const budget = nrow.insertCell(6);
  const percent = nrow.insertCell(7);
  const deleteBtn = nrow.insertCell(8);
  const editBtn = nrow.insertCell(9);
  //if(rowCount >=8)
  //{
  student.innerHTML = `Student ${Math.ceil(rowCount / 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount / 2)}`;
  //}
  //else if(rowCount == 3)
  //{
  //student.innerHTML = `Student 1`;
  //advisor.innerHTML = `Teacher 1`;
  //}
  //
  //else if(rowCount == 5)
  //{
  //student.innerHTML = `Student 2`;
  //advisor.innerHTML = `Teacher 2`;
  //}
  //
  //else if(rowCount == 7)
  //{
  //student.innerHTML = `Student 3`;
  //advisor.innerHTML = `Teacher 3`;
  //}

  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = "TA";
  budget.innerHTML = Math.ceil(Math.random());
  percent.innerHTML = "100%";


  newCb.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="toggle(this)" src="down.png" width="25px" /></td>`;

  try {
    setTimeout(() => { alert(`Record Added Successfully!!..`) }, 50);
  } catch (error) {
    alert("Error : Something went wrong!!!");
  }

  dropRow();
  check();

}









