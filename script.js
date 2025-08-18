const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector(".main-content");

menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("collapsed");
  mainContent.classList.remove("collapsed");
  sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.add("collapsed");
  mainContent.classList.add("collapsed");
});

const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

const ctx = document.getElementById("salesChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 2500, 3200, 4000],
        borderColor: "#00a8ff",
        backgroundColor: "rgba(0,168,255,0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  },
});

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText.replace(/\D/g, "");
    const increment = target / 100;

    if (current < target) {
      counter.innerText = counter.innerText.includes("$")
        ? `$${Math.ceil(current + increment)}`
        : counter.innerText.includes("%")
        ? `${Math.ceil(current + increment)}%`
        : Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = counter.innerText.includes("$")
        ? `$${target}`
        : counter.innerText.includes("%")
        ? `${target}%`
        : target;
    }
  };
  updateCounter();
});
