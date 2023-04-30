import React from 'react'

const Navbar2 = () => {
  return (
    <div class="header sticky-top">
            <header>MENU</header>
            <ul class="sidebar__ul sidebar__hover">
                <li><a href="http://app.mhpremierstaffingsolutions.com/">Login</a></li>
                <li><a href="http://app.mhpremierstaffingsolutions.com/client-register">Register</a></li>
                <li><a href="about.html">About</a></li>
                <li class="nav-item dropdown"> <span class="nav__link" style={{fontSize: '20px',lineHeight: '45px', textTransform:'uppercase'}} > SERVICES <i class="ti-angle-down"></i></span>
                    <ul class="dropdown-menu dropdown-border">
                        <li class="dropdown-item"><a href="services.html">PAYROLL</a></li>
                        <li class="dropdown-item"><a href="services.html">RECRUITING</a></li>
                        <li class="dropdown-item"><a href="services.html">STRATEGY CONSULTANCY</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown"> <span class="nav__link" style={{fontSize: '20px',lineHeight: '45px', textTransform:'uppercase'}}> CAREER <i class="ti-angle-down"></i></span>
                    <ul class="dropdown-menu dropdown-border">
                        <li class="dropdown-item"><a href="careers.html">WORLD HOSPITALITY</a></li>
                        <li class="dropdown-item"><a href="careers.html">JOB OPPORTUNITIES</a></li>
                        <li class="dropdown-item"><a href="careers.html">LAW AND REGULATIONS</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown"> <span class="nav__link" style={{fontSize: '20px',lineHeight: '45px', textTransform:'uppercase'}}> LEGAL <i class="ti-angle-down"></i></span>
                    <ul class="dropdown-menu dropdown-border">
                        <li class="dropdown-item"><a href="corporate.html">CORPORATE INFORMATION</a></li>
                        <li class="dropdown-item"><a href="term_of_use.html">WEBSITE TERM OF USE</a></li>
                        <li class="dropdown-item"><a href="privacy.html">PRIVACY NOTICE</a></li>
                    </ul>
                </li>
                <li><a href="mission_vision.html">Mission & Values</a></li>
                <li><a href="meet_the_team.html">Meet the team</a></li>
                <li><a href="client.html">Customers</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </div>
  )
}

export default Navbar2
