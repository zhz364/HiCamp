import React from "react"
const Footer = ()=>{
    return (
        <div className="hip-footer">
            <div className="footer-logo-div"> 
                <img className="logo" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/hicamp2.PNG"/>
            </div>
            <div className="about">
                <div className="about-about">
                    <span className="bold">About</span>
                    <a href="https://github.com/zhz364" className="link" target="_blank"><div className="each-i">
                        <i className="fab fa-github"></i> 
                        <div>Github</div>
                    </div></a>
                    <a href="https://www.linkedin.com/in/zhang-zhang-0911/" className="link" target="_blank"><div className="each-i">
                        <i className="fab fa-linkedin-in"></i>
                        <div>LinkedIn</div>
                    </div></a>
                    <a href="https://www.facebook.com/profile.php?id=100005263395009" className="link" target="_blank"><div className="each-i">
                        <i className="fab fa-facebook"></i>
                        <div>facebook</div>
                    </div></a>
                </div>
                <div className="footer-hip-infor">
                    <div className="bold">Hicamp is the most comprehensive resource for unique outdoor stays.</div>
                    <div className="light">Discover and book tent camping, RV parks, cabins, treehouses, and glamping—everywhere from national parks to blueberry farms.</div>
                </div>
            </div>
            <div className="footer-empty">

            </div>
            <div className="hip-bottom">
                <p>Hicamp is created with ❤️ and hope for our future</p>
            </div>
        </div>
    )
}

export default Footer;