import React from "react";
import Header from "../header";

function ContactUs() {
  return (
    <>
      <Header page="contactus" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>Contact us</h1>
          </div>
          <article id="vehicleregistration">
            <fieldset class="visitingbuilding">
              <legend>Have any Questions?</legend>
              <form
                action="mailto:someone@example.com"
                method="get"
                enctype="text/plain"
              >
                <table id="contacttable">
                  <label>Question</label>

                  <input name="subject" type="text" placeholder="" />
                  <br />
                  <label>Details</label>
                  <textarea name="body" type="text"></textarea>

                  <tr>
                    <td colspan="2">
                      <input type="submit" value="Send" />
                    </td>
                  </tr>
                </table>
              </form>
              <br />
              <br />
            </fieldset>
            <fieldset class="visitingbuilding">
              <legend>Contact details</legend>
              Address - Greek Row Dr., Arlington, Texas 76013
              <br />
              Phone No. - 817-936-5138
              <br />
              Email - Terrazas@gmail.com
            </fieldset>
          </article>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
