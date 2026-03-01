function toggleAuth(mode) {
  const loginSec = document.getElementById('login-section');
  const regSec = document.getElementById('register-section');
  if (mode === 'register') {
    loginSec.style.display = 'none';
    regSec.style.display = 'block';
  } else {
    loginSec.style.display = 'block';
    regSec.style.display = 'none';
  }
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) return alert("Please fill all fields");

  try {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      const data = await res.json();
      setToken(data.token);
      window.location.href = "home.html";
    } else {
      const errText = await res.text();
      alert(`Login failed (${res.status}): ${errText || 'Invalid credentials'}`);
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred connecting to the server.");
  }
}

async function register() {
  const email = document.getElementById('reg-email').value;
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (!email || !username || !password) return alert("Please fill all fields");

  try {
    const res = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password })
    });

    if (res.ok) {
      alert("Registration successful! Please login.");
      toggleAuth('login');
    } else {
      alert("Registration failed. Username or email might be taken.");
    }
  } catch (err) {
    console.error(err);
    alert("Connection Error: " + err.message);
  }
}

function logout() {
  clearToken();
  window.location.href = "index.html";
}