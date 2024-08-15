"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectGridIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("web")}`}
          onClick={handleFilterKeyChange("web")}
        >
          Web Application Development
        </li>
        <li
          className={`c-pointer ${activeBtn("mobile")}`}
          onClick={handleFilterKeyChange("mobile")}
        >
          Mobile Application Development
        </li>
       
      </ul>
      <div className="row project-masonry-active">
        <div className="col-lg-6 item mobile development">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/nyonalt.png" alt="Project" />
              <Link legacyBehavior href="/">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">NYON</span>
              <h3>
                <Link legacyBehavior href="/">
                  Mobile Application Development - Will be on App Store Soon
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item mobile marketing graphics">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/foodionalt.png" alt="Project" />
              <Link legacyBehavior href="/" >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">FOODION</span>
              <h3>
                <Link legacyBehavior href="/" target="blank">
                Mobile Application Development - Will be on App Store Soon
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item web development graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/leonalt.png" alt="Project" />
              <Link legacyBehavior href="https://leonintegra.com" target="blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">LEON INTEGRA</span>
              <h3>
                <Link legacyBehavior href="https://leonintegra.com" target="blank">
                  Web Application Development
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item web marketing graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/durkoalt.png" alt="Project" />
              <Link legacyBehavior href="https://durko.com.tr/tr" target="blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">DURKO INDUSTRY</span>
              <h3>
                <Link legacyBehavior href="https://durko.com.tr/tr" target="blank">
                  Web Application Development
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item web marketing apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
          <div className="project-image">
              <img src="assets/images/projects/otelalt.png" alt="Project" />
              <Link legacyBehavior href="https://otelsertifikasi.com" target="blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">HOTEL CERTIFICATE</span>
              <h3>
                <Link legacyBehavior href="https://otelsertifikasi.com" target="blank">
                  Web Application Development
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item web development apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/ideonalt.png" alt="Project" />
              <Link legacyBehavior href="https://ideon.com.tr/digital-marketing" target="blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">IDEON </span>
              <h3>
                <Link legacyBehavior href="https://ideon.com.tr/digital-marketing" target="blank">
                  Web Application Development
                </Link>
              </h3>
            </div>
          </div>
        </div>
       
       
      </div>
    </Fragment>
  );
};
export default ProjectGridIsotop;
