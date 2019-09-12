/// <reference types="@types/fhir-js-client" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const clientSettings: FHIR.SMART.OAuth2ClientSettings = {
      client_id: '7a74cf33-beab-4da9-88e8-eb9cdf369b1d',
      // Adding the scopes launch openid and profile
      scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile patient/MedicationOrder.read',
      redirect_uri: 'https://vmr1689.github.io/SmartAppIns/test/test1'
    };
  
    const oauth2Configuration: FHIR.SMART.OAuth2Configuration = {
      client: clientSettings,
    };
  
    console.log('Start in Authorize');
    FHIR.oauth2.authorize(oauth2Configuration, (authError) => {
      console.log('Error in Authorize');
    });
  }

}

