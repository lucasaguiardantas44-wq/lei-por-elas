// =========================
// MENU MOBILE
// =========================
function toggleMenu(){
  const menu = document.getElementById("menu");
  if(menu) menu.classList.toggle("active");
}


// =========================
// SCROLL ANIMATION (ÚNICO)
// =========================
function reveal(){
  document.querySelectorAll(".fade-in, .fade").forEach(el=>{
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 90){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// =========================
// CONTATO WHATSAPP
// =========================
const formContato = document.getElementById("formContato");

if(formContato){
  formContato.addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const msg = document.getElementById("msg")?.value || "";

    const texto =
`Olá, sou ${nome}

Email: ${email}

Mensagem:
${msg}`;

    window.open(
      "https://wa.me/5511972834999?text=" + encodeURIComponent(texto),
      "_blank"
    );
  });
}

function toggleForm() {
  const box = document.getElementById("volBox");
  box.classList.toggle("active");
}