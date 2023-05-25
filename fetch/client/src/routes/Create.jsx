import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

import classes from "./Create.module.css";

import BackButton from "../components/BackButton";
import MainHeader from "../components/Mainheader";
import UnderMainHeader from "../components/UnderMainHeader";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);

    axios.post(SERVER_URL, { firstName, lastName, checkbox });
  };

  return (
    <>
      <BackButton />

      <div>
        <MainHeader />
        <div className={classes.component_name}> Create Component</div>

        <div className={classes.main}>
          <h2 className={classes.main_header}>React Crud Operations</h2>
          <div>
            <Form className="create_form">
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="I agree to the Terms and Conditions"
                  onChange={(e) => setCheckbox(!checkbox)}
                />
              </Form.Field>
              <Button onClick={postData} type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
