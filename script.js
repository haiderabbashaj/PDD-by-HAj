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

    let diagnosis = [];

    // 1. Newcastle Disease (ND)
    if (proventriculus === 'nd_hem' || trachea === 'nd_trachea' || intestinalTract === 'button_ulcers' || feather === 'green_pasting') {
        diagnosis.push("Newcastle Disease (Ranikhet)");
    }

    // 2. Infectious Bursal Disease (IBD / Gumboro)
    if (lymphoid === 'ibd_bursa' || muscles === 'ibd_hem' || feather === 'grey_white_pasting' || proventriculus === 'junction_hem') {
        diagnosis.push("Infectious Bursal Disease (Gumboro)");
    }

    // 3. Avian Influenza (AI)
    if (bodyCondition === 'stargazing' || comb === 'cyanotic' || muscles === 'shanks_hem' || skin === 'subcut_hem' || airSacs === 'cloudy_cheesy') {
        diagnosis.push("Avian Influenza (Fowl Plague)");
    }

    // 4. Inclusion Body Hepatitis (IBH)
    if (liver === 'ibh_necrotic' || skin === 'icteric' || (comb === 'anemia' && liver === 'ibh_necrotic')) {
        diagnosis.push("Inclusion Body Hepatitis (IBH)");
    }

    // 5. Hydro-pericardium Syndrome (HPS / Angara)
    if (pericardium === 'straw_fluid' || trachea === 'hydrothorax' || proventriculus === 'gizzard_erosion') {
        diagnosis.push("Hydro-pericardium Syndrome (Angara Disease)");
    }

    // 6. Egg Drop Syndrome (EDS)
    if (intestinalTract === 'egg_deformity' && liver === 'normal' && trachea === 'normal') {
        diagnosis.push("Egg Drop Syndrome (EDS-76)");
    }

    // 7. Infectious Bronchitis (IB)
    if (kidneys === 'urate_nephritis' || (intestinalTract === 'egg_deformity' && airSacs === 'cloudy_cheesy')) {
        diagnosis.push("Infectious Bronchitis (IB) / Nephrotropic Strain");
    }

    // 8. Chicken Infectious Anemia (CIA)
    if (lymphoid === 'cia_thymus' || (skin === 'subcut_hem' && comb === 'anemia')) {
        diagnosis.push("Chicken Infectious Anemia (Blue Wing Disease)");
    }

    // 9. Infectious Laryngotracheitis (ILT)
    if (trachea === 'ilt_blood' || (eyes === 'discharge' && trachea === 'ilt_blood')) {
        diagnosis.push("Infectious Laryngotracheitis (ILT)");
    }

    // 10. Fowl Pox
    if (skin === 'pox_crust' || orifices === 'mouth_plugs') {
        diagnosis.push("Fowl Pox (Dry/Wet Pox)");
    }

    // 11. Swollen Head Syndrome (SHM)
    if (head === 'subcut_oedema' || orifices === 'sticky_nose') {
        diagnosis.push("Swollen Head Syndrome");
    }

    // 12. Reovirus Infection
    if (joints === 'reovirus_joint') {
        diagnosis.push("Reovirus Infection (Viral Arthritis)");
    }

    // 13. Marek's Disease
    if (nerve === 'marek_nerve' || eyes === 'grey_eye' || feather === 'marek_follicle') {
        diagnosis.push("Marek's Disease");
    }

    // 14. Salmonella (Pullorum / Fowl Typhoid / Paratyphoid)
    if (liver === 'bronze_copper' || feather === 'chalky_white' || liver === 'cornmeal') {
        diagnosis.push("Avian Salmonellosis (Pullorum / Fowl Typhoid)");
    }

    // 15. Chronic Respiratory Disease (CRD / Mycoplasma)
    if (liver === 'fibrinous_layer' || airSacs === 'cloudy_cheesy') {
        diagnosis.push("Chronic Respiratory Disease (CRD) / Colibacillosis Complicated");
    }

    // 16. Mycoplasma Synoviae (MS)
    if (joints === 'ms_synovial') {
        diagnosis.push("Mycoplasma Synoviae Infection");
    }

    // 17. Coccidiosis
    if (intestinalTract === 'coccidiosis_hem') {
        diagnosis.push("Coccidiosis / Enteric Paratyphoid");
    }

    // 18. Clostridial Infections (Necrotic Enteritis / GD)
    if (intestinalTract === 'turkish_towel' || skin === 'gangrenous') {
        diagnosis.push("Clostridial Infection (Necrotic Enteritis / Gangrenous Dermatitis)");
    }

    // Output Display Logic
    const resultBox = document.getElementById('result-box');
    const outputText = document.getElementById('disease-output');

    resultBox.style.display = "block";

    if (diagnosis.length > 0) {
        let uniqueDiagnosis = [...new Set(diagnosis)];
        outputText.innerHTML = "Suspected Diagnosis based on PDD by HAj rules:<br><ul style='color:#c0392b; font-size:1.2rem;'>" + 
            uniqueDiagnosis.map(d => `<li><strong>${d}</strong></li>`).join('') + "</ul>";
    } else {
        outputText.innerHTML = "No clear diagnostic patterns matched. If bird shows general symptoms, please review the options or consult a lab.";
    }
}

