// This file contains the data for all of the tests that can be run in the clinician side of the activity.
testData = {
	"data": [
		{
			"name":"Patient Information",
			"id":0,
			"info":"Clinical information for a representative sample of five suspected epidemic patients. Symptoms and date of hospital admission match epidemiological case definition.",
			"time":0,
			"img":"images/patient_data.png",
			"result":""
		},{
			"name":"Fecal Microscopy",
			"id":1,
			"info":"Microscope images of fecal samples from each patient. Useful for detecting larger parasites.",
			"time":5,
			"img":"images/microscopy.png",
			"result":""
		},{
			"name":"BP+RPF Agar Culture",
			"id":2,
			"info":"BP+RPF petri dishes containing cultures from patient stool samples selectively grow S. aureus.",
			"time":60,
			"img":"images/culture_staphylococcus.png",
			"result":"BP+RPF petri dishes containing cultures from patient stool samples. BP+RPF agar selectively grows S. aureus, which forms black colonies on the petri dishes."
		},{
			"name":"TSC Agar Culture",
			"id":3,
			"info":"TSC petri dishes containing cultures from patient stool samples selectively grow C. perfringens.",
			"time":60,
			"img":"images/culture_clostridium.png",
			"result":"TSC petri dishes containing cultures from patient stool samples. TSC agar selectively grows C. perfringens, which forms black colonies on the petri dishes."
		},{
			"name":"Bismuth Sulfite Agar Culture",
			"id":4,
			"info":"Bismuth Sulfite petri dishes containing cultures from patient stool samples selectively grow S. enterica.",
			"time":60,
			"img":"images/culture_salmonella.png",
			"result":"Bismuth Sulfite petri dishes containing cultures from patient stool samples. Bismuth Sulfite agar selectively grows S. enterica, which forms black colonies on the plates."
		},{
			"name":"Mueller Hinton Agar",
			"id":5,
			"info":"Mueller Hinton petri dishes containing cultures from patient stool samples selectively grow C. jejuni.",
			"time":60,
			"img":"images/culture_campylobacter.png",
			"result":"Mueller Hinton petri dishes grown in microaerophillic conditions with patient stool samples. Mueller Hinton agar selectively grow C. jejuni, which forms white colonies on the plates."
		},{
			"name":"Staphylococcus Toxin Assay",
			"id":6,
			"info":"Assay using small pieces of DNA that can be engineered to selectively attach to certain molecules. This assay uses fluorescent aptamers that selectively binds to any Staphylococcus toxin present in the patient stool sample.",
			"time":30,
			"img":"images/aptamer_staphylococcus.png",
			"result":"Data from Staphylococcus aptamer assay of patient stool samples. Fluorescence intensity >70 indicates the presence of Staphylococcus toxin."
		},{
			"name":"C. perfringens Toxin ELISA",
			"id":7,
			"info":"In an ELISA assay, researchers fix pateint stool samples to a plate, then add antibodies which selectively bind to C. perfringens toxin. They then wash the unbound antibodies away and add a chemical which changes color in the presence of antibodies.",
			"time":30,
			"img":"images/elisa_clostridium.png",
			"result":"OD405 indicates how much the chemical's color changed. An OD405 >0.1 indicates C. perfringens toxin is present in the sample."
		},{
			"name":"E. histolytica Dot Blot",
			"id":8,
			"info":"In a dot blot, clincial researchers place a drop of sample on paper, then add radioactively labelled DNA that binds to a certain organism's genome. They then detect how much radioactivity is present in the dot to see if the pathogen's DNA is present.",
			"time":10,
			"img":"images/dot_entamoeba.png",
			"result":"In this dot blot, the researchers added a stool sample from a previous patient known to be infected with E. histolytica as a control to the leftmost column, followed by current patient samples. They then added DNA specific to E. histolytica and detected radioactivity in the dots."
		},{
			"name":"Norovirus PCR",
			"id":9,
			"info":"PCR amplifies a specific sequence of DNA from a sample, allowing clinical researchers to visualize it. This test looks for Norovirus DNA in the patient samples.",
			"time":20,
			"img":"images/pcr_norovirus.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. A bar in the patient's column indicates Norovirus DNA was present in their stool."
		},{
			"name":"S. enterica DNA Fingerprint",
			"id":10,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_salmonella.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		},{
			"name":"Norovirus DNA Fingerprint",
			"id":11,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_norovirus.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		},{
			"name":"C. jejuni DNA Fingerprint",
			"id":12,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_empty.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		},{
			"name":"C. perfringens DNA Fingerprint",
			"id":13,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_empty.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		},{
			"name":"E. histolytica DNA Fingerprint",
			"id":14,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_empty.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		},{
			"name":"G. lamblia DNA Fingerprint",
			"id":15,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_empty.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		},{
			"name":"S. aureus DNA Fingerprint",
			"id":16,
			"info":"DNA fingerprints tell researchers if patients have been infected by the same strain of a pathogen. To create a DNA fingerprint, clincial researchers amplify a region of DNA that varies between different strains of a microbe. They then treat the DNA with chemicals that cut DNA between well-defined sequences. This results in a collection of DNA fragments of varying length which are specific to each strain. Finally, the researchers push the fragments from each sample through a gel, creating a unique bar-code pattern for each strain.",
			"time":25,
			"img":"images/fingerprint_empty.png",
			"result":"Researchers added a ladder of known DNA to the leftmost column as a positive control, followed by the patient samples. If the fingerprints of two samples are identical (with up to one bar in a different place), they are considered to be from the same strain."
		}
	]
}