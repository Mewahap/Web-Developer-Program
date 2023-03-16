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
const Usia = document.getElementById("usia");
const Lokasi = document.getElementById("lokasi");
const Pengalaman = document.getElementById("pengalaman");
const Email = document.getElementById("email");

const buttonSubmit = document.getElementById("my-button");
const Hasil = document.getElementById("hasil");

let isLowerBracketShow = true;

Form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputnama = Form.elements.Nama.value;
  const inputrole = Form.elements.Role.value;
  const inputusia = Form.elements.Usia.value;
  const inputlokasi = Form.elements.Lokasi.value;
  const inputpengalaman = Form.elements.Pengalaman.value;
  const inputemail = Form.elements.Email.value;

  Nama.innerHTML = inputnama;
  Role.innerHTML = inputrole;
  Usia.innerHTML = inputusia;
  Lokasi.innerHTML = inputlokasi;
  Pengalaman.innerHTML = inputpengalaman;
  Email.innerHTML = inputemail;

  tampil_hasil();
  Form.style.display = "none";
});

// untuk menampilkan input data yang sudah di edit
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

// Menampilkan jendela Allert sukses mengedit
btn = document.getElementById("submit");
btn.addEventListener("click", function () {
  let timerInterval;
  Swal.fire({
    title: "Terima kasih",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
});
