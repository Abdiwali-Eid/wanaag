import React from 'react';
import img from '../images/aboutimg.jpg';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>
                    <span className="title">About Buugaag.me</span>
                  </h2>
                  {/* <h2>We are Creative Tech Enthusiast working since 2015</h2> */}
                </div>
                <div className="text">
                  Buugaag.me waa website aad ka helaysid si fudud oo free ahna
                  aad u gala dagi kartid buugaagta af soomaaliga ku qoran ee
                  PDF-ka ah kuwooda ugu tayada sarreeya. Buugaagta waxaad ku
                  raadin kartaa magacyadooda ama qaybaha ay ka kala
                  tirsanyihiin. Si aad buugga aad rabtid aad ula waxaad ku
                  dhufataa Button-ka Download ay ku qorantahay ee yaalla qaybta
                  hoose ee bogga buug walba .
                </div>
                {/* <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div> */}
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                {/* <div className="author-desc">
                  <h2>Rahul Kumar Yadav</h2>
                  <span>Web Developer</span>
                </div> */}
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      title="About image"
                      src="https://i.ibb.co/ZL3w7Hr/5625806.jpg"
                      alt=""
                      // style={{marginRight:'200px'}}
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          {/* <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div> */}
          {/* <div className="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div className="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div className="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
