import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./NewCardForm.css";

interface NewCardFormProps {
  boardId: number;
  setNewCard: React.Dispatch<React.SetStateAction<object>>;
}

export const NewCardForm = ({ boardId, setNewCard }: NewCardFormProps) => {
  const [formData, setFormData] = useState({
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newCard = {};
    newCard["message"] = formData.message;
    newCard["board_id"] = boardId;
    newCard["likes_count"] = 0;
    newCard["date"] = new Date().toISOString();
    newCard["image"] = "";
    setNewCard(newCard);
    setFormData({ message: "" });
  };

  return (
    <section className="new-card-container m-5 text-center ">
      <section id="create-card" className="h-fit w-full p-5 my-5">
        <h2>Create a New Card</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="flex flex-col">
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input h-20 w-96 p-1"
              bsSize="lg"
              maxLength={50}
            />
          </FormGroup>
          <br />
          {/* <p>Preview: {formData.message}</p> */}
          <Button color="primary" type="submit">
            Submit Card
          </Button>
        </Form>
      </section>
    </section>
  );
};
