// 1. Mock Database of Medicines & Generic Equivalents
const medicinesData = [
  {
    id: "med-1",
    brandName: "Augmentin 625 Duo Tablet",
    saltComposition: "Amoxicillin (500mg) + Clavulanic Acid (125mg)",
    strength: "625 mg",
    category: "Antibiotics",
    manufacturer: "GlaxoSmithKline Pharmaceuticals Ltd",
    packaging: "Strip of 10 Tablets",
    mrp: 223.50,
    prescriptionRequired: true,
    genericAlternative: {
      name: "Moxikind-CV 625 Tablet",
      manufacturer: "Mankind Pharma Ltd",
      packaging: "Strip of 10 Tablets",
      mrp: 112.00
    },
    pharmacyStock: [
      { pharmacyId: "p1", status: "In Stock", price: 210.00, genericInStock: true },
      { pharmacyId: "p2", status: "Low Stock", price: 223.50, genericInStock: true },
      { pharmacyId: "p3", status: "Out of Stock", price: 223.50, genericInStock: true },
      { pharmacyId: "p4", status: "In Stock", price: 205.00, genericInStock: false }
    ]
  },
  {
    id: "med-2",
    brandName: "Dolo 650 Tablet",
    saltComposition: "Paracetamol / Acetaminophen (650mg)",
    strength: "650 mg",
    category: "Fever & Pain",
    manufacturer: "Micro Labs Ltd",
    packaging: "Strip of 15 Tablets",
    mrp: 33.75,
    prescriptionRequired: false,
    genericAlternative: {
      name: "Pacimol 650 Tablet (Generic / Jan Aushadhi)",
      manufacturer: "Ipca Laboratories Ltd",
      packaging: "Strip of 15 Tablets",
      mrp: 14.50
    },
    pharmacyStock: [
      { pharmacyId: "p1", status: "In Stock", price: 32.00, genericInStock: true },
      { pharmacyId: "p2", status: "In Stock", price: 33.75, genericInStock: true },
      { pharmacyId: "p3", status: "In Stock", price: 30.00, genericInStock: true },
      { pharmacyId: "p4", status: "Low Stock", price: 33.75, genericInStock: true }
    ]
  },
  {
    id: "med-3",
    brandName: "Pan-D Capsule PR",
    saltComposition: "Pantoprazole (40mg) + Domperidone (30mg)",
    strength: "40 mg / 30 mg",
    category: "Gastric Care",
    manufacturer: "Alkem Laboratories Ltd",
    packaging: "Strip of 15 Capsules",
    mrp: 210.00,
    prescriptionRequired: true,
    genericAlternative: {
      name: "Pantocid DSR Capsule",
      manufacturer: "Sun Pharmaceutical Industries",
      packaging: "Strip of 15 Capsules",
      mrp: 118.00
    },
    pharmacyStock: [
      { pharmacyId: "p1", status: "Out of Stock", price: 210.00, genericInStock: true },
      { pharmacyId: "p2", status: "In Stock", price: 198.00, genericInStock: true },
      { pharmacyId: "p3", status: "In Stock", price: 205.00, genericInStock: false },
      { pharmacyId: "p4", status: "In Stock", price: 195.00, genericInStock: true }
    ]
  },
  {
    id: "med-4",
    brandName: "Telma 40 Tablet",
    saltComposition: "Telmisartan (40mg)",
    strength: "40 mg",
    category: "Cardiac & BP",
    manufacturer: "Glenmark Pharmaceuticals Ltd",
    packaging: "Strip of 15 Tablets",
    mrp: 245.00,
    prescriptionRequired: true,
    genericAlternative: {
      name: "Telsartan 40 Tablet",
      manufacturer: "Dr. Reddy's Laboratories",
      packaging: "Strip of 15 Tablets",
      mrp: 98.00
    },
    pharmacyStock: [
      { pharmacyId: "p1", status: "In Stock", price: 230.00, genericInStock: true },
      { pharmacyId: "p2", status: "Out of Stock", price: 245.00, genericInStock: true },
      { pharmacyId: "p3", status: "Low Stock", price: 240.00, genericInStock: true },
      { pharmacyId: "p4", status: "In Stock", price: 228.00, genericInStock: true }
    ]
  },
  {
    id: "med-5",
    brandName: "Glycomet-GP 2 Tablet PR",
    saltComposition: "Glimepiride (2mg) + Metformin (500mg)",
    strength: "2 mg / 500 mg",
    category: "Diabetes",
    manufacturer: "USV Private Ltd",
    packaging: "Strip of 15 Tablets",
    mrp: 192.00,
    prescriptionRequired: true,
    genericAlternative: {
      name: "Glimestar-M 2 Tablet PR",
      manufacturer: "Mankind Pharma Ltd",
      packaging: "Strip of 15 Tablets",
      mrp: 94.00
    },
    pharmacyStock: [
      { pharmacyId: "p1", status: "In Stock", price: 180.00, genericInStock: true },
      { pharmacyId: "p2", status: "In Stock", price: 185.00, genericInStock: true },
      { pharmacyId: "p3", status: "In Stock", price: 190.00, genericInStock: true },
      { pharmacyId: "p4", status: "Out of Stock", price: 192.00, genericInStock: true }
    ]
  },
  {
    id: "med-6",
    brandName: "Allegra 120mg Tablet",
    saltComposition: "Fexofenadine (120mg)",
    strength: "120 mg",
    category: "Allergy & Cold",
    manufacturer: "Sanofi India Ltd",
    packaging: "Strip of 10 Tablets",
    mrp: 218.00,
    prescriptionRequired: false,
    genericAlternative: {
      name: "Fexova 120 Tablet",
      manufacturer: "Ipca Laboratories Ltd",
      packaging: "Strip of 10 Tablets",
      mrp: 96.00
    },
    pharmacyStock: [
      { pharmacyId: "p1", status: "Low Stock", price: 212.00, genericInStock: true },
      { pharmacyId: "p2", status: "In Stock", price: 208.00, genericInStock: true },
      { pharmacyId: "p3", status: "Out of Stock", price: 218.00, genericInStock: true },
      { pharmacyId: "p4", status: "In Stock", price: 215.00, genericInStock: true }
    ]
  }
];

