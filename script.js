// Button Click
document.getElementById('magicButton').addEventListener('click', function () {
    this.textContent = "You called me!";
    this.style.backgroundColor = '#28a745';
  });
  
  // Hover Effect
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseenter', () => hoverBox.style.backgroundColor = 'lightgreen');
  hoverBox.addEventListener('mouseleave', () => hoverBox.style.backgroundColor = 'lightgray');
  
  // Keypress Detection
  document.getElementById('keyInput').addEventListener('keyup', (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Secret Double Click
  document.getElementById('secretBox').addEventListener('dblclick', () => {
    alert("🎉 Secret unlocked!");
  });
  
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  const tabContent = document.getElementById('tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      tabContent.textContent = `You opened Tab ${tabId}`;
    });
  });
  
  // Form Validation
  const form = document.getElementById('sampleForm');
  const password = document.getElementById('password');
  const feedback = document.getElementById('feedback');
  
  password.addEventListener('input', () => {
    if (password.value.length < 8) {
      feedback.textContent = "Password must be at least 8 characters";
    } else {
      feedback.textContent = "";
    }
  });
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (password.value.length < 8) {
      alert("Fix form errors before submitting.");
    } else {
      alert("Form submitted successfully!");
    }
  });
  