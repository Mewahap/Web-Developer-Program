// Hidden Form
function tampilkan_form() {
  var hasil = document.getElementById("hasil");

  if (hasil.style.display === "none") {
    hasil.style.display = "block";
  } else {
    hasil.style.display = "none";
  }
}

// untuk mengisi input data yang ingin di edit
const Form = document.getElementById("form-data");
const Nama = document.getElementById("nama");
const Role = document.getElementById("role");
const Availability = document.getElementById("avaibility");
const Usia = document.getElementById("usia");
const Lokasi = document.getElementById("lokasi");
const Pengalaman = document.getElementById("pengalaman");
const Email = document.getElementById("email");

const buttonSubmit = document.getElementById("button1");
const Hasil = document.getElementById("hasil");

let isLowerBracketShow = true;

Form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Inama = Form.elements.inama.value;
  const Irole = Form.elements.irole.value;
  const Iavaibility = Form.elements.iavailability.value;
  const Iusia = Form.elements.iusia.value;
  const Ilokasi = Form.elements.ilokasi.value;
  const Ipengalaman = Form.elements.ipengalaman.value;
  const Iemail = Form.elements.iemail.value;

  inama.innerHTML = Inama;
  irole.innerHTML = Irole;
  iavailability.innerHTML = Iavaibility;
  iusia.innerHTML = Iusia;
  ilokasi.innerHTML = Ilokasi;
  ipengalaman.innerHTML = Ipengalaman;
  iemail.innerHTML = Iemail;

  tampil_hasil();
});

function tampil_hasil() {
  if (isLowerBracketShow) {
    Hasil.isLowerBracketShow = false;
    Hasil.classList.remove("hide");
  } else {
    isLowerBracketShow = true;
    Hasil.classList.add("hide");
  }
}

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  tampil_hasil();
});
// function tampilkan_form() {
//   document.getElementById("hasil").innerHTML;
// }
