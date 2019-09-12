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
      client_id: '7a20c455-b146-403b-a7e5-86ab4846259a',
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

