// Basic navigation, contact-form email handoff, and demo chat.
// Update CONTACT_EMAIL below before publishing.
const CONTACT_EMAIL = "hello@example.com";

document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll("[data-privacy]").forEach(link => link.addEventListener("click", e => {
  e.preventDefault();
  alert("Add your published Privacy Policy URL here before launch.");
}));
document.querySelectorAll("[data-terms]").forEach(link => link.addEventListener("click", e => {
  e.preventDefault();
  alert("Add your published Terms page URL here before launch.");
}));

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const status = document.getElementById("form-status");
    if (!name || !email || !subject || !message) {
      status.textContent = "Please complete all required fields.";
      status.className = "form-status error";
      return;
    }
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${subject}\n\nMessage:\n${message}`;
    status.textContent = "Opening your email app with the message prepared. To receive submissions directly on the website, connect a form service such as Formspree.";
    status.className = "form-status success";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject + " — website enquiry")}&body=${encodeURIComponent(body)}`;
  });
}

const launcher = document.getElementById("chat-launcher");
const panel = document.getElementById("chat-panel");
const closeChat = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

function setChatOpen(open) {
  if (!panel || !launcher) return;
  panel.hidden = !open;
  launcher.setAttribute("aria-expanded", String(open));
  if (open && chatInput) chatInput.focus();
}
if (launcher) launcher.addEventListener("click", () => setChatOpen(panel.hidden));
if (closeChat) closeChat.addEventListener("click", () => setChatOpen(false));

if (chatForm) {
  chatForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    const bubble = document.createElement("div");
    bubble.className = "chat-message visitor";
    bubble.textContent = message;
    chatMessages.appendChild(bubble);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
    const response = document.createElement("div");
    response.className = "chat-message agent";
    response.textContent = "Thanks for your message! This demo chat isn't connected to an agent yet. Please use the Contact Us form or email " + CONTACT_EMAIL + ".";
    chatMessages.appendChild(response);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}
