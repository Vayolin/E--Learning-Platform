// Filter courses
    document.getElementById("searchInput").addEventListener("input", function () {
      const filter = this.value.toLowerCase();
      const cards = document.querySelectorAll(".course-card");

      cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(filter) ? "block" : "none";
      });
    });

    // Login Modal
    function openLogin() {
      document.getElementById("loginModal").style.display = "flex";
    }

    function closeLogin() {
      document.getElementById("loginModal").style.display = "none";
    }

    function handleLogin(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      alert(`Welcome, ${email.split("@")[0]}! (Login is demo only)`);
      closeLogin();
    }