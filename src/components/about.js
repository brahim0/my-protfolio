import React, { Component } from 'react';
import brahim1 from './img/brahim1.jpg';
import Education from './education';
import Experience from './experience';

export default class About extends Component {
    render() {

        return (

            <div id="about" className="row">
                <div className="col-xs-6 col-md-4">
                    <h1 className="text-capitalize font-title">About me</h1>
                    <hr style={{ borderTop: '3px solid #833fb2' }} />
                    <img src={brahim1} className="rounded float-left my-2 img-about" />
                </div>
                <div className="col-xs-12 col-md-8 my-3">
                <h3>Education</h3>
         <hr style={{ borderTop: '3px solid #e22947' }} />
                <Education year="2013" level ="Baccalauréat Mathématiques (Moyenne : 12.70)" />
         <Education year="2014" level="Faculté des Sciences de Bizerte (FSB).
1ère année : (Moyenne : 11.27)" />
         <Education year ="2016" level="Faculté des Sciences de Bizerte (FSB).
2ème année : (Moyenne : 10.87)" />
         <Education year="2017" level="Faculté des Sciences de Bizerte (FSB).
3ème année : (Moyenne : 11.56 | Note PFE : 15.95)" />
 <h3>Experience</h3>
         <hr style={{ borderTop: '2px solid #e22947' }} />
         <Experience date="30 Jan 2017 - 25 Mai 2017" description="Projet de fin d'études, chez ARAB SOFT" />
         <Experience date="05 Fev 2018 - 04 Mai 2018 " description="ALLIANCE DESIGN, Secteur : Informatique
Poste occupé : Développeur Informatique (stage)" />
         <Experience date="03 Sept 2018 - 07 Jan 2019" description="Poste occupé : Développeur Informatique" />

                </div>
            </div>
        )
    }
}
