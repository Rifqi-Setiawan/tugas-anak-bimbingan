function getValue(item: string): string {
  let namaPanjang = document.getElementById(item) as HTMLInputElement;
  if (namaPanjang) {
    return namaPanjang.value;
  } else {
    throw new Error(`Element with id ${item} not found`);
  }
}

function getById(id: string): HTMLElement | null {
  return document.getElementById(id);
}

// algoritma signup start
function signUp(): void {
  interface akun {
    fullName: string;
    email: string;
    password: string;
  }
  let tabAkun: akun[] = JSON.parse(localStorage.getItem('tabAkun') || '[]');

  let warningFullName = document.getElementById("warningFullName");
  let warningEmail = document.getElementById("warningEmail");
  let warningPassword = document.getElementById("warningPassword");

  let resultFullName = getById("fullName");
  let fullName = getValue("fullName");
  if (!fullName) {
    warningFullName?.classList.remove("hidden");
  } else {
    warningFullName?.classList.add("hidden");
  }

  let email = getValue(`email`);
  let resultEmail = getById("email");
  if (!email) {
    warningEmail?.classList.remove("hidden");
  } else {
    warningEmail?.classList.add("hidden");
  }

  let password = getValue("password");
  let resultPassword = getById("password");
  if (!password) {
    warningPassword?.classList.remove("hidden");
  } else {
    warningPassword?.classList.add("hidden");
  }

  if (password && email && fullName) {
    let newAkun: akun = {
      fullName: fullName,
      email: email,
      password: password,
    };
    tabAkun.push(newAkun);
    localStorage.setItem("tabAkun", JSON.stringify(tabAkun));
    window.location.replace("index.html");
  }
}

// algoritma signup end

// algoritma login start

function loginAkun(): void {
  interface akun {
    fullName: string;
    email: string;
    password: string;
  }

  let verifikasi: boolean = false;
  let urutan: number = -1;
  const storedTabAkun = localStorage.getItem("tabAkun");
  let tabAkun: akun[] = JSON.parse(localStorage.getItem('tabAkun') || '[]');
  let loginWarningPassword = getById("loginWarningPassword");
  let loginWarningEmail = getById("loginWarningEmail");
  let passwordLogin: string = getValue("passwordLogin");
  let emailLogin: string = getValue("emailLogin");
  
  if (storedTabAkun) {
    tabAkun = JSON.parse(storedTabAkun);
  }

  for (let i = 0; i < tabAkun.length; i++) {
    if (tabAkun[i].email === emailLogin && tabAkun[i].password === passwordLogin){
      verifikasi = true;
      localStorage.setItem('uname', tabAkun[i].fullName);
      window.location.href = "page2.html";
    }

  }

  if (!verifikasi) {
    loginWarningPassword?.classList.remove('hidden');
  } else {
    loginWarningPassword?.classList.add('hidden');
  }
}
