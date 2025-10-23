console.log("✅ sizing chart initialized");

const baseURL = "https://sizing-data.netlify.app/";

const fileMap = {
  hats: "sizing_hats.json",
  mittens: "sizing_mittens.json",
  socks: "sizing_socks.json",
  blankets: "sizing_blankets.json",
  pillows: "sizing_pillows.json",
  sweaters_men: "sizing_sweaters_men.json",
  sweaters_misses: "sizing_sweaters_misses.json",
  sweaters_plus: "sizing_sweaters_plus.json",
  sweaters_kids: "sizing_sweaters_kids.json",
  sweaters_baby: "sizing_sweaters_baby.json",
  xmas_stockings: "sizing_xmas_stockings.json"
};

const grid = document.getElementById("sizingGrid");
const errorMsg = document.getElementById("errorMsg");
const unitToggle = document.getElementById("unitToggle");

// Restore saved unit preference
const savedUnit = localStorage.getItem("preferredUnit");
if (savedUnit === "cm") unitToggle.checked = true;

/* ---------- Conversion Function ---------- */
function convert(val, isLabel = false) {
  if (!val) return val;
  const text = String(val);
  if (isLabel) return text;
  if (!/\d/.test(text)) return text;

  const convertedText = text.replace(/(\d+(\.\d+)?)/g, (num) => {
    const n = parseFloat(num);
    if (isNaN(n)) return num;
    const converted = unitToggle.checked ? n * 2.54 : n;
    const rounded =
      Math.abs(converted - Math.round(converted)) < 0.05
        ? Math.round(converted)
        : converted.toFixed(1);
    return rounded;
  });

  let formatted = convertedText;
  if (unitToggle.checked) {
    formatted = formatted.replace(/("|in)/g, " cm");
  } else {
    formatted = formatted.replace(/\s?cm/g, '"');
  }

  return formatted.trim();
}

/* ---------- Fetch and Render ---------- */
async function fetchData(type) {
  const file = fileMap[type];
  if (!file) return;
  errorMsg.style.display = "none";
  grid.classList.add("fade-out");

  try {
    let response = await fetch(`${baseURL}${file}`);
    if (!response.ok) response = await fetch(`${baseURL}sizing_${type}.json`);
    if (!response.ok) throw new Error("Network response not ok");

    const data = await response.json();

    setTimeout(() => {
      grid.innerHTML = "";

      const bodyTypes = [
        "sweaters_men", "sweaters_misses", "sweaters_plus",
        "sweaters_kids", "sweaters_baby", "hats", "mittens", "socks"
      ];
      const showBodyNote = bodyTypes.includes(type);
      const isSweater = type.startsWith("sweaters_");

      const iconMap = {
        sweaters_men: "/assets/icons/sweater.svg",
        sweaters_misses: "/assets/icons/sweater.svg",
        sweaters_plus: "/assets/icons/sweater.svg",
        sweaters_kids: "/assets/icons/sweater.svg",
        sweaters_baby: "/assets/icons/sweater.svg",
        hats: "/assets/icons/hat.svg",
        mittens: "/assets/icons/mitten.svg",
        socks: "/assets/icons/sock.svg",
        blankets: "/assets/icons/blanket.svg",
        pillows: "/assets/icons/pillow.svg",
        xmas_stockings: "/assets/icons/stocking.svg"
      };

      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = isSweater ? "sizing-card expandable" : "sizing-card";
        let html = "";

        // --- Card Header (icon + category) ---
        const groupName = type
          .replace("sweaters_", "")
          .replace("_", " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        html += `
          <div class="card-header">
            <img src="${iconMap[type] || "/assets/icons/sweater.svg"}"
                 alt="${groupName} icon"
                 class="sizing-icon" />
            <div class="category-pill">${groupName}</div>
          </div>
        `;

        // --- Body Note ---
        if (showBodyNote) {
          html += `<p style="font-size:0.85em;color:#666;margin-bottom:6px;">
            <em>Body measurements only — ease not included.</em>
          </p>`;
        }

// --- Title (clean label — remove "(Bust ...)" or any parentheses) ---
let titleText = item.label || item.size || "";
// Remove parentheses that contain the word "Bust" or any text pattern like it
titleText = titleText.replace(/\(.*Bust.*\)/i, "").trim();
// Also remove empty trailing parentheses just in case
titleText = titleText.replace(/\(\s*\)/g, "").trim();
html += `<h3 class="sizing-title">${titleText}</h3>`;



        // --- Measurements ---
        const keys = Object.entries(item).filter(
          ([key]) => !["size", "label", "extended_label"].includes(key)
        );

        if (isSweater && keys.length > 4) {
          keys.slice(0, 4).forEach(([key, val]) => {
            html += `<p><strong>${key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}:</strong> ${convert(val)}</p>`;
          });
          html += `<div class="expanded-content">`;
          keys.slice(4).forEach(([key, val]) => {
            html += `<p><strong>${key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}:</strong> ${convert(val)}</p>`;
          });
          html += `</div><div class="chevron">▼</div>`;
        } else {
          keys.forEach(([key, val]) => {
            html += `<p><strong>${key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}:</strong> ${convert(val)}</p>`;
          });
        }

        card.innerHTML = html;
        grid.appendChild(card);

        // --- Expandable for sweaters ---
        if (isSweater) {
          const chevron = card.querySelector(".chevron");
          if (chevron) {
            chevron.addEventListener("click", (e) => {
              e.stopPropagation();
              card.classList.toggle("open");
            });
          }
        }
      });

      grid.classList.remove("fade-out");
      grid.classList.add("fade-in");
      setTimeout(() => grid.classList.remove("fade-in"), 400);
    }, 200);
  } catch (err) {
    console.error("Error loading data:", err);
    errorMsg.style.display = "block";
  }
}

/* ---------- Button Events ---------- */
document.querySelectorAll("[data-type]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".project-pills button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    fetchData(btn.dataset.type);
  });
});

/* ---------- Unit Toggle ---------- */
unitToggle.addEventListener("change", () => {
  localStorage.setItem("preferredUnit", unitToggle.checked ? "cm" : "in");
  document.body.setAttribute("data-unit", unitToggle.checked ? "cm" : "in");
  const active = document.querySelector(".project-pills button.active[data-type]");
  if (active) fetchData(active.dataset.type);
});

/* ---------- Dropdown ---------- */
const dropdownToggle = document.querySelector(".dropdown > button");
const dropdownContent = document.querySelector(".dropdown-content");

if (dropdownToggle && dropdownContent) {
  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownContent.contains(e.target) && !dropdownToggle.contains(e.target)) {
      dropdownContent.classList.remove("show");
    }
  });
}

/* ---------- Initialize ---------- */
document.body.setAttribute("data-unit", unitToggle.checked ? "cm" : "in");
fetchData("sweaters_misses");
