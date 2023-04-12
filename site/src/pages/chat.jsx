import React from "react";
import Header from "../header";
import Home from "./home";

function Chat() {
  return (
    <>
      <Header page="chat" />
      <main>
        <section className="glass">
          <div id="formheading">
            <h1>Chat with people here!</h1>
          </div>

          <form id="vehicleregistration">
            <table id="contacttable">
              <label>To</label>

              <input name="subject" type="text" placeholder="" />
              <br />
              <label>Message</label>
              <textarea name="body" type="text"></textarea>

              <tr>
                <td colspan="2">
                  <input type="submit" value="Start Chat" />
                </td>
              </tr>
            </table>
          </form>
        </section>
      </main>
      <footer>
        <div className="footer">
          <small>© Copyright 2023 | Terrazas De Guacuco Apartments </small>
        </div>
      </footer>
    </>
  );
}

export default Chat;
