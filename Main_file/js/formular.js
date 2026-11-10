// Formularen: validerer, og sender brugeren videre til opsamlingssiden med valget i URL'en.
// E-mailen valideres, men sendes bevidst ikke videre (der er ingen server i projektet).

(() => {
  const form = document.getElementById("rsvp");
  if (!form) return;

  const PASSES = window.PASSES;
  const nameInput = form.querySelector("#guest-name");
  const emailInput = form.querySelector("#guest-email");
  const guestsSelect = form.querySelector("#guests");

  // Kommer man fra den interaktive SVG (?pass=stage), er passet allerede valgt
  const preselected = new URLSearchParams(location.search).get("pass");
  if (preselected && Object.prototype.hasOwnProperty.call(PASSES, preselected)) {
    const radio = form.querySelector(`input[name="pass"][value="${preselected}"]`);
    if (radio) radio.checked = true;
  }

  const showError = (key, message) => {
    document.getElementById(`err-${key}`).textContent = message;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    ["guest", "email", "pass"].forEach((key) => showError(key, ""));
    [nameInput, emailInput].forEach((input) => input.removeAttribute("aria-invalid"));

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const checked = form.querySelector('input[name="pass"]:checked');
    const guests = guestsSelect.value;

    let firstInvalid = null;
    const fail = (key, message, field) => {
      showError(key, message);
      if (field.type !== "radio") field.setAttribute("aria-invalid", "true");
      firstInvalid = firstInvalid || field;
    };

    if (name.length < 2) fail("guest", "Enter your name (at least 2 characters).", nameInput);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) fail("email", "Enter a valid email address.", emailInput);
    if (!checked) fail("pass", "Select a pass.", form.querySelector('input[name="pass"]'));

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const params = new URLSearchParams({ name, pass: checked.value, guests });
    location.href = `Summary.html?${params}`;
  });
})();
