import classes from "./Read.module.css";
import { Table } from "semantic-ui-react";

export default function Read() {
  return (
    <>
      <div className={classes.header_container}>
        <h1>React CRUD with axios</h1>
      </div>
      <div className={classes.component_name}> Read Component</div>

      <div className={classes.form_container}>
        <form>
          <input name="text" placeholder="내용을 입력하세요..." required />
          <input name="done" type="checkbox" />
          <input type="submit" value="추가" />
        </form>
      </div>

      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Registration Date</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
