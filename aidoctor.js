document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptom = document.getElementById('symptom').value.toLowerCase();
    let diagnosis = 'Symptom not recognized. Please consult a real doctor.';


    const symptomsDatabase = {
        'cough': { cure: 'Rest and drink plenty of fluids.', medicine: 'Cough syrup' },
        'fever': { cure: 'Stay hydrated and rest.', medicine: 'Paracetamol' },
        'headache': { cure: 'Rest in a quiet, dark room.', medicine: 'Ibuprofen or Acetaminophen' },
        'sore throat': { cure: 'Gargle with warm salt water.', medicine: 'Lozenges or Throat spray' },
        'stomach ache': { cure: 'Avoid solid food and sip clear fluids.', medicine: 'Antacid or Simethicone' },
        'runny nose': { cure: 'Stay hydrated and use a humidifier.', medicine: 'Decongestant' },
        'muscle pain': { cure: 'Rest and apply a cold or warm compress.', medicine: 'Pain relievers like Ibuprofen' },
        'back pain': { cure: 'Rest and gentle stretching exercises.', medicine: 'Pain relievers and muscle relaxants' },
        'toothache': { cure: 'Rinse mouth with warm salt water.', medicine: 'Pain relievers and clove oil' },
        'nausea': { cure: 'Eat small, frequent meals and avoid spicy foods.', medicine: 'Antiemetics like Ondansetron' },
        'diarrhea': { cure: 'Stay hydrated and eat a bland diet.', medicine: 'Loperamide' },
        'allergies': { cure: 'Avoid allergens and use air purifiers.', medicine: 'Antihistamines' },
        'constipation': { cure: 'Increase fiber intake and stay hydrated.', medicine: 'Laxatives' },
        'anxiety': { cure: 'Practice relaxation techniques.', medicine: 'Anxiolytics' },
        'insomnia': { cure: 'Establish a regular sleep routine.', medicine: 'Sleep aids like Melatonin' },
        'acne': { cure: 'Cleanse skin gently and avoid picking.', medicine: 'Topical treatments with Benzoyl peroxide' },
        'ear pain': { cure: 'Apply a warm compress.', medicine: 'Pain relievers' },
        'eye irritation': { cure: 'Rinse eyes with clean water.', medicine: 'Artificial tears' },
        'burns': { cure: 'Run cool water over the burn.', medicine: 'Aloe vera gel or burn ointment' },
        'cuts': { cure: 'Clean the wound and apply a bandage.', medicine: 'Antiseptic cream' },
        'bruises': { cure: 'Apply a cold compress.', medicine: 'Acetaminophen' },
        'vomiting': { cure: 'Sip clear fluids and rest.', medicine: 'Antiemetics like Promethazine' },
        'dizziness': { cure: 'Sit or lie down until it passes.', medicine: 'Meclizine' },
        'indigestion': { cure: 'Eat smaller meals and avoid lying down after eating.', medicine: 'Antacids' },
        'cold': { cure: 'Rest and drink warm fluids.', medicine: 'Cold medicine' },
        'flu': { cure: 'Rest and stay hydrated.', medicine: 'Antiviral medication' },
        'asthma': { cure: 'Avoid triggers and use inhalers.', medicine: 'Bronchodilators' },
        'rash': { cure: 'Keep the area clean and dry.', medicine: 'Hydrocortisone cream' },
        'blisters': { cure: 'Protect the blister and avoid popping it.', medicine: 'Antibacterial ointment' },
        'fatigue': { cure: 'Ensure adequate sleep and nutrition.', medicine: 'Multivitamins' },
        'heartburn': { cure: 'Avoid spicy foods and eat smaller meals.', medicine: 'Antacids' },
        'yeast infection': { cure: 'Keep the area clean and dry.', medicine: 'Antifungal cream' },
        'chest pain': { cure: 'Rest and avoid strenuous activity.', medicine: 'Aspirin' },
        'high blood pressure': { cure: 'Reduce salt intake and exercise regularly.', medicine: 'Antihypertensives' },
        'low blood sugar': { cure: 'Eat or drink something sugary.', medicine: 'Glucose tablets' },
        'urinary tract infection': { cure: 'Stay hydrated and drink cranberry juice.', medicine: 'Fosfomycin,Cephalexin' },
        'joint pain': { cure: 'Apply a cold or warm compress.', medicine: 'Pain relievers' },
        'sciatica': { cure: 'Physical therapy and gentle exercises.', medicine: 'Pain relievers and muscle relaxants' },
        'migraine': { cure: 'Rest in a dark, quiet room.', medicine: 'Migraine-specific medications' },
        'eczema': { cure: 'Moisturize skin and avoid triggers.', medicine: 'Topical corticosteroids' },
        'ringworm': { cure: 'Keep the area clean and dry.', medicine: 'Antifungal cream' },
        'anemia': { cure: 'Increase iron intake.', medicine: 'Iron supplements' },
        'psoriasis': { cure: 'Moisturize and avoid triggers.', medicine: 'Amjevita,Cyltezo' },
        'hemorrhoids': { cure: 'Eat a high-fiber diet and stay hydrated.', medicine: 'Lidocaine,Anusol-HC' },
        'acid reflux': { cure: 'Avoid trigger foods and eat smaller meals.', medicine: 'Antacids' },
        'chronic pain': { cure: 'Physical therapy and pain management techniques.', medicine: 'Pain relievers' },
        'hyperthyroidism': { cure: 'Avoid iodine-rich foods.', medicine: 'Antithyroid medications' },
        'loose motion': { cure: 'Stay hydrated and eat a bland diet.', medicine: 'Oral rehydration solutions' },
        'cancer': { cure: 'Consult a specialist for treatment options.', medicine: '5-florouracil, 6-mercaptopurine' },
        'piles': { cure: 'Eat a high-fiber diet and stay hydrated.', medicine: 'Topical treatments and pain relievers' },
        'acid reflux': { cure: 'Avoid trigger foods and eat smaller meals.', medicine: 'Antacids' },
        'asthma': { cure: 'Avoid triggers and use inhalers.', medicine: 'Bronchodilators' },
        'arthritis': { cure: 'Exercise regularly and manage weight.', medicine: 'Anti-inflammatory drugs' },
        'bronchitis': { cure: 'Rest and drink plenty of fluids.', medicine: 'Bronchodilators and cough syrup' },
        'conjunctivitis': { cure: 'Keep eyes clean and avoid touching them.', medicine: 'Antibiotic eye drops' },
        'dehydration': { cure: 'Drink plenty of fluids.', medicine: 'Oral rehydration solutions' },
        'depression': { cure: 'Seek therapy and support.', medicine: 'Antidepressants' },
        'dry skin': { cure: 'Moisturize regularly.', medicine: 'Hydrating lotions' },
        'fever': { cure: 'Stay hydrated and rest.', medicine: 'Paracetamol' },
        'gastritis': { cure: 'Avoid spicy foods and alcohol.', medicine: 'Antacids and proton pump inhibitors' },
        'gout': { cure: 'Reduce intake of purine-rich foods.', medicine: 'Anti-inflammatory drugs' },
        'hair loss': { cure: 'Use gentle hair care products.', medicine: 'Minoxidil' },
        'hypertension': { cure: 'Reduce salt intake and exercise regularly.', medicine: 'Antihypertensives' },
        'impetigo': { cure: 'Keep the area clean and dry.', medicine: 'Antibiotic ointments' },
        'infertility': { cure: 'Consult a specialist for treatment options.', medicine: 'Fertility treatments' },
        'jaundice': { cure: 'Stay hydrated and rest.', medicine: 'Treatment of underlying condition' },
        'knee pain': { cure: 'Rest and apply a cold or warm compress.', medicine: 'Pain relievers and anti-inflammatory drugs' },
        'lupus': { cure: 'Consult a specialist for treatment options.', medicine: 'Anti-inflammatory drugs and immunosuppressants' },
        'migraines': { cure: 'Rest in a dark, quiet room.', medicine: 'Migraine-specific medications' },
        'obesity': { cure: 'Exercise regularly and maintain a healthy diet.', medicine: 'Weight loss medications' },
        'osteoarthritis': { cure: 'Exercise regularly and manage weight.', medicine: 'Pain relievers and anti-inflammatory drugs' },
        'panic attacks': { cure: 'Practice relaxation techniques.', medicine: 'Antianxiety medications' },
        'pharyngitis': { cure: 'Gargle with warm salt water.', medicine: 'Antibiotics if bacterial' },
        'pneumonia': { cure: 'Rest and drink plenty of fluids.', medicine: 'Antibiotics' },
        'poisoning': { cure: 'Seek medical attention immediately.', medicine: 'Antibiotics, antimalarials, or medications for the specific poisoning' },
        'throat irritation': { cure: 'Rinse throat with warm saline solution.', medicine: 'Acetaminophen,Aspirin' },
        'throid disease': { cure: 'Consult a specialist for treatment options.', medicine: 'Levothyroxine'},
        'appendicitis': { cure: 'Seek emergency medical treatment.', medicine: 'Surgery' },
        'bronchitis': { cure: 'Rest and drink plenty of fluids.', medicine: 'Bronchodilators and cough syrup' },
        'conjunctivitis': { cure: 'Keep eyes clean and avoid touching them.', medicine: 'Antibiotic eye drops' },
        'dehydration': { cure: 'Drink plenty of fluids.', medicine: 'Oral rehydration solutions' },
        'depression': { cure: 'Seek therapy and support.', medicine: 'Antidepressants' },
        'dry skin': { cure: 'Moisturize regularly.', medicine: 'Hydrating lotions' },
        'gastritis': { cure: 'Avoid spicy foods and alcohol.', medicine: 'Antacids and proton pump inhibitors' },
        'gout': { cure: 'Reduce intake of purine-rich foods.', medicine: 'Anti-inflammatory drugs' },
        'hair loss': { cure: 'Use gentle hair care products.', medicine: 'Minoxidil' },
        'hypertension': { cure: 'Reduce salt intake and exercise regularly.', medicine: 'Antihypertensives' },
        'impetigo': { cure: 'Keep the area clean and dry.', medicine: 'Antibiotic ointments' },
        'infertility': { cure: 'Consult a specialist for treatment options.', medicine: 'Fertility treatments' },
        'jaundice': { cure: 'Stay hydrated and rest.', medicine: 'Treatment of underlying condition' },
        'knee pain': { cure: 'Rest and apply a cold or warm compress.', medicine: 'Pain relievers and anti-inflammatory drugs' },
        'lupus': { cure: 'Consult a specialist for treatment options.', medicine: 'Anti-inflammatory drugs and immunosuppressants' },
        'migraine': { cure: 'Rest in a dark, quiet room.', medicine: 'Migraine-specific medications' },
        'obesity': { cure: 'Exercise regularly and maintain a healthy diet.', medicine: 'Orlistat,Liraglutide' },
        'osteoarthritis': { cure: 'Exercise regularly and manage weight.', medicine: 'Pain relievers and anti-inflammatory drugs' },
        'panic attacks': { cure: 'Practice relaxation techniques.', medicine: 'Buspirone,Paroxetine' },
        'pharyngitis': { cure: 'Gargle with warm salt water.', medicine: 'Antibiotics if bacterial' },
        'pneumonia': { cure: 'Rest and drink plenty of fluids.', medicine: 'Antibiotics' },
        'psoriatic arthritis': { cure: 'Exercise regularly and manage weight.', medicine: 'Anti-inflammatory drugs' },
        'roseola': { cure: 'Ensure child stays hydrated and rests.', medicine: 'Pain and fever relievers' },
        'shingles': { cure: 'Keep rash clean and dry.', medicine: 'Antiviral medication' },
        'sinus infection': { cure: 'Stay hydrated and use a humidifier.', medicine: 'Decongestant or antibiotics' },
        'food poisoning':{ cure: 'Monitoring for changes.', medicine :'Antidiarrhoeal' },
        'aids':{ cure:'NOBODY CAN HELP YOU.', medicine :'TUMHE DAWA KI NAHI DUAA KI JARURAT HAI'},
    };

    if (symptomsDatabase[symptom]) {
        diagnosis = `For a ${symptom}, you should: ${symptomsDatabase[symptom].cure} Recommended medicine: ${symptomsDatabase[symptom].medicine}.`;
    }

    document.getElementById('result').textContent = diagnosis;
});

