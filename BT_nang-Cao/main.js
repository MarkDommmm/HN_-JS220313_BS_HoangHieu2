let form = document.getElementById("form");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone");
let address = document.getElementById("address");
let male = document.getElementById("male");
let female = document.getElementById("female");
let btnForm = document.getElementById("btn");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let container = document.getElementsByClassName('container')[0]


let updateIndex = undefined;
let students = [
  {
    id: 1,
    name: "Hoang Hieu",
    email: "hieu@gmail.com",
    phone: "123456",
    address: "CM",
    gender: "Nam",
  },
  {
    id: 2,
    name: "MarKDommm",
    email: "Markdommm@gmail.com",
    phone: "7890123",
    address: "HN",
    gender: "Nu",
  },
];

// Đây là hàm Render các student ạ
function renderStudent() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${students[i].id}">
                <th scope="row">${i + 1}</th>
                <td>${students[i].name}</td>
                <td>${students[i].email}</td>
                <td>${students[i].phone}</td>
                <td>${students[i].address}</td>
                <td>${students[i].gender}</td>
                <td>
                    <button class="btn btn-success btnUpdate">Update</button>
                    <button class="btn btn-danger btnDelete">Delete</button>
                </td>
          </tr>`;
  }
}
//đây là hàm nhấn lấy thông tin học viên ạ
form.onsubmit = function (e) {
  e.preventDefault();
  form.style.display = "none";
  container.style.display = "block";
  const phoneRegex = /(03|05|07|08|09)+([0-9]{8})\b/;

  if (
    userName.value.trim() === "" ||
    address.value.trim() === "" ||
    (male.checked === false && female.checked === false) ||
    !phoneRegex.test(phone.value)
  ) {
    alert("Vui lòng không bỏ trống hoặc nhập sai định dạng dữ liệu!");
    return;
  }

 

  let student = {
    id: Math.floor(Math.random() * 1000000000),
    name: form.username.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    gender: form.gender.value,
  };
  form.reset();
  students.push(student);
  renderStudent();
};

// đây là phần update ạ
table.onclick = function (e) {
  if (e.target.classList.contains("btnDelete")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("btnUpdate")) {
    //   form.style.display = "block";
    //   table.style.display = "none";
    let id = e.target.parentElement.parentElement.id;

    let findIndex = -1;
    for (let i = 0; i < students.length; i = i + 1) {
      if (students[i].id === Number(id)) {
        findIndex = i;
      }
    }
    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = students[findIndex];
      form.innerHTML = `
      <h1>Thông tin học viên: </h1>
      Họ và tên: 
      <input type="text" id="username" value="${find.name}"><br><br>
      Email: 
      <input type="text" id="email" value="${find.email}"> <br><br>
      Số điện thoại: 
      <input type="text" id="phone" value="${find.phone}"><br><br>
      Quê Quán: 
      <input type="text" id="address" value="${find.address}"><br><br>
      Giới tính:
      <input type="radio" name="gender" value="male" id="male"> Nam 
      <input type="radio" name="gender" value="female" id="female"> Nữ
      <br><br>
      <button class="btn btn-info btnConfirm">Confirm</button>
      <button class="btn btn-danger btnCancel">Cancel</button>
      `;
    }
  }
  form.onclick = function (e) {
    if (e.target.classList.contains("btnConfirm")) {
      let userName = e.target.parentElement.children[1].value;
      let email = e.target.parentElement.children[4].value;
      let phone = e.target.parentElement.children[7].value;
      let address = e.target.parentElement.children[10].value;
      let gender = form.gender.value;
      students[updateIndex] = {
        ...students[updateIndex],
        name: userName,
        email: email,
        phone: phone,
        address: address,
        gender: gender,
      };
      renderStudent();
    }
    // form.reset()
};
};

let input = document.getElementById('search')
function btn_search (){

input.addEventListener("input", function() {
  const filter = input.value.toUpperCase();

  for (let i = 0; i < students.length; i++) {
    const name =students[i];
    const text = name.username
    console.log(text);
    if (text.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
});


}