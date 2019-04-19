import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <footer id="contact" className="bg-secondary">
                <div className="row">
                    <div className="col-xs-9 col-md-6 my-3 ">
                    <table>
                        <tr>
                            <td>
                            <span className="email-title">Email :</span>
                            </td>
                            <td>
                            <span className="email-body" ><a  href="mailto:brahimhm470@gmail.com" className="btn btn-secondary" >brahimhm470@gmail.com</a></span>
                            </td>
                        </tr>
                    </table>
                        
                </div>
                    <div className="col-xs-9 col-md-6 my-3">
                    <ul className="social-links">
<li className="li-social-links"><a href="https://www.facebook.com/profile.php?id=100010684601743" target="_blank" ><i className="fab fa-facebook-f"></i></a></li>
<li className="li-social-links"><a href="https://www.linkedin.com/in/brahim-hmida-760899125/" target="_blank"  ><i className="fab fa-linkedin-in"></i></a></li>
<li className="li-social-links"><a href="https://www.instagram.com/brahimhm16/" target="_blank"  ><i className="fab fa-instagram"></i></a></li>

</ul>
                </div>
                </div>
            </footer>

        )
    }
}
