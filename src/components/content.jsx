import * as React from "react";

import TabContent from "react-bootstrap/TabContent";

import "../styles/content.css";
import LandingPage from "./landing";
import AboutPage from "./about";
import ResumePage from "./resume";
import ContactPage from "./contact";

class ContentSection extends React.Component {
  // state = { hidden: false };

  render() {
    return (
      <div className="content">
        {/* <HomeSection />
        <HomeSection />
        <HomeSection /> */}
        <section id="home">This is home page</section>
        <section id="about">This is about page</section>
        <section id="work">This is work page</section>
        <section id="education">This is education page</section>
        <section id="skills">This is skills page</section>
        <section id="contact">This is contact page</section>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    let lastScrollTop = 0;
    // const currentScrollTop = navs.scrollTop;
    console.log("scrollHeight", e.target.scrollHeight);
    console.log("scrollTop", e.target.scrollTop);
    console.log("clientHeight", e.target.clientHeight);

    // Set the state of hidden depending on scroll position
    // We only change the state if it needs to be changed
    // if (!this.state.hidden && currentScrollTop > lastScrollTop) {
    //   this.setState({ hidden: true });
    // } else if (this.state.hidden) {
    //   this.setState({ hidden: false });
    // }
    // lastScrollTop = currentScrollTop;

    // this.props.sectionChange("#about");
  };
}

export default ContentSection;

class HomeSection extends React.Component {
  state = { hidden: true };

  render() {
    return <div id="home">This is home page</div>;
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const hidden = window.scrollY < 100;

      if (hidden !== this.state.hidden) {
        this.setState({ hidden });
        this.props.setActiveNav("home");
      }
    });
  }
}