// 2. Local Pharmacy Directory Data
const localPharmacies = [
  {
    id: "p1",
    name: "Apollo Pharmacy & Wellness",
    address: "Shop 14, Ground Floor, Lawrence Road Market",
    phone: "+91 98140-11223",
    distance: "0.6 km away",
    hours: "Open 24 Hours"
  },
  {
    id: "p2",
    name: "LifeCare Medicos & Generics",
    address: "Opposite Civil Hospital Gate No. 2, Circular Road",
    phone: "+91 98722-44556",
    distance: "1.2 km away",
    hours: "8:00 AM – 11:00 PM"
  },
  {
    id: "p3",
    name: "Pradhan Mantri Jan Aushadhi Kendra",
    address: "Near Bus Stand Chowk, Hall Bazaar Complex",
    phone: "+91 94170-88990",
    distance: "1.8 km away",
    hours: "9:00 AM – 9:00 PM"
  },
  {
    id: "p4",
    name: "Sewak Chemist & Druggist",
    address: "Ranjit Avenue, B-Block Main Market",
    phone: "+91 98155-77331",
    distance: "2.4 km away",
    hours: "8:30 AM – 10:30 PM"
  }
];

// State Variables
let selectedMedicine = medicinesData[0];
let activeCategory = "All";
let viewingGenericMode = false;

// DOM Elements
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const autocompleteList = document.getElementById("autocompleteList");
const categoryFilters = document.getElementById("categoryFilters");
const medicineDetailCard = document.getElementById("medicineDetailCard");
const genericSuggesterCard = document.getElementById("genericSuggesterCard");
const pharmacyList = document.getElementById("pharmacyList");
const pharmacySubtitle = document.getElementById("pharmacySubtitle");
const inStockOnlyToggle = document.getElementById("inStockOnlyToggle");

