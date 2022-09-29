import React from "react";

function Signup() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <div>
            <input type="text" name="firstname" placeholder="Firstname"/>
          </div>
          <div>
            <input type="text" name="lastname" placeholder="Lastname"/>
          </div>
          <div>
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div>
            <input type="text" name="password" placeholder="Enter Password"/>
          </div>
          <div>
            <input type="text" name="password" placeholder="Repeat Password"/>
          </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

export default Signup;