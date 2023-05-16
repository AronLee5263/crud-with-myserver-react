import { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function changeFirstNameHandler(event) {
    setFirstName(event.target.value);
  }

  function changeLastNameHandler(event) {
    setLastName(event.target.value);
  }

  function changeCheckboxHandler(event) {
    setCheckbox(!checkbox);
  }

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" onChange={changeFirstNameHandler} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" onChange={changeLastNameHandler} />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={changeCheckboxHandler}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
