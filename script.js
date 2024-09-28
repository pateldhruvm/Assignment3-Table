//Title constructor function that creates a Title object
//Dhruv
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var awardStatusArray = [
  "Approve",
  "Rejected"
];
var randomItem = awardStatusArray[Math.floor(Math.random()*awardStatusArray.length)];


var t = new Title("CONNECT WITH ME!");

var table = document.getElementById("myTable");
var addNew = document.getElementById("add");
var count = table.rows.length;
function initialize() {
  for (var i = 1; i < table.rows.length; i += 2) {
    table.rows[i].innerHTML += "<td></td>";
  }
  for (var i = 2; i < table.rows.length; i += 2) {
    table.rows[i].style.display = "none";
  }
  table.rows[0].innerHTML += "<th>Edit</th>";
}

  // var cell8 = row.insertCell(8);
  // var newElem_8 = document.createElement( 'button' );
  // newElem_8.innerHTML = "Delete";
  // newElem_8.setAttribute("id",deleteId);
  // // newElem_8.onClick(callFunction(deleteId));

  // cell8.appendChild(newElem_8);

  // var cell9 = row.insertCell(9);
  // var new_Elem_9 = document.createElement( 'button' );
  // new_Elem_9.setAttribute("id",editId);
  // new_Elem_9.innerHTML = "Edit";
  // cell9.appendChild(new_Elem_9);
function addEventListeners() {
  console.log("addEventListeners", table.rows.length);
  for (let i = 1; i < table.rows.length; i += 2) {
    table.rows[i].cells[0].children[0].addEventListener("click", check);
    table.rows[i].cells[0].children[3].addEventListener("click", () => {
      showBottom(i);
    });
    table.rows[i].cells[8].addEventListener("click", () => {
      table.rows[i].remove();
      table.rows[i].remove();
      check();
      alert("Record deleted successfully");
    });
    table.rows[i].cells[9].addEventListener("click", () => {
      alert("Your record has been edited successfully");
    });
  }
}

initialize();

function check() {
  var count = 0;
  for (let i = 1; i < table.rows.length; i += 2) {
    if (table.rows[i].cells[0].children[0].checked) {
      table.rows[i].style.backgroundColor = "yellow";
      table.rows[i].cells[8].innerHTML = "<button>Delete</button>";
      table.rows[i].cells[9].innerHTML = "<button>Edit</button>";
      count++;
      
  // document.getElementById("myTable").css('background','yellow');
  // if(this.style.background == "" || this.style.background =="white") {
  //   $(this).css('background', 'red');
  // }
  // else {
  //   $(this).css('background', 'white');
  // }
    } else {
      table.rows[i].style.backgroundColor = "#fff";
      table.rows[i].cells[8].innerHTML = "";
      table.rows[i].cells[9].innerHTML = "";
    }
  }
  if (count > 0) {
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").style.borderColor = "orange";
    for (var i = 0; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.display = "";
        if (j == 8) table.rows[i].cells[j].style.display = "";
      }
    }
  } else {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "gray";
    document.getElementById("button").style.borderColor = "transparent";
    for (var i = 0; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.display = "";
        if (j == 8 || j == 9) table.rows[i].cells[j].style.display = "none";
      }
    }
  }
}
check();

function showBottom(i) {
  if (table.rows[i + 1].style.display == "none") {
    table.rows[i + 1].style.display = "";
    table.rows[i].cells[0].children[3].style.transform = "rotate(180deg)";
  } else {
    table.rows[i + 1].style.display = "none";
    table.rows[i].cells[0].children[3].style.transform = "rotate(0deg)";
  }
}

for (let i = 1; i < table.rows.length; i += 2) {
  table.rows[i].cells[0].children[0].addEventListener("click", check);
  table.rows[i].cells[0].children[3].addEventListener("click", () => {
    showBottom(i);
  });
  // for (let i = 1; i < table.rows.length; i += 2) {
  //   table.rows[i].cells[0].children[0].addEventListener("click", check);
  //   table.rows[i].cells[0].children[3].addEventListener("click", () => {
  //     showBottom(i);
  //   });
  table.rows[i].cells[8].addEventListener("click", () => {
    table.rows[i].remove();
    table.rows[i].remove();
    check();
    alert("Record deleted successfully");
  });
  table.rows[i].cells[9].addEventListener("click", () => {
    alert("Record edited successfully");
  });
}
addNew.addEventListener("click", () => {
  table.innerHTML += `
      <tr>
        <td>
          <input type="checkbox" /><br /><br /><img
            src="down.png"
            width="25px"
          />
        </td>
        <td>Student ${Math.floor(++count / 2)}</td>
        <td>Teacher ${Math.floor(count++ / 2)}</td>
        <td>${randomItem}</td>
        <td>Fall</td>
        <td>TA</td>
        <td>${Math.floor(Math.random() * 90000) + 10000}</td>
        <td>${getRandomInt(100) + "%"}</td>
        <td></td>
        <td></td>
      </tr>
      <tr style="display:none" class="dropDownTextArea">
        <td colspan="8">
          Advisor:<br /><br />
          Award Details<br />
          Summer 1-2014(TA)<br />
          Budget Number: <br />
          Tuition Number: <br />
          Comments:<br /><br /><br />
          Award Status:<br /><br /><br />
        </td>
      </tr>
      
  `;
  check();
  addEventListeners();
  alert("Your record has been edited successfully");
});
