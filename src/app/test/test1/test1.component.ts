/// <reference types="@types/fhir-js-client" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    test();
  }

}

function test() {
  function getPatientName(pt) {
    if (pt.name) {
      var names = pt.name.map(function (name) {
        return name.given.join(" ") + " " + name.family.join(" ");
      });
      return names.join(" / ")
    } else {
      return "anonymous";
    }
  }

  function getMedicationName(medCodings) {
    var coding = medCodings.find(function (c) {
      return c.system == "http://www.nlm.nih.gov/research/umls/rxnorm";
    });

    return coding && coding.display || "Unnamed Medication(TM)"
  }

  function displayPatient(pt) {
    document.getElementById('name').innerHTML = getPatientName(pt);
  }

  var med_list = document.getElementById('med_list');

  function displayMedication(medCodings) {
    med_list.innerHTML += "<li> " + getMedicationName(medCodings) + "</li>";
  }

  FHIR.oauth2.ready(function (smart) {
    smart.patient.read().then(function (pt) {
      displayPatient(pt);
    });
    smart.patient.api.fetchAllWithReferences({ type: "MedicationOrder" }, ["MedicationOrder.medicationReference"]).then(function (results, refs) {
      results.forEach(function (prescription) {
        if (prescription.medicationCodeableConcept) {
          displayMedication(prescription.medicationCodeableConcept.coding);
        } else if (prescription.medicationReference) {
          var med = refs(prescription, prescription.medicationReference);
          displayMedication(med && med.code.coding || []);
        }
      });
    });
  });
}
