const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage(input, 'user');
  userInput.value = '';

  const response = getDiagnosisWithMedicine(input.toLowerCase());
  setTimeout(() => addMessage(response, 'bot'), 800);
}

function addMessage(msg, type) {
  const div = document.createElement("div");
  div.className = type;
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 🧠 Trained Symptom Knowledge Base
function getDiagnosisWithMedicine(input) {
  if (input === "hi" || input === "hello") {
    return "Hi, how can I help you?";
  }

  const knowledgeBase = [
    {
      keywords: ["fever", "high temperature", "chills"],
      response: "You may have a fever due to viral or bacterial infection. Stay hydrated, rest, and monitor your temperature.",
      medicine: "Paracetamol (e.g., Crocin, Calpol) – every 6 hours as needed."
    },
    {
      keywords: ["headache", "migraine", "pain in head"],
      response: "This could be a stress headache or migraine. Rest in a quiet, dark room.",
      medicine: "Ibuprofen (e.g., Brufen) or Paracetamol. Avoid overuse."
    },
    {
      keywords: ["cough", "dry cough", "wet cough"],
      response: "A cough may indicate cold, flu, or throat infection. Drink warm fluids.",
      medicine: "Cough syrup like Benadryl (dry cough) or Ascoril (wet cough)."
    },
    {
      keywords: ["sore throat", "throat pain"],
      response: "Gargle with warm salt water and stay hydrated. Avoid cold drinks.",
      medicine: "Lozenges (Strepsils), or syrup like Betadine Gargle."
    },
    {
      keywords: ["stomach pain", "abdominal pain"],
      response: "Could be due to gas, indigestion, or mild infection.",
      medicine: "Antacid (Gelusil, Eno) or Dicyclomine (Spasmo-Proxyvon)."
    },
    {
      keywords: ["vomiting", "nausea"],
      response: "Likely food-related or due to infection. Sip water slowly.",
      medicine: "Ondansetron (Emeset) – helps control nausea."
    },
    {
      keywords: ["diarrhea", "loose motion"],
      response: "Avoid dairy/spicy food. Stay hydrated with ORS.",
      medicine: "ORS (Electral), Loperamide (Imodium – if not severe)."
    },
    {
      keywords: ["cold", "runny nose"],
      response: "Common cold. Rest, drink warm fluids, and take vitamin C.",
      medicine: "Cetrizine, D-Cold Total."
    },
    {
      keywords: ["body pain", "fatigue", "tiredness"],
      response: "Could be viral or due to overexertion. Rest is key.",
      medicine: "Paracetamol for pain, multivitamins if needed."
    },
    {
      keywords: ["acidity", "heartburn", "indigestion"],
      response: "Avoid oily/spicy foods. Don’t lie down after meals.",
      medicine: "Antacids like Digene, Pantoprazole (Pantocid)."
    },
    {
      keywords: ["rash", "itching", "skin allergy"],
      response: "Might be an allergic reaction or skin infection.",
      medicine: "Antihistamines (Levocetirizine, Cetrizine) or calamine lotion."
    },
    {
      keywords: ["joint pain", "knee pain", "body stiffness"],
      response: "May be due to arthritis or fatigue. Light movement can help.",
      medicine: "Pain relievers (Paracetamol, Ibuprofen), topical creams like Volini."
    },
    {
      keywords: ["covid", "corona", "loss of taste", "breathing issue"],
      response: "You may be showing COVID-like symptoms. Isolate and get tested.",
      medicine: "Paracetamol for fever. Consult doctor if symptoms worsen."
    },
    {
      keywords: ["heart attack", "chest pain", "shortness of breath"],
      response: "Possible signs of a heart attack! Seek emergency medical attention immediately.",
      medicine: "Aspirin (if advised), Nitroglycerin under medical supervision."
    },
    {
      keywords: ["tb", "tuberculosis", "persistent cough", "blood in cough"],
      response: "Signs may indicate Tuberculosis. Get a chest X-ray and sputum test.",
      medicine: "Anti-TB medication under doctor’s guidance (Rifampicin, Isoniazid)."
    },
    {
      keywords: ["eye pain", "blurred vision", "red eyes", "itchy eyes"],
      response: "Eye issues could be due to infection, dryness, or allergy.",
      medicine: "Lubricating drops (Tears Naturale), Cetrizine for allergies. Avoid screen strain."
    },
    {
      keywords: ["back pain", "lower back pain", "spine pain"],
      response: "Could be muscle strain, posture issue, or disc problem.",
      medicine: "Painkillers (Ibuprofen), rest, hot/cold compression."
    },
    {
      keywords: ["tooth pain", "toothache", "gum pain"],
      response: "May be cavity, infection, or gum disease. Rinse with warm salt water.",
      medicine: "Painkillers (Ketorolac), consult a dentist if persists."
    },
    {
      keywords: ["ear pain", "hearing loss", "ear pressure"],
      response: "Could be ear infection, wax buildup, or Eustachian tube issue.",
      medicine: "Painkillers, ear drops (if advised by ENT specialist)."
    }
  ];

  for (let item of knowledgeBase) {
    for (let keyword of item.keywords) {
      if (input.includes(keyword)) {
        return `${item.response}\n💊 Suggested Medicine: ${item.medicine}`;
      }
    }
  }

  return "I'm not sure what you're experiencing. Please describe your symptoms in more detail.";
}

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
