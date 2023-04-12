import React from "react";
import Header from "../header";
import Home from "./home";

function Services() {
  return (
    <>
      <Header page="services" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Services Provided</h1>
          </div>
          <article id="vehicleregistration">
            <form method="post">
              <fieldset>
                <table id="services">
                  <div className="images">
                    <img src="https://media.istockphoto.com/id/1162915095/photo/swimming-pool-stairs-for-a-private-chalet.jpg?s=612x612&w=0&k=20&c=bLUaxQ10itMcMjhDUihhufz3PCxtXXX--vBguMJW3qw=" />
                    <div className="description">
                      2 World className swimming pool provided
                    </div>
                  </div>
                  <div className="images">
                    <img src="https://plus.unsplash.com/premium_photo-1661757545105-63edc4987957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <div className="description">
                      Garden, walking track and many more
                    </div>
                  </div>
                  <div className="images">
                    <img src="https://media.istockphoto.com/id/1316755706/photo/security-guard-patrolling-art-gallery.jpg?b=1&s=170667a&w=0&k=20&c=hIwrCv6zp7DrJZTSyVOCF5cQ6S-zKG7RMoTs6Gg1yJY=" />
                    <div className="description">
                      Over 200 security spread over the complex
                    </div>
                  </div>
                </table>
              </fieldset>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}

export default Services;
