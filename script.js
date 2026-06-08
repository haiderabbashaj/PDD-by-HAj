let diseases = [
  {
    name: "Newcastle Disease",
    type: "Viral",
    respiratory: ["cough", "mucus", "dyspnea"],
    nervous: ["torticollis", "paralysis"],
    intestine: ["green diarrhea", "button ulcers"],
    liver: ["hemorrhage"],
    lymph: ["atrophy"],
    treatment: {
      supportive: ["electrolytes", "vitamins A D3 E"],

      antibiotic: [],
      antiviral: [],
      management: ["isolation", "stress reduction"],
      vaccination: ["ND vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Infectious Bursal Disease",
    type: "Viral",
    bursa: ["swollen", "hemorrhagic", "atrophied"],
    muscles: ["hemorrhage"],
    kidney: ["swollen", "urate deposits"],
    treatment: {
      supportive: ["electrolytes"],
      antibiotic: [],
      antiviral: [],
      management: ["litter management"],
      vaccination: ["IBD vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Avian Influenza",
    type: "Viral",
    respiratory: ["severe dyspnea", "pneumonia"],
    comb_wattles: ["cyanotic"],
    skin: ["edema"],
    liver: ["necrosis"],
    heart: ["hemorrhage"],
    treatment: {
      supportive: [],
      antibiotic: [],
      antiviral: [],
      management: ["quarantine", "culling"],
      vaccination: [],
      control: ["strict biosecurity"]
    }
  },

  {
    name: "Infectious Bronchitis",
    type: "Viral",
    respiratory: ["cough", "rales", "mucus"],
    kidney: ["swollen", "nephritis"],
    egg: ["soft shell", "thin shell"],
    treatment: {
      supportive: ["electrolytes"],
      antibiotic: ["secondary infection control"],
      antiviral: [],
      management: ["ventilation"],
      vaccination: ["IB vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Inclusion Body Hepatitis",
    type: "Viral",
    liver: ["necrosis", "enlarged"],
    kidney: ["pale"],
    treatment: {
      supportive: ["vitamins", "liver tonic"],
      antibiotic: [],
      antiviral: [],
      management: ["stress control"],
      vaccination: [],
      control: ["biosecurity"]
    }
  },

  {
    name: "Hydropericardium Syndrome",
    type: "Viral",
    heart: ["fluid"],
    liver: ["necrosis"],
    kidney: ["swollen"],
    treatment: {
      supportive: ["electrolytes"],
      antibiotic: [],
      antiviral: [],
      management: ["ventilation"],
      vaccination: ["adenovirus vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Egg Drop Syndrome",
    type: "Viral",
    egg: ["soft shell", "thin shell"],
    ovary: ["regression"],
    treatment: {
      supportive: [],
      management: ["hygiene"],
      vaccination: ["EDS vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Fowl Pox",
    type: "Viral",
    skin: ["nodules", "scabs"],
    mouth: ["white lesions"],
    respiratory: ["dyspnea"],
    treatment: {
      supportive: ["antiseptic"],
      management: ["mosquito control"],
      vaccination: ["pox vaccine"],
      control: ["vector control"]
    }
  },

  {
    name: "Avian Encephalomyelitis",
    type: "Viral",
    nervous: ["ataxia", "tremors"],
    treatment: {
      supportive: [],
      vaccination: ["breeder vaccination"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Swollen Head Syndrome",
    type: "Viral",
    head: ["swelling"],
    respiratory: ["sinusitis"],
    eyes: ["discharge"],
    treatment: {
      supportive: ["vitamins"],
      antibiotic: ["secondary infection"],
      management: ["ventilation"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Reovirus Arthritis",
    type: "Viral",
    joints: ["swollen", "lameness"],
    treatment: {
      supportive: ["anti-inflammatory"],
      management: ["rest"],
      vaccination: ["breeder vaccination"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Marek’s Disease",
    type: "Neoplastic",
    nervous: ["paralysis"],
    eye: ["grey eye"],
    lymph: ["tumors"],
    treatment: {
      supportive: [],
      vaccination: ["day-old vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Infectious Coryza",
    type: "Bacterial",
    face: ["swollen"],
    respiratory: ["nasal discharge"],
    eyes: ["swollen"],
    treatment: {
      antibiotic: ["sulfonamides", "tilmicosin"],
      supportive: [],
      management: ["ventilation"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Fowl Cholera",
    type: "Bacterial",
    liver: ["necrosis"],
    heart: ["hemorrhage"],
    spleen: ["enlarged"],
    treatment: {
      antibiotic: ["penicillin", "streptomycin"],
      vaccination: ["cholera vaccine"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Colibacillosis",
    type: "Bacterial",
    air_sacs: ["cloudy"],
    liver: ["perihepatitis"],
    treatment: {
      antibiotic: ["enrofloxacin"],
      management: ["hygiene"],
      control: ["biosecurity"]
    }
  },

  {
    name: "CRD (Mycoplasma)",
    type: "Bacterial",
    respiratory: ["cough", "rales"],
    air_sacs: ["cloudy"],
    treatment: {
      antibiotic: ["tylosin", "tiamulin"],
      management: ["ventilation"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Mycoplasma Synoviae",
    type: "Bacterial",
    joints: ["swollen"],
    treatment: {
      antibiotic: ["lincomycin"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Salmonellosis",
    type: "Bacterial",
    intestine: ["white nodules"],
    liver: ["enlarged"],
    treatment: {
      antibiotic: ["amoxicillin"],
      control: ["hygiene"]
    }
  },

  {
    name: "Pullorum Disease",
    type: "Bacterial",
    intestine: ["white diarrhea"],
    liver: ["enlarged"],
    treatment: {
      management: ["culling"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Fowl Typhoid",
    type: "Bacterial",
    liver: ["bronzed"],
    spleen: ["enlarged"],
    treatment: {
      antibiotic: ["furazolidone"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Coccidiosis",
    type: "Protozoal",
    intestine: ["bloody", "inflamed"],
    droppings: ["bloody"],
    treatment: {
      antiprotozoal: ["amprolium", "toltrazuril"],
      management: ["litter dryness"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Histomoniasis",
    type: "Protozoal",
    liver: ["necrotic"],
    ceca: ["inflamed"],
    treatment: {
      antiprotozoal: ["metronidazole"],
      control: ["biosecurity"]
    }
  },

  {
    name: "Aspergillosis",
    type: "Fungal",
    air_sacs: ["fungal plaques"],
    lungs: ["nodules"],
    treatment: {
      antifungal: ["nystatin"],
      management: ["ventilation"],
      control: ["moisture control"]
    }
  },

  {
    name: "Vitamin A Deficiency",
    type: "Nutritional",
    eyes: ["discharge"],
    respiratory: ["mucus"],
    treatment: {
      supplement: ["vitamin A"],
      management: ["feed balance"]
    }
  },

  {
    name: "Vitamin D Deficiency",
    type: "Nutritional",
    bones: ["weak", "deformed"],
    joints: ["swollen"],
    treatment: {
      supplement: ["vitamin D3", "calcium"],
      management: ["sunlight exposure"]
    }
  },

  {
    name: "Vitamin E Deficiency",
    type: "Nutritional",
    nervous: ["ataxia"],
    muscles: ["degeneration"],
    treatment: {
      supplement: ["vitamin E"],
      management: ["feed quality"]
    }
  },

  {
    name: "Botulism",
    type: "Toxic",
    nervous: ["paralysis"],
    treatment: {
      management: ["remove toxin source"],
      supportive: ["fluids"]
    }
  },

  {
    name: "Mycotoxicosis",
    type: "Toxic",
    liver: ["fatty", "necrotic"],
    kidney: ["swollen"],
    treatment: {
      management: ["remove contaminated feed"],
      control: ["mycotoxin binders"]
    }
  },

  {
    name: "Ascites",
    type: "Metabolic",
    heart: ["enlarged"],
    abdomen: ["fluid"],
    treatment: {
      management: ["improve ventilation"],
      supportive: ["oxygen support"]
    }
  },

  {
    name: "Fatty Liver Syndrome",
    type: "Metabolic",
    liver: ["fatty", "enlarged"],
    treatment: {
      management: ["diet correction", "energy balance"]
    }
  }
];

// =========================
  // 1. DISEASE DATABASE
  // =========================
  let diseases = [
    // yahan tum apni 33 diseases wali JS paste karo
  ];
  // =========================
  // 2. MATCH FUNCTION
  // =========================
  function calculateMatch(inputSymptoms, diseaseSymptoms) {
    let match = 0;
    let total = 0;
    for (let key in diseaseSymptoms) {
      if (Array.isArray(diseaseSymptoms[key])) {
        total += diseaseSymptoms[key].length;
        diseaseSymptoms[key].forEach(symptom => {
          if (inputSymptoms.includes(symptom)) {
            match++;
          }
        });
      }
    }
    return Math.round((match / total) * 100);
  }
  // =========================
  // 3. MAIN FUNCTION
  // =========================
  function detectDisease() {
    let inputSymptoms = [];
    inputSymptoms.push(document.getElementById("body").value);
    inputSymptoms.push(document.getElementById("feather").value);
    inputSymptoms.push(document.getElementById("skin").value);
    inputSymptoms.push(document.getElementById("head").value);
    inputSymptoms.push(document.getElementById("beak").value);
    inputSymptoms.push(document.getElementById("comb").value);
    inputSymptoms.push(document.getElementById("eyes").value);
    inputSymptoms.push(document.getElementById("orifices").value);
    inputSymptoms.push(document.getElementById("muscles").value);
    inputSymptoms.push(document.getElementById("keel").value);
    inputSymptoms.push(document.getElementById("airsacs").value);
    inputSymptoms.push(document.getElementById("liver").value);
    inputSymptoms.push(document.getElementById("spleen").value);
    inputSymptoms.push(document.getElementById("joints").value);
    inputSymptoms.push(document.getElementById("lymph").value);
    inputSymptoms.push(document.getElementById("brain").value);
    inputSymptoms.push(document.getElementById("resp").value);
    inputSymptoms.push(document.getElementById("intestine").value);
    let results = [];
    for (let i = 0; i < diseases.length; i++) {
      let score = calculateMatch(inputSymptoms, diseases[i]);
      results.push(diseases[i].name + " = " + score + "%");
    }
    document.getElementById("result").innerHTML = results.join("<br>");
  }