// Modal Elements
const reserveModal = document.getElementById("reserveModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalBodyContent = document.getElementById("modalBodyContent");
const reserveForm = document.getElementById("reserveForm");

// Initialize App
function initApp() {
  renderMedicineDetails(selectedMedicine);
  renderGenericSuggester(selectedMedicine);
  renderPharmacyDirectory(selectedMedicine);
  setupEventListeners();
}

// 3. Render Medicine Detail Card
function renderMedicineDetails(med) {
  const displayTitle = viewingGenericMode ? med.genericAlternative.name : med.brandName;
  const displayManufacturer = viewingGenericMode ? med.genericAlternative.manufacturer : med.manufacturer;
  const displayPackaging = viewingGenericMode ? med.genericAlternative.packaging : med.packaging;
  const displayMrp = viewingGenericMode ? med.genericAlternative.mrp : med.mrp;

  medicineDetailCard.innerHTML = `
    <div class="med-badge-row">
      <span class="cat-tag">${med.category}</span>
      <span class="rx-tag">${med.prescriptionRequired ? "Rx Prescription Required" : "OTC / No Rx Needed"}</span>
    </div>
    <h2 class="med-title">${displayTitle}</h2>
    <p class="med-salt">🧪 Salt Composition: ${med.saltComposition}</p>

    <div class="med-specs-grid">
      <div class="spec-box">
        <span>Manufacturer</span>
        <strong>${displayManufacturer}</strong>
      </div>
      <div class="spec-box">
        <span>Strength</span>
        <strong>${med.strength}</strong>
      </div>
      <div class="spec-box">
        <span>Packaging</span>
        <strong>${displayPackaging}</strong>
      </div>
      <div class="spec-box">
        <span>Medicine Type</span>
        <strong>${viewingGenericMode ? "Verified Generic Substitute" : "Branded Originator"}</strong>
      </div>
    </div>

    <div class="mrp-box">
      <div>
        <span class="mrp-label">Maximum Retail Price (MRP)</span>
        <p style="font-size: 0.78rem; color: #64748b;">Inclusive of all taxes per strip</p>
      </div>
      <div class="mrp-price">₹${displayMrp.toFixed(2)}</div>
    </div>
  `;
}

// 4. Render Generic Alternative Suggester with Savings %
function renderGenericSuggester(med) {
  const gen = med.genericAlternative;
  const savingsAmount = med.mrp - gen.mrp;
  const savingsPercent = Math.round((savingsAmount / med.mrp) * 100);

  genericSuggesterCard.innerHTML = `
    <div class="generic-header">
      <h3>💡 Affordable Generic Substitute</h3>
      <span class="savings-badge">Save ${savingsPercent}% (₹${savingsAmount.toFixed(2)})</span>
    </div>
    <p style="font-size: 0.85rem; color: #334155; margin-bottom: 0.85rem;">
      Contains the exact same active salt composition (<strong>${med.saltComposition}</strong>) and strength (<strong>${med.strength}</strong>).
    </p>

    <div class="generic-comparison-box">
      <div class="gen-info">
        <h4>${gen.name}</h4>
        <p>By ${gen.manufacturer} • ${gen.packaging}</p>
      </div>
      <div class="gen-pricing">
        <div class="gen-new-price">₹${gen.mrp.toFixed(2)}</div>
        <div class="gen-old-price">Brand MRP: ₹${med.mrp.toFixed(2)}</div>
      </div>
    </div>

    <button class="switch-generic-btn" id="toggleGenericViewBtn">
      ${viewingGenericMode 
        ? `← View Original Brand (${med.brandName})` 
        : `Switch & Check Local Stock for ${gen.name} →`}
    </button>
  `;

  document.getElementById("toggleGenericViewBtn").addEventListener("click", () => {
    viewingGenericMode = !viewingGenericMode;
    renderMedicineDetails(selectedMedicine);
    renderGenericSuggester(selectedMedicine);
    renderPharmacyDirectory(selectedMedicine);
  });
}

// 5. Render Local Pharmacy Availability Directory
function renderPharmacyDirectory(med) {
  const onlyInStock = inStockOnlyToggle.checked;
  const activeName = viewingGenericMode ? med.genericAlternative.name : med.brandName;
  pharmacySubtitle.textContent = `Showing nearby chemist stock for ${activeName}`;

  pharmacyList.innerHTML = "";

  med.pharmacyStock.forEach((stockEntry) => {
    const pharmacy = localPharmacies.find(p => p.id === stockEntry.pharmacyId);
    if (!pharmacy) return;

    // Determine effective status & price depending on Brand vs Generic mode
    const effectiveStatus = viewingGenericMode
      ? (stockEntry.genericInStock ? "In Stock" : "Out of Stock")
      : stockEntry.status;

    const effectivePrice = viewingGenericMode
      ? med.genericAlternative.mrp
      : stockEntry.price;

    if (onlyInStock && effectiveStatus === "Out of Stock") return;

    let badgeClass = "stock-in";
    if (effectiveStatus === "Low Stock") badgeClass = "stock-low";
    if (effectiveStatus === "Out of Stock") badgeClass = "stock-out";

    const itemDiv = document.createElement("div");
    itemDiv.className = "pharmacy-item";
    itemDiv.innerHTML = `
      <div class="pharm-top">
        <div>
          <div class="pharm-name">${pharmacy.name}</div>
          <div class="pharm-address">📍 ${pharmacy.address} • 🕒 ${pharmacy.hours}</div>
        </div>
        <span class="distance-tag">${pharmacy.distance}</span>
      </div>

      <div class="pharm-bottom">
        <div>
          <span class="stock-badge ${badgeClass}">● ${effectiveStatus}</span>
          <span style="font-weight: 700; margin-left: 0.5rem; font-size: 0.95rem;">
            Store Price: ₹${effectivePrice.toFixed(2)}
          </span>
        </div>
        <div class="pharm-actions">
          <a href="tel:${pharmacy.phone}" class="btn-outline">📞 ${pharmacy.phone}</a>
          <button 
            class="btn-primary reserve-btn" 
            data-pharm="${pharmacy.name}" 
            data-med="${activeName}" 
            data-price="${effectivePrice.toFixed(2)}"
            ${effectiveStatus === "Out of Stock" ? "disabled" : ""}
          >
            Reserve Pickup
          </button>
        </div>
      </div>
    `;

    pharmacyList.appendChild(itemDiv);
  });

  if (pharmacyList.children.length === 0) {
    pharmacyList.innerHTML = `<p style="color: #64748b; text-align: center; padding: 1.5rem;">No pharmacies currently have this item in stock.</p>`;
  }

  // Bind Reserve Buttons
  document.querySelectorAll(".reserve-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pharmName = e.target.getAttribute("data-pharm");
      const medName = e.target.getAttribute("data-med");
      const price = e.target.getAttribute("data-price");
      openReserveModal(pharmName, medName, price);
    });
  });
}

