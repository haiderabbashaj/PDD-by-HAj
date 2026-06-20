function analyzeDisease() {
    // Dropdowns se values lena
    const bodyCondition = document.getElementById('body_condition').value;
    const feather = document.getElementById('feather').value;
    const skin = document.getElementById('skin').value;
    const head = document.getElementById('head').value;
    const comb = document.getElementById('comb').value;
    const eyes = document.getElementById('eyes').value;
    const orifices = document.getElementById('orifices').value;
    const muscles = document.getElementById('muscles').value;
    const airSacs = document.getElementById('air_sacs').value;
    const pericardium = document.getElementById('pericardium').value;
    const proventriculus = document.getElementById('proventriculus').value;
    const liver = document.getElementById('liver').value;
    const spleen = document.getElementById('spleen').value;
    const kidneys = document.getElementById('kidneys').value;
    const trachea = document.getElementById('trachea').value;
    const lymphoid = document.getElementById('lymphoid').value;
    const nerve = document.getElementById('nerve').value;
    const joints = document.getElementById('joints').value;
    const intestinalTract = document.getElementById('intestinal_tract').value;

    // Har disease ke points store karne ke liye object
    let scores = {
        "Newcastle Disease (Ranikhet)": 0,
        "Infectious Bursal Disease (Gumboro)": 0,
        "Avian Influenza (Fowl Plague)": 0,
        "Inclusion Body Hepatitis (IBH)": 0,
        "Hydro-pericardium Syndrome (Angara Disease)": 0,
        "Egg Drop Syndrome (EDS-76)": 0,
        "Infectious Bronchitis (IB) / Nephrotropic Strain": 0,
        "Chicken Infectious Anemia (Blue Wing Disease)": 0,
        "Infectious Laryngotracheitis (ILT)": 0,
        "Fowl Pox (Dry/Wet Pox)": 0,
        "Swollen Head Syndrome": 0,
        "Reovirus Infection (Viral Arthritis)": 0,
        "Marek's Disease": 0,
        "Avian Salmonellosis (Pullorum / Fowl Typhoid)": 0,
        "Chronic Respiratory Disease (CRD) / Colibacillosis Complicated": 0,
        "Mycoplasma Synoviae Infection": 0,
        "Coccidiosis / Enteric Paratyphoid": 0,
        "Clostridial Infection (Necrotic Enteritis / Gangrenous Dermatitis)": 0
    };

    // --- POINTS DISTRIBUTION BASED ON SYMPTOMS ---

    // 1. Newcastle Disease (ND)
    if (proventriculus === 'nd_hem') scores["Newcastle Disease (Ranikhet)"] += 5; // Main symptom
    if (trachea === 'nd_trachea') scores["Newcastle Disease (Ranikhet)"] += 3;
    if (intestinalTract === 'button_ulcers') scores["Newcastle Disease (Ranikhet)"] += 4;
    if (feather === 'green_pasting') scores["Newcastle Disease (Ranikhet)"] += 2;

    // 2. Infectious Bursal Disease (IBD / Gumboro)
    if (lymphoid === 'ibd_bursa') scores["Infectious Bursal Disease (Gumboro)"] += 5;
    if (muscles === 'ibd_hem') scores["Infectious Bursal Disease (Gumboro)"] += 3;
    if (feather === 'grey_white_pasting') scores["Infectious Bursal Disease (Gumboro)"] += 2;
    if (proventriculus === 'junction_hem') scores["Infectious Bursal Disease (Gumboro)"] += 4;

    // 3. Avian Influenza (AI)
    if (bodyCondition === 'stargazing') scores["Avian Influenza (Fowl Plague)"] += 3;
    if (comb === 'cyanotic') scores["Avian Influenza (Fowl Plague)"] += 4;
    if (muscles === 'shanks_hem') scores["Avian Influenza (Fowl Plague)"] += 5;
    if (skin === 'subcut_hem') scores["Avian Influenza (Fowl Plague)"] += 3;
    if (airSacs === 'cloudy_cheesy') scores["Avian Influenza (Fowl Plague)"] += 1;

    // 4. Inclusion Body Hepatitis (IBH)
    if (liver === 'ibh_necrotic') scores["Inclusion Body Hepatitis (IBH)"] += 5;
    if (skin === 'icteric') scores["Inclusion Body Hepatitis (IBH)"] += 3;
    if (comb === 'anemia') scores["Inclusion Body Hepatitis (IBH)"] += 2;

    // 5. Hydro-pericardium Syndrome (HPS / Angara)
    if (pericardium === 'straw_fluid') scores["Hydro-pericardium Syndrome (Angara Disease)"] += 5;
    if (trachea === 'hydrothorax') scores["Hydro-pericardium Syndrome (Angara Disease)"] += 3;
    if (proventriculus === 'gizzard_erosion') scores["Hydro-pericardium Syndrome (Angara Disease)"] += 2;

    // 6. Egg Drop Syndrome (EDS)
    if (intestinalTract === 'egg_deformity') scores["Egg Drop Syndrome (EDS-76)"] += 4;

    // 7. Infectious Bronchitis (IB)
    if (kidneys === 'urate_nephritis') scores["Infectious Bronchitis (IB) / Nephrotropic Strain"] += 5;
    if (intestinalTract === 'egg_deformity' && airSacs === 'cloudy_cheesy') scores["Infectious Bronchitis (IB) / Nephrotropic Strain"] += 4;

    // 8. Chicken Infectious Anemia (CIA)
    if (lymphoid === 'cia_thymus') scores["Chicken Infectious Anemia (Blue Wing Disease)"] += 5;
    if (skin === 'subcut_hem' && comb === 'anemia') scores["Chicken Infectious Anemia (Blue Wing Disease)"] += 4;

    // 9. Infectious Laryngotracheitis (ILT)
    if (trachea === 'ilt_blood') scores["Infectious Laryngotracheitis (ILT)"] += 5;
    if (eyes === 'discharge') scores["Infectious Laryngotracheitis (ILT)"] += 2;

    // 10. Fowl Pox
    if (skin === 'pox_crust') scores["Fowl Pox (Dry/Wet Pox)"] += 5;
    if (orifices === 'mouth_plugs') scores["Fowl Pox (Dry/Wet Pox)"] += 4;

    // 11. Swollen Head Syndrome
    if (head === 'subcut_oedema') scores["Swollen Head Syndrome"] += 5;
    if (orifices === 'sticky_nose') scores["Swollen Head Syndrome"] += 3;

    // 12. Reovirus Infection
    if (joints === 'reovirus_joint') scores["Reovirus Infection (Viral Arthritis)"] += 5;

    // 13. Marek's Disease
    if (nerve === 'marek_nerve') scores["Marek's Disease"] += 5;
    if (eyes === 'grey_eye') scores["Marek's Disease"] += 4;
    if (feather === 'marek_follicle') scores["Marek's Disease"] += 3;

    // 14. Salmonella
    if (liver === 'bronze_copper') scores["Avian Salmonellosis (Pullorum / Fowl Typhoid)"] += 5;
    if (feather === 'chalky_white') scores["Avian Salmonellosis (Pullorum / Fowl Typhoid)"] += 4;
    if (liver === 'cornmeal') scores["Avian Salmonellosis (Pullorum / Fowl Typhoid)"] += 4;

    // 15. Chronic Respiratory Disease (CRD)
    if (liver === 'fibrinous_layer') scores["Chronic Respiratory Disease (CRD) / Colibacillosis Complicated"] += 5;
    if (airSacs === 'cloudy_cheesy') scores["Chronic Respiratory Disease (CRD) / Colibacillosis Complicated"] += 3;

    // 16. Mycoplasma Synoviae (MS)
    if (joints === 'ms_synovial') scores["Mycoplasma Synoviae Infection"] += 5;

    // 17. Coccidiosis
    if (intestinalTract === 'coccidiosis_hem') scores["Coccidiosis / Enteric Paratyphoid"] += 5;

    // 18. Clostridial Infections
    if (intestinalTract === 'turkish_towel') scores["Clostridial Infection (Necrotic Enteritis / Gangrenous Dermatitis)"] += 5;
    if (skin === 'gangrenous') scores["Clostridial Infection (Necrotic Enteritis / Gangrenous Dermatitis)"] += 4;


    // Sab se zyada points wali disease dhoondna
    let maxScore = 0;
    let finalDiagnosis = "";

    for (let disease in scores) {
        if (scores[disease] > maxScore) {
            maxScore = scores[disease];
            finalDiagnosis = disease;
        }
    }

    // Output Display Logic
    const resultBox = document.getElementById('result-box');
    const outputText = document.getElementById('disease-output');

    resultBox.style.display = "block";

    // Agar kisi bimari ka score 0 se zyada hai to wahi aik dikhayein
    if (maxScore > 0) {
        outputText.innerHTML = "Suspected Diagnosis based on PDD by HAj rules:<br><ul style='color:#c0392b; font-size:1.2rem;'><li><strong>" + finalDiagnosis + " (Highest Match)</strong></li></ul>";
    } else {
        outputText.innerHTML = "No clear diagnostic patterns matched. If bird shows general symptoms, please review the options or consult a lab.";
    }
}
