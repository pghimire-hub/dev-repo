import React from "react";
import Header from "../header";
function ResetPassword() {
  return (
    <>
      <Header page="reset" />
      <main>
        <section class="glass">
          <div id="formheading">
            <h1>Reset Password</h1>
          </div>
          <article id="vehicleregistration">
            <fieldset class="visitingbuilding">
              <form
                action="mailto:someone@example.com"
                method="get"
                enctype="text/plain"
              >
                <table id="contacttable">
                  <tr>
                    <td>
                      <label>Email: </label>
                    </td>
                    <td>
                      <input name="subject" type="text" placeholder="" />
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <input type="submit" value="Reset" />
                    </td>
                  </tr>
                </table>
              </form>
              <br />
              <br />
            </fieldset>
          </article>
        </section>
      </main>
    </>
  );
}

export default ResetPassword;
