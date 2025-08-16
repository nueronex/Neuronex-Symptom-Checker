const symptomsDB = {
  "fever": {
    reason: "Infections (viral, bacterial), flu, inflammation.",
    medicine: "Paracetamol, fluids, rest."
  },
  "cough": {
    reason: "Cold, flu, allergies, bronchitis.",
    medicine: "Cough syrup, warm fluids."
  },
  "headache": {
    reason: "Stress, migraine, dehydration.",
    medicine: "Paracetamol, Ibuprofen, hydration."
  },
  "cold": {
    reason: "Viral infection (common cold).",
    medicine: "Antihistamines, steam inhalation."
  },
  "sore throat": {
    reason: "Viral/bacterial infection, dryness.",
    medicine: "Warm water gargle, lozenges."
  },
  "stomach pain": {
    reason: "Indigestion, gastritis, ulcer.",
    medicine: "Antacids, hydration."
  },
  "diarrhea": {
    reason: "Food poisoning, infection.",
    medicine: "ORS, probiotics, hydration."
  },
  "constipation": {
    reason: "Low fiber diet, dehydration.",
    medicine: "Fiber-rich food, laxatives."
  },
  "vomiting": {
    reason: "Food poisoning, infection, gastritis.",
    medicine: "ORS, antiemetic medicines."
  },
  "nausea": {
    reason: "Pregnancy, infection, stomach upset.",
    medicine: "Ginger tea, anti-nausea drugs."
  },
  "fatigue": {
    reason: "Anemia, lack of sleep, stress.",
    medicine: "Iron supplements, proper rest."
  },
  "back pain": {
    reason: "Poor posture, muscle strain.",
    medicine: "Pain relievers, hot compress."
  },
  "chest pain": {
    reason: "Heart disease, acidity, lung issues.",
    medicine: "Antacids, urgent checkup if severe."
  },
  "shortness of breath": {
    reason: "Asthma, lung infection, heart issues.",
    medicine: "Inhaler, seek urgent care."
  },
  "rash": {
    reason: "Allergy, skin infection.",
    medicine: "Antihistamines, calamine lotion."
  },
  "joint pain": {
    reason: "Arthritis, injury, gout.",
    medicine: "Pain relievers, physiotherapy."
  },
  "dizziness": {
    reason: "Low BP, dehydration, anemia.",
    medicine: "ORS, hydration, rest."
  },
  "anxiety": {
    reason: "Stress, panic disorder.",
    medicine: "Breathing exercises, therapy."
  },
  "depression": {
    reason: "Mental health disorder.",
    medicine: "Therapy, antidepressants (doctor)."
  },
  "weight loss": {
    reason: "Thyroid, diabetes, infection.",
    medicine: "Balanced diet, medical tests."
  },
  "weight gain": {
    reason: "Hormonal imbalance, overeating.",
    medicine: "Exercise, diet control."
  },
  "acne": {
    reason: "Hormonal imbalance, oily skin.",
    medicine: "Topical creams, facewash."
  },
  "toothache": {
    reason: "Cavity, gum infection.",
    medicine: "Painkillers, dental consult."
  },
  "eye pain": {
    reason: "Infection, strain, allergy.",
    medicine: "Eye drops, rest."
  },
  "ear pain": {
    reason: "Ear infection, wax buildup.",
    medicine: "Ear drops, ENT consult."
  },
  "hair loss": {
    reason: "Stress, poor nutrition, thyroid.",
    medicine: "Biotin supplements, hair oils."
  },
  "night sweats": {
    reason: "Tuberculosis, menopause, infection.",
    medicine: "Consult doctor, hydration."
  },
  "burning urination": {
    reason: "UTI, kidney infection.",
    medicine: "Antibiotics, fluids."
  },
  "frequent urination": {
    reason: "Diabetes, UTI.",
    medicine: "Sugar test, antibiotics if UTI."
  },
  "blood in urine": {
    reason: "Kidney stones, UTI.",
    medicine: "Doctor consultation immediately."
  },
  "loss of appetite": {
    reason: "Infection, stress, liver issues.",
    medicine: "Small meals, consult doctor."
  },
  "insomnia": {
    reason: "Stress, anxiety, depression.",
    medicine: "Relaxation, mild sedatives."
  },
  "palpitations": {
    reason: "Anxiety, thyroid, heart disease.",
    medicine: "Relaxation, ECG test."
  },
  "swelling legs": {
    reason: "Kidney, liver, heart problems.",
    medicine: "Reduce salt, doctor checkup."
  },
  "yellow eyes": {
    reason: "Jaundice, liver disease.",
    medicine: "Liver function test."
  },
  "blurred vision": {
    reason: "Diabetes, eye strain.",
    medicine: "Eye exam, sugar test."
  },
  "double vision": {
    reason: "Neurological issue.",
    medicine: "Urgent doctor checkup."
  },
  "nosebleed": {
    reason: "Injury, dryness, BP issues.",
    medicine: "Pinch nose, cold compress."
  },
  "allergy": {
    reason: "Dust, pollen, food.",
    medicine: "Antihistamines."
  },
  "itching": {
    reason: "Skin allergy, eczema.",
    medicine: "Calamine, antihistamines."
  },
  "leg cramps": {
    reason: "Dehydration, low calcium.",
    medicine: "Electrolytes, stretching."
  },
  "swollen lymph nodes": {
    reason: "Infection, cancer warning.",
    medicine: "Doctor consultation."
  },
  "high bp": {
    reason: "Hypertension.",
    medicine: "BP medicine, low salt diet."
  },
  "low bp": {
    reason: "Dehydration, anemia.",
    medicine: "Fluids, salt intake."
  },
  "high sugar": {
    reason: "Diabetes.",
    medicine: "Sugar control diet, medicine."
  },
  "low sugar": {
    reason: "Diabetes medication overdose.",
    medicine: "Sugar, glucose water."
  },
  "asthma": {
    reason: "Airway inflammation.",
    medicine: "Inhalers, avoid triggers."
  },
  "eczema": {
    reason: "Skin condition, allergy.",
    medicine: "Moisturizers, steroid cream."
  },
  "psoriasis": {
    reason: "Autoimmune skin disorder.",
    medicine: "Topical steroids, phototherapy."
  },
  "migraine": {
    reason: "Neurological condition.",
    medicine: "Painkillers, rest in dark room."
  },
  "ulcer": {
    reason: "H. pylori infection, acidity.",
    medicine: "Antacids, antibiotics."
  },
  "gas": {
    reason: "Indigestion, diet related.",
    medicine: "Antacids, carminatives."
  },
  "bloating": {
    reason: "Gas, indigestion.",
    medicine: "Probiotics, antacids."
  },
  "hiccups": {
    reason: "Stomach irritation, overeating.",
    medicine: "Cold water, deep breathing."
  },
  "indigestion": {
    reason: "Overeating, oily food.",
    medicine: "Antacids, small meals."
  },
  "heartburn": {
    reason: "Acidity, GERD.",
    medicine: "Antacids, avoid spicy food."
  },
  "flu": {
    reason: "Viral infection.",
    medicine: "Rest, fluids, paracetamol."
  },
  "covid": {
    reason: "Coronavirus infection.",
    medicine: "Rest, isolation, paracetamol."
  },
  "tb": {
    reason: "Tuberculosis infection.",
    medicine: "Anti-TB medication (doctor prescribed)."
  },
  "malaria": {
    reason: "Mosquito bite (plasmodium).",
    medicine: "Antimalarial drugs."
  },
  "dengue": {
    reason: "Mosquito bite (dengue virus).",
    medicine: "Fluids, paracetamol (no aspirin)."
  },
  "chikungunya": {
    reason: "Mosquito bite (virus).",
    medicine: "Fluids, paracetamol."
  },
  "typhoid": {
    reason: "Bacterial infection (Salmonella).",
    medicine: "Antibiotics, fluids."
  },
  "cholera": {
    reason: "Contaminated water infection.",
    medicine: "ORS, antibiotics."
  },
  "jaundice": {
    reason: "Liver disease, hepatitis.",
    medicine: "Liver care, rest, fluids."
  },
  "hepatitis": {
    reason: "Liver infection (virus).",
    medicine: "Antivirals, liver supportive care."
  },
  "kidney stone": {
    reason: "Crystals in kidney.",
    medicine: "Painkillers, fluids, surgery if needed."
  },
  "gallstone": {
    reason: "Stone in gallbladder.",
    medicine: "Surgery if painful."
  },
  "appendicitis": {
    reason: "Inflamed appendix.",
    medicine: "Surgery."
  },
  "hernia": {
    reason: "Weak muscle wall.",
    medicine: "Surgery if severe."
  },
  "stroke": {
    reason: "Brain clot/bleed.",
    medicine: "Urgent hospital care."
  },
  "seizure": {
    reason: "Epilepsy, brain disorder.",
    medicine: "Anti-seizure meds."
  },
  "paralysis": {
    reason: "Stroke, nerve damage.",
    medicine: "Physiotherapy, urgent care."
  },
  "cancer": {
    reason: "Uncontrolled cell growth.",
    medicine: "Chemo, radiation, surgery."
  },
  "anemia": {
    reason: "Low hemoglobin.",
    medicine: "Iron supplements."
  },
  "thyroid": {
    reason: "Hormonal imbalance.",
    medicine: "Thyroid medicines."
  },
  "pneumonia": {
    reason: "Lung infection.",
    medicine: "Antibiotics, oxygen support."
  },
  "bronchitis": {
    reason: "Airway infection.",
    medicine: "Cough syrup, antibiotics."
  },
  "sinusitis": {
    reason: "Sinus infection.",
    medicine: "Steam inhalation, antibiotics."
  },
  "tonsillitis": {
    reason: "Tonsil infection.",
    medicine: "Antibiotics, gargle."
  },
  "gout": {
    reason: "Uric acid crystals.",
    medicine: "Painkillers, uric acid meds."
  },
  "arthritis": {
    reason: "Joint inflammation.",
    medicine: "Painkillers, physiotherapy."
  },
  "osteoporosis": {
    reason: "Weak bones.",
    medicine: "Calcium, vitamin D."
  }
};

// --- Function ---
function checkSymptom() {
  const input = document.getElementById("symptomInput").value.toLowerCase().trim();
  const resultBox = document.getElementById("result");

  if (input in symptomsDB) {
    const { reason, medicine } = symptomsDB[input];
    resultBox.innerHTML = `
      <h3>Symptom: ${input.charAt(0).toUpperCase() + input.slice(1)}</h3>
      <p><strong>Possible Reason:</strong> ${reason}</p>
      <p><strong>Suggested Medicine:</strong> ${medicine}</p>
    `;
  } else {
    resultBox.innerHTML = `<p>❌ Symptom not found. Try another.</p>`;
  }
}