// 6. Live Autocomplete Search & Filtering
function handleAutocomplete() {
  const query = searchInput.value.trim().toLowerCase();
  clearSearchBtn.classList.toggle("hidden", query.length === 0);

  const matches = medicinesData.filter(med => {
    const matchesCategory = activeCategory === "All" || med.category === activeCategory;
    const matchesQuery =
      med.brandName.toLowerCase().includes(query) ||
      med.saltComposition.toLowerCase().includes(query) ||
      med.category.toLowerCase().includes(query) ||
      med.genericAlternative.name.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  if (query.length === 0 && activeCategory === "All") {
    autocompleteList.classList.add("hidden");
    return;
  }

  autocompleteList.innerHTML = "";

  if (matches.length === 0) {
    autocompleteList.innerHTML = `<li class="autocomplete-item"><span>No matching medicines found. Try another salt or brand name.</span></li>`;
  } else {
    matches.forEach(med => {
      const li = document.createElement("li");
      li.className = "autocomplete-item";
      li.innerHTML = `
        <div class="auto-main">
          <strong>${med.brandName}</strong>
          <span>Salt: ${med.saltComposition} • Generic: ${med.genericAlternative.name}</span>
        </div>
        <div class="auto-meta">
          <span class="auto-cat">${med.category}</span>
          <span class="auto-price">₹${med.mrp.toFixed(2)}</span>
        </div>
      `;
      li.addEventListener("click", () => {
        selectedMedicine = med;
        viewingGenericMode = false;
        searchInput.value = med.brandName;
        autocompleteList.classList.add("hidden");
        renderMedicineDetails(selectedMedicine);
        renderGenericSuggester(selectedMedicine);
        renderPharmacyDirectory(selectedMedicine);
      });
      autocompleteList.appendChild(li);
    });
  }

  autocompleteList.classList.remove("hidden");
}

// 7. Modal & Event Listeners
function openReserveModal(pharmName, medName, price) {
  modalBodyContent.innerHTML = `
    <p><strong>Medicine:</strong> ${medName}</p>
    <p><strong>Pharmacy:</strong> ${pharmName}</p>
    <p><strong>Unit Price:</strong> ₹${price} per pack</p>
  `;
  reserveModal.classList.remove("hidden");
}

function setupEventListeners() {
  searchInput.addEventListener("input", handleAutocomplete);
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length > 0 || activeCategory !== "All") {
      handleAutocomplete();
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    autocompleteList.classList.add("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-section")) {
      autocompleteList.classList.add("hidden");
    }
  });

  // Category filter buttons
  categoryFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-btn");
    if (!btn) return;

    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-category");

    // Automatically select first medicine in category & show list
    const firstMatch = medicinesData.find(m => activeCategory === "All" || m.category === activeCategory);
    if (firstMatch) {
      selectedMedicine = firstMatch;
      viewingGenericMode = false;
      renderMedicineDetails(selectedMedicine);
      renderGenericSuggester(selectedMedicine);
      renderPharmacyDirectory(selectedMedicine);
    }
    handleAutocomplete();
  });

  inStockOnlyToggle.addEventListener("change", () => {
    renderPharmacyDirectory(selectedMedicine);
  });

  closeModalBtn.addEventListener("click", () => {
    reserveModal.classList.add("hidden");
  });

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("patientName").value;
    const token = "MED-" + Math.floor(1000 + Math.random() * 9000);
    alert(`Reservation Confirmed for ${name}!\nPickup Token: ${token}\nYour medicine is held for the next 2 hours.`);
    reserveForm.reset();
    reserveModal.classList.add("hidden");
  });
}

// Start application on DOM load
document.addEventListener("DOMContentLoaded", initApp);