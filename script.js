// Planning des hackathons : modifie cette liste pour mettre à jour la section « La suite ».
// status : "a-venir", "inscrit" ou "termine". Ajoute un champ result une fois le hackathon passé.
const hackathons = [
  { month: "Nov. 2026", name: "Géniathon Eugenia #1", theme: "IA & automatisation de processus", status: "a-venir" },
  { month: "Déc. 2026", name: "Hackathon IA générative", theme: "Agents IA pour les métiers", status: "a-venir" },
  { month: "Janv. 2027", name: "Hackathon Open Data", theme: "Données publiques & territoires", status: "a-venir" },
  { month: "Févr. 2027", name: "Hackathon Fintech", theme: "Data & services financiers", status: "a-venir" },
  { month: "Mars 2027", name: "Géniathon Eugenia #2", theme: "Cas d'entreprise réel", status: "a-venir" },
  { month: "Mars 2027", name: "Hackathon Santé", theme: "Data au service du parcours patient", status: "a-venir" },
  { month: "Avr. 2027", name: "Hackathon Climat & Énergie", theme: "Mesurer et réduire l'impact", status: "a-venir" },
  { month: "Avr. 2027", name: "Hackathon Retail", theme: "Performance commerciale & prévision", status: "a-venir" },
  { month: "Mai 2027", name: "Hackathon Agents IA", theme: "Automatiser un métier de bout en bout", status: "a-venir" },
  { month: "Juin 2027", name: "Hackathon Robotique & IA", theme: "Robots de service et données terrain", status: "a-venir" },
];

const labels = { "a-venir": "À venir", inscrit: "Inscrit", termine: "Terminé" };

document.getElementById("timeline").innerHTML = hackathons
  .map(
    (h, i) => `
    <li class="event ${h.status}">
      <span class="event-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="event-body">
        <p class="event-month">${h.month}</p>
        <h3>${h.name}</h3>
        <p class="event-theme">${h.theme}</p>
        ${h.result ? `<p class="event-result">${h.result}</p>` : ""}
      </div>
      <span class="badge">${labels[h.status]}</span>
    </li>`
  )
  .join("");
