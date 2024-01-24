import React from "react";
import './styles/Footer.scss'
import img from '../../assets/images/foot_logo.png'
const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <div className="gnb-main max-w-[1080] mx-auto px-[30px]">
          <div className="gnb">
            <span className="tit">PRODUCTS</span>
            <span className="tit_s">PLATFORM</span>
            <ul>
              <li>
                <a href="/en/platform/biostar-2.asp">
                  BioStar 2 Access Control
                </a>
              </li>
              <li>
                <a href="/en/platform/biostar-2-centralized-system.asp">
                  BioStar 2 AC (Centralized System)
                </a>
              </li>
              <li>
                <a href="/en/platform/biostar-2-distributed-system.asp">
                  BioStar 2 AC (Distributed System)
                </a>
              </li>
              <li>
                <a href="/en/platform/biostar-2-ta.asp">
                  BioStar 2 Time and Attendance
                </a>
              </li>
              <li>
                <a href="/en/platform/biostar-2-mobile.asp">BioStar 2 Mobile</a>
              </li>
              <li>
                <a href="/en/platform/suprema-mobile-credential.asp">
                  Suprema Mobile Access
                </a>
              </li>
            </ul>
            <span className="tit_s">HARDWARE</span>
            <ul>
              <li>
                <a href="/en/hardware/product.asp?iCTG_No=1">
                  Biometric Readers
                </a>
              </li>
              <li>
                <a href="/en/hardware/product.asp?iCTG_No=2">
                  RF/ Mobile Readers
                </a>
              </li>
              <li>
                <a href="/en/hardware/product.asp?iCTG_No=3">
                  Intelligent Controller
                </a>
              </li>
              <li>
                <a href="/en/hardware/product.asp?iCTG_No=4">Open Platform</a>
              </li>
              <li>
                <a href="/en/hardware/product.asp?iCTG_No=5">Peripherals</a>
              </li>
              <li>
                <a href="/embedded-modules/en/main.asp" target="_blank">
                  OEM Fingerprint Modules
                </a>
              </li>
              <li>
                <a href="/en/hardware/eol_notice-list.asp">
                  Discontinued Products
                </a>
              </li>
            </ul>
          </div>
          <div className="gnb">
            <span className="tit">SOLUTIONS</span>
            <span className="tit_s">INDUSTRIES</span>
            <ul>
              <li>
                <a href="/en/solutions/construction.asp">Construction</a>
              </li>
              <li>
                <a href="/en/solutions/data-center.asp">Data Center</a>
              </li>
              <li>
                <a href="/en/solutions/healthcare.asp">Healthcare</a>
              </li>
              <li>
                <a href="/en/solutions/commercial.asp">Commercial</a>
              </li>
              <li>
                <a href="/en/solutions/infrastructure.asp">Infrastructure</a>
              </li>
              <li>
                <a href="/en/solutions/manufacturing.asp">Manufacturing</a>
              </li>
            </ul>
            <span className="tit_s">APPLICATIONS</span>
            <ul>
              <li>
                <a href="/en/solutions/access-control.asp">Access Control</a>
              </li>
              <li>
                <a href="/en/solutions/time-attendance.asp">
                  Time & Attendance
                </a>
              </li>
              <li>
                <a href="/en/solutions/mobile-credential.asp">
                  Mobile Credential
                </a>
              </li>
              <li>
                <a href="/en/solutions/facial-recognition.asp">
                  Facial Authentication
                </a>
              </li>
              <li>
                <a href="/en/solutions/biosign.asp">
                  Mobile Fingerprint Algorithm (BioSign)
                </a>
              </li>
              <li>
                <a href="/en/solutions/privacy-protection.asp">Cybersecurity</a>
              </li>
            </ul>
          </div>
          <div className="gnb">
            <span className="tit">SUPPORT</span>
            <ul>
              <li>
                <a href="/en/support/technical-resources.asp">
                  Technical Resources
                </a>
              </li>
              <li>
                <a href="/en/support/marketing-materials.asp">
                  Marketing Materials
                </a>
              </li>
              <li>
                <a href="/en/support/development-tools_biostar-2-api.asp">
                  Development Tools
                </a>
              </li>
              <li>
                <a href="http://kb.supremainc.com/home/doku.php?id=ko:start">
                  Learning
                </a>
              </li>
            </ul>
          </div>
          <div className="gnb">
            <span className="tit">ABOUT</span>
            <ul>
              <li>
                <a href="/en/about/suprema.asp">Who We Are</a>
              </li>
              <li>
                <a href="/en/about/customer-value.asp">Why Suprema?</a>
              </li>
              <li>
                <a href="/en/about/news-list.asp?News_Type=Releases">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="/en/about/event-list.asp">Events</a>
              </li>
              <li>
                <a href="/en/about/contact-us.asp">Contact Us</a>
              </li>
              <li>
                <a href="/en/about/global-office.asp">Global Offices</a>
              </li>
            </ul>
          </div>
          <div className="gnb">
            <span className="tit">HUB</span>
            <ul>
              <li>
                <a href="/en/hub/insights-main.asp">Insights</a>
              </li>
              <li>
                <a href="/en/hub/news-list.asp?News_Type=Articles">
                  Blogs & Articles
                </a>
              </li>

              <li>
                <a href="/connect/index.asp" target="_blank">
                  Suprema Connect
                </a>
              </li>
              <li>
                <a href="/en/hub/case-study.asp">Customer Stories</a>
              </li>

              <li>
                <a
                  href="https://kb.supremainc.com/home/doku.php?id=en:start"
                  target="_blank"
                >
                  Knowledge Base
                </a>
              </li>
              <li>
                <a
                  href="https://support.supremainc.com/en/support/home"
                  target="_blank"
                >
                  Support Portal
                </a>
              </li>
            </ul>
          </div>
        
        </div>
        <div className="m_foot max-w-[1080] mx-auto px-[30px]">
          <ul className="flex gap-5 text-base font-bold text-[16px]">
            <li>
              <a href="/en/util/privacy-policy.asp">Privacy Policy</a>
            </li>
            <li>
              <a href="/en/util/email-reject.asp">Cookie Policy</a>
            </li>
            <li>
              <a href="/en/util/legal-notice.asp">Legal</a>
            </li>
            <li>
              <a href="/en/util/code-of-conduct.asp">Code of Conduct</a>
            </li>
          </ul>
        </div>
        <hr className="w-full h-[4px] bg-white"/>
        <div className="copy_area max-w-[1080] mx-auto px-[30px]">
          <div className="copy flex mt-5 gap-3 items-center">
            <img  className="h-[2px] " src={img} alt="" />{" "}
            <span>Copyright © Suprema Inc. All rights reserved.</span>
          </div>
          <div className="sns">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/suprema-inc-/"
                  target="_blank"
                >
                  <img src="/en/asset/images/common/foot_sns_01.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/supremaglobal"
                  target="_blank"
                >
                  <img src="/en/asset/images/common/foot_sns_02.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCAKt69FsAZFHEZWBWcM6c5g"
                  target="_blank"
                >
                  <img src="/en/asset/images/common/foot_sns_04.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
