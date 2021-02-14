const contactLists = document.querySelector(".contact__lists");
const createBtn = document.querySelector(".create__contact");
const cancelBtn = document.querySelector(".cancel");
const form = document.querySelector(".create__form");

let lists = [
  { name: "Mike", phone: "789456123" },
  { name: "Dev", phone: "789456123" },
  { name: "Sam", phone: "789456123" },
];

lists.map((list) => {
  contactLists.innerHTML += `<div class="row">
        <p class="row__name">${list.name}</p>
        <p class="row__phone">${list.phone}</p>
    </div>`;
});

const hide = () => {
  contactLists.style.opacity = 0;
  createBtn.style.opacity = 0;
};

const show = () => {
  contactLists.style.opacity = 1;
  createBtn.style.opacity = 1;
};

createBtn.addEventListener("click", () => {
  form.style.display = "flex";
  hide();
});

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
  show();
});

const formHandler = () => {
  let name = "";
  let phone = "";
  const nameEle = document.forms["form"]["username"];
  const phoneEle = document.forms["form"]["phone"];
  const submit = document.querySelector(".submit");

  nameEle.addEventListener("input", (e) => {
    name = e.target.value;
  });

  phoneEle.addEventListener("input", (e) => {
    phone = e.target.value;
  });

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    contactLists.innerHTML += `<div class="row">
            <p class="row__name">${name}</p>
            <p class="row__phone">${phone}</p>
        </div>`;

    nameEle.value = "";
    phoneEle.value = null;
    form.style.display = "none";
    show();
  });
};

formHandler();
