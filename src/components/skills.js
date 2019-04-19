import React, { Component } from 'react';
import Langue from './langue';
import Skill from './skill';
import Contact from './contact';

export default class Skills extends Component {
    render() {
        return (
            <div id="skills" className="row my-3 py-3 skills-font">
                <div className="col-xs-6 col-md-4"  >
                    <h1 className="text-capitalize font-skills"  >Skills</h1>
                    <hr style={{ borderTop: '3px solid #833fb2' }} />
                    <h3>Langues</h3>
                    <hr style={{ borderTop: '2px solid #4863A0' }} />
                    <Langue langue="Arabe" progress={100} percent="100%" />
                    <Langue langue="Français" progress={70} percent="70%" />
                    <Langue langue="Anglais" progress={70} percent="70%" />
                </div>
                <div className="col-xs-12 col-md-8"  >
                    <h3 className="my-2">Competences Techniques</h3>
                    <hr style={{ borderTop: '2px solid #e22947' }} />
                    <Skill domaine='Langages' sousdomaine="C, VB.NET, C#, Java, php5, php7" />
                    <Skill domaine='Web' sousdomaine="ASP.Net MVC, HTML, CSS, BootStrap, JavaScript , Jquery , JqueryUI, Vue.js" />
                    <Skill domaine='Framework' sousdomaine="Symfony(2.5,3.2,3.4), Laravel(5.2,5.3,5.5,5.6,5.7) ,Angular(2,7), React" />
                    <Skill domaine='Méthodologies' sousdomaine="UML, Scrum" />
                    <Skill domaine='Outils de conception' sousdomaine="tarUML" />
                    <Skill domaine='SGBD' sousdomaine="StarUML" />
                    <Skill domaine='IDE' sousdomaine="Eclipse , Android Studio , Visual Studio" />
                    <Skill domaine='System d’exploitation' sousdomaine="Linux ( Ubuntu 14.04 , Ubuntu 16.04) , Windows" />
                </div>
               
            </div>
        )
    }
}
