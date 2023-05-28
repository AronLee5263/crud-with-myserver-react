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
                <label>성</label>
                <input
                  placeholder="홍"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>이름</label>
                <input
                  placeholder="길동"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="이용 약관에 동의합니다"
                  onChange={(e) => setCheckbox(!checkbox)}
                />
              </Form.Field>
              <Button onClick={postData} type="submit">
                제출
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
