document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptom = document.getElementById('symptom').value.toLowerCase();
    let diagnosis = 'Symptom not recognized. Please consult a real doctor.';


    const symptomsDatabase ={
        'canine cough': { cure: 'Rest and ensure hydration.', medicine: 'Dextromethorphan' },
        'canine fever': { cure: 'Keep hydrated and rest.', medicine: 'Pyrexo calm Fever & pain drops' },
        'feline headache': { cure: 'Rest in a quiet, dark area.', medicine: 'Meloxicam,Robenacoxib' },
        'canine sore throat': { cure: 'Gargle with warm salt water.', medicine: 'Throat lozenges for pets' },
        'gastroenteritis in dogs': { cure: 'Avoid solid food and provide clear fluids.', medicine: 'Omeprazole' },
        'feline runny nose': { cure: 'Keep hydrated and use a humidifier.', medicine: 'Decongestant for cats' },
        'muscle pain in horses': { cure: 'Rest and apply cold or warm compress.', medicine: 'Flunixin,Meloxicam' },
        'canine back pain': { cure: 'Rest and gentle stretching exercises.', medicine: 'Pain relievers and muscle relaxants' },
        'canine toothache': { cure: 'Rinse mouth with warm salt water.', medicine: 'Pain relievers for dogs' },
        'feline nausea': { cure: 'Small, frequent meals and avoid spicy foods.', medicine: 'Antiemetics for cats' },
        'diarrhea in puppies': { cure: 'Stay hydrated and provide bland diet.', medicine: 'Loperamide for pets' },
        'allergies in cats': { cure: 'Avoid allergens and use air purifiers.', medicine: 'Antihistamines for pets' },
        'canine constipation': { cure: 'Increase fiber intake and stay hydrated.', medicine: 'Laxatives for dogs' },
        'anxiety in dogs': { cure: 'Practice relaxation techniques.', medicine: 'Anxiolytics for pets' },
        'insomnia in cats': { cure: 'Establish a regular sleep routine.', medicine: 'Mlatonin' },
        'canine acne': { cure: 'Cleanse skin gently and avoid picking.', medicine: 'Topical treatments for pets' },
        'ear infections in dogs': { cure: 'Apply a warm compress.', medicine: 'Pain relievers for dogs' },
        'eye irritation in cats': { cure: 'Rinse eyes with clean water.', medicine: 'Artificial tears for pets' },
        'burns in animals': { cure: 'Run cool water over the burn.', medicine: 'Aloe vera gel for pets' },
        'cuts in pets': { cure: 'Clean the wound and apply a bandage.', medicine: 'Antiseptic cream for animals' },
        'bruises in horses': { cure: 'Apply a cold compress.', medicine: 'Pain relievers for horses' },
        'vomiting in dogs': { cure: 'Sip clear fluids and rest.', medicine: 'Antiemetics for dogs' },
        'dizziness in birds': { cure: 'Sit or lie down until it passes.', medicine: 'Meclizine for pets' },
        'indigestion in cats': { cure: 'Smaller meals and avoid lying down.', medicine: 'Antacids for pets' },
        'canine cold': { cure: 'Rest and warm fluids.', medicine: 'Cold medicine for pets' },
        'avian flu': { cure: 'Rest and hydration.', medicine: 'Antiviral medication for birds' },
        'canine asthma': { cure: 'Avoid triggers and use inhalers.', medicine: 'Bronchodilators for dogs' },
        'skin rash in cats': { cure: 'Keep area clean and dry.', medicine: 'Hydrocortisone cream for pets' },
        'blisters in animals': { cure: 'Protect the blister and avoid popping.', medicine: 'Antibacterial ointment for pets' },
        'fatigue in horses': { cure: 'Ensure adequate rest and nutrition.', medicine: 'Multivitamins for pets' },
        'heartburn in dogs': { cure: 'Avoid spicy foods and small meals.', medicine: 'Antacids for dogs' },
        'yeast infection in pets': { cure: 'Keep the area clean and dry.', medicine: 'Antifungal cream for animals' },
        'chest pain in horses': { cure: 'Rest and avoid strenuous activity.', medicine: 'Aspirin for pets' },
        'canine high blood pressure': { cure: 'Reduce salt intake and exercise.', medicine: 'Antihypertensives for pets' },
        'low blood sugar in dogs': { cure: 'Feed something sugary.', medicine: 'Glucose tablets for pets' },
        'feline urinary tract infection': { cure: 'Stay hydrated and provide water.', medicine: 'Antibiotics for cats' },
        'joint pain in dogs': { cure: 'Apply cold or warm compress.', medicine: 'Pain relievers for pets' },
        'sciatica in horses': { cure: 'Physical therapy and gentle exercises.', medicine: 'Pain relievers for horses' },
        'feline migraine': { cure: 'Rest in a dark, quiet area.', medicine: 'Migraine medications for pets' },
        'canine eczema': { cure: 'Moisturize skin and avoid triggers.', medicine: 'Topical corticosteroids for pets' },
        'ringworm in pets': { cure: 'Keep area clean and dry.', medicine: 'Antifungal cream for animals' },
        'anemia in cats': { cure: 'Increase iron intake.', medicine: 'Iron supplements for pets' },
        'psoriasis in dogs': { cure: 'Moisturize and avoid triggers.', medicine: 'Topical treatments for pets' },
        'hemorrhoids in pets': { cure: 'High-fiber diet and hydration.', medicine: 'Topical treatments for pets' },
        'acid reflux in dogs': { cure: 'Avoid trigger foods and smaller meals.', medicine: 'Antacids for dogs' },
        'chronic pain in horses': { cure: 'Physical therapy and pain management.', medicine: 'Pain relievers for horses' },
        'hypothyroidism in pets': { cure: 'Consult a vet for treatment options.', medicine: 'Levothyroxine for animals' },
        'food poisoning in dogs': { cure: 'Monitor for changes.', medicine: 'Antidiarrheal for pets' },
        'appendicitis in pets': { cure: 'Seek emergency veterinary treatment.', medicine: 'Surgery' },
        'blisters in mouth of cows': { cure: ' no specific treatment but supportive care is essential.',medicine: 'antiseptics and vaccination' },
        'canine diarrhea': { cure: 'Avoid spicy foods and small meals.', medicine: 'Antacids for dogs' },
        'canine ear infections': { cure: 'Apply a warm compress.', medicine: 'Pain relievers for dogs' },
        'canine skin rashes': { cure: 'Keep area clean and dry.', medicine: 'Hydrocortisone cream for dogs' },
        'swollen abdomen in cows': { cure: 'Avoid grazing on high risk pastures.', medicine: 'use prolaxine'},
    };

      if (symptomsDatabase[symptom]) {
          diagnosis = `For a ${symptom}, you should: ${symptomsDatabase[symptom].cure} Recommended medicine: ${symptomsDatabase[symptom].medicine}.`;
      }
  
      document.getElementById('result').textContent = diagnosis;
  });
  