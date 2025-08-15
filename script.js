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
     {
      keywords: ["asthma", "wheezing", "breathing difficulty"],
      response: "Asthma symptoms – avoid triggers and use inhalers as prescribed.",
      medicine: "Salbutamol inhaler (Ventolin), corticosteroid inhalers (Fluticasone) under medical advice."
    },
    {
      keywords: ["allergy", "sneezing", "itchy nose"],
      response: "Likely allergic rhinitis. Avoid dust, pollen, and strong smells.",
      medicine: "Antihistamines (Cetrizine, Levocetirizine), nasal spray (Fluticasone)."
    },
    {
      keywords: ["dehydration", "dry mouth", "dizziness"],
      response: "Loss of fluids and electrolytes. Rehydrate immediately.",
      medicine: "ORS solution, coconut water, electrolyte powder."
    },
    {
      keywords: ["burn", "skin burn", "scald"],
      response: "Cool the area under running water, avoid ice directly.",
      medicine: "Silver sulfadiazine cream, pain relievers (Paracetamol)."
    },
    {
      keywords: ["sprain", "swelling", "twisted ankle"],
      response: "Soft tissue injury – follow R.I.C.E. method (Rest, Ice, Compression, Elevation).",
      medicine: "Painkillers (Ibuprofen), topical analgesic creams."
    },
    {
      keywords: ["menstrual pain", "period cramps", "dysmenorrhea"],
      response: "Menstrual cramps are common; heat pads can help.",
      medicine: "Mefenamic acid (Meftal-Spas), Ibuprofen."
    },
    {
      keywords: ["pregnancy nausea", "morning sickness"],
      response: "Common in early pregnancy. Eat small, frequent meals.",
      medicine: "Vitamin B6 supplements, ginger tea (avoid medicines without doctor’s advice)."
    },
    {
      keywords: ["stroke", "face drooping", "arm weakness", "slurred speech"],
      response: "Possible stroke – call emergency services immediately!",
      medicine: "Emergency hospital care – time-sensitive clot-busting drugs."
    },
    {
      keywords: ["diabetes", "high blood sugar", "frequent urination", "excessive thirst"],
      response: "High blood sugar levels – maintain diet and take medicines regularly.",
      medicine: "Metformin, Insulin (if prescribed by doctor)."
    },
    {
      keywords: ["low blood sugar", "hypoglycemia", "sweating", "confusion"],
      response: "Low sugar – take something sweet immediately.",
      medicine: "Glucose powder, fruit juice, candy."
    },
    {
      keywords: ["hypertension", "high blood pressure"],
      response: "Maintain a low-salt diet, exercise, and manage stress.",
      medicine: "Amlodipine, Losartan (only under prescription)."
    },
    {
      keywords: ["urinary burning", "UTI", "pain while urinating"],
      response: "Possible urinary tract infection – drink more water.",
      medicine: "Cranberry supplements, Nitrofurantoin (if bacterial, prescription needed)."
    },
    {
      keywords: ["insomnia", "trouble sleeping"],
      response: "Practice good sleep hygiene – avoid caffeine before bed.",
      medicine: "Melatonin supplements (if prescribed), herbal teas like chamomile."
    },
    {
      keywords: ["anemia", "low hemoglobin", "fatigue", "pale skin"],
      response: "Likely iron deficiency – include iron-rich foods.",
      medicine: "Iron tablets (Ferrous sulfate), Vitamin C to aid absorption."
    },
    {
      keywords: ["depression", "persistent sadness", "loss of interest"],
      response: "Seek mental health support, maintain routine, talk to a therapist.",
      medicine: "Antidepressants (SSRIs) only under psychiatric supervision."
    },
    {
      keywords: ["heat stroke", "high body temperature", "confusion in hot weather"],
      response: "Move to a cool place, hydrate, and rest.",
      medicine: "ORS, IV fluids (in hospital)."
    },
    {
      keywords: ["food poisoning", "stomach cramps", "vomiting after eating"],
      response: "Likely due to contaminated food – hydrate and rest.",
      medicine: "ORS, probiotics, Ondansetron for vomiting."
    },
    {
      keywords: ["fainting", "loss of consciousness", "blackout"],
      response: "Could be due to low BP, dehydration, or sudden shock.",
      medicine: "Lie flat, elevate legs, drink fluids."
    },
    {
      keywords: ["motion sickness", "nausea while traveling"],
      response: "Avoid reading during travel, sit in a stable position.",
      medicine: "Dimenhydrinate (Dramamine), Meclizine."
    }
    {
    keywords: ["sinus", "sinusitis", "facial pain", "blocked nose"],
    response: "Likely sinus infection or inflammation. Steam inhalation may help.",
    medicine: "Steam inhalation, nasal spray (Oxymetazoline short term), Amoxicillin if bacterial."
  },
  {
    keywords: ["acid reflux", "gastroesophageal reflux", "GERD"],
    response: "Acid flows back into the esophagus causing burning sensation.",
    medicine: "Antacids, Omeprazole, Pantoprazole."
  },
  {
    keywords: ["gout", "toe pain", "joint swelling"],
    response: "Excess uric acid buildup can cause gout attacks.",
    medicine: "NSAIDs (Ibuprofen), Allopurinol (prescription), dietary changes."
  },
  {
    keywords: ["hair fall", "hair loss", "bald patches"],
    response: "Can be due to stress, deficiencies, or hormonal imbalance.",
    medicine: "Biotin supplements, Minoxidil topical solution."
  },
  {
    keywords: ["dandruff", "scalp itching", "flaky scalp"],
    response: "Fungal overgrowth or dry skin on scalp.",
    medicine: "Ketoconazole shampoo, Zinc pyrithione shampoo."
  },
  {
    keywords: ["mouth ulcer", "canker sore", "oral sore"],
    response: "Painful sores in mouth – often stress or vitamin related.",
    medicine: "Topical gels (Benzocaine), Vitamin B complex."
  },
  {
    keywords: ["bleeding gums", "gum swelling"],
    response: "Gum disease or vitamin deficiency.",
    medicine: "Vitamin C, Chlorhexidine mouthwash."
  },
  {
    keywords: ["kidney stone", "severe flank pain", "blood in urine"],
    response: "Mineral buildup in kidneys causing pain.",
    medicine: "Painkillers, hydration, Tamsulosin (doctor’s advice)."
  },
  {
    keywords: ["jaundice", "yellow eyes", "yellow skin"],
    response: "Excess bilirubin from liver issues.",
    medicine: "Hospital evaluation, supportive care."
  },
  {
    keywords: ["hepatitis", "liver infection"],
    response: "Viral hepatitis affects liver health.",
    medicine: "Rest, antivirals if needed, avoid alcohol."
  },
  {
    keywords: ["measles", "red rash", "high fever", "cough"],
    response: "Highly contagious viral infection.",
    medicine: "Supportive care, Vitamin A supplementation."
  },
  {
    keywords: ["chickenpox", "itchy rash", "blisters"],
    response: "Viral infection with fluid-filled blisters.",
    medicine: "Calamine lotion, Paracetamol, avoid scratching."
  },
  {
    keywords: ["malaria", "shivering", "intermittent fever"],
    response: "Mosquito-borne parasitic infection.",
    medicine: "Antimalarial drugs (Artemisinin-based combination therapy)."
  },
  {
    keywords: ["dengue", "platelet drop", "fever with pain behind eyes"],
    response: "Viral infection spread by mosquitoes.",
    medicine: "Paracetamol, hydration, platelet monitoring."
  },
  {
    keywords: ["typhoid", "prolonged fever", "abdominal pain"],
    response: "Bacterial infection from contaminated food/water.",
    medicine: "Antibiotics (Ciprofloxacin/Azithromycin), hydration."
  },
  {
    keywords: ["cholera", "profuse watery diarrhea"],
    response: "Severe bacterial infection causing dehydration.",
    medicine: "ORS, antibiotics (Doxycycline), IV fluids."
  },
  {
    keywords: ["stroke heat", "heat exhaustion", "hot weather illness"],
    response: "Body overheated due to high temperature.",
    medicine: "Cool down immediately, ORS, IV fluids if severe."
  },
  {
    keywords: ["panic attack", "rapid heartbeat", "shortness of breath"],
    response: "Sudden intense anxiety or fear episode.",
    medicine: "Deep breathing, relaxation, Benzodiazepines (short-term, prescription)."
  },
  {
    keywords: ["nosebleed", "epistaxis"],
    response: "Bleeding from nasal blood vessels – often dryness or trauma.",
    medicine: "Pinch nose, lean forward, ice pack on bridge of nose."
  },
  {
    keywords: ["fracture", "broken bone", "bone crack"],
    response: "Bone injury due to trauma.",
    medicine: "Immobilization, painkillers, orthopedic evaluation."
  },
  {
    keywords: ["burning feet", "foot neuropathy"],
    response: "Can be due to diabetes or vitamin deficiency.",
    medicine: "Vitamin B12 supplements, Gabapentin (prescription)."
  },
  {
    keywords: ["sciatica", "leg pain from back", "nerve pain"],
    response: "Compression of sciatic nerve causing pain.",
    medicine: "NSAIDs, physiotherapy, muscle relaxants."
  },
  {
    keywords: ["eczema", "skin dryness", "red itchy patches"],
    response: "Chronic skin condition with inflammation.",
    medicine: "Moisturizers, Hydrocortisone cream."
  },
  {
    keywords: ["psoriasis", "scaly skin patches"],
    response: "Autoimmune skin disorder.",
    medicine: "Topical corticosteroids, Vitamin D analog creams."
  },
  {
    keywords: ["ringworm", "fungal skin infection"],
    response: "Contagious skin infection caused by fungus.",
    medicine: "Clotrimazole cream, Terbinafine cream."
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
