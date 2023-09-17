import React, { useState } from "react";
import "./NewBoardForm.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
interface NewBoardFormProps {
  setNewBoard: React.Dispatch<React.SetStateAction<object>>;
}
export const NewBoardForm = ({ setNewBoard }: NewBoardFormProps) => {
  // Create a state object to store form data
  const [formData, setFormData] = useState<object>({
    title: "",
    owner: "",
  });
  const [formErrors, setFormErrors] = useState<object>({
    title: "",
    owner: "",
  });

  // Handle changes in form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the formData state with the new values
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate each input field
    const errors = {};

    if (!formData["title"].trim()) {
      errors["title"] = "Please enter a board title.";
    }

    // Add email validation logic here
    if (!formData["owner"].trim()) {
      errors["owner"] = "Please enter your name.";
    }

    if (Object.keys(errors).length > 0) {
      // Set the error messages for each field
      setFormErrors(errors);
      return;
    }

    let newBoard = {};
    newBoard["title"] = formData["title"];
    newBoard["owner"] = formData["owner"];
    setNewBoard(newBoard);
    setFormData({ title: "", owner: "" });

    // Handle the form submission here (e.g., send data to the server)
    console.log("Form submitted with data:", formData);

    // Clear the form data and error messages after successful submission
    setFormErrors({
      name: "",
      email: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="create-board">
      <FormGroup className="flex flex-col items-center">
        <Label className="w-[150px]" for="title">
          Title:
        </Label>
        <Input
          tooltip
          invalid={!!formErrors["title"]}
          type="textarea"
          id="title"
          name="title"
          value={formData["title"]}
          onChange={handleInputChange}
          bsSize="lg"
          maxLength={50}
          className="input h-[85px] resize-none p-1"
        />
        <div className="text-danger">
          {formErrors["title"] ? (
            <span className="material-symbols-outlined">error</span>
          ) : (
            ""
          )}
          {formErrors["title"]}
        </div>
      </FormGroup>
      <FormGroup className="flex flex-col items-center">
        <Label className="w-[150px]" for="owner">
          Owner:
        </Label>
        <Input
          type="text"
          id="owner"
          name="owner"
          value={formData["owner"]}
          onChange={handleInputChange}
          bsSize="lg"
          maxLength={30}
          className="input max-h-[100px] p-1"
          invalid={!!formErrors["owner"]}
        />
      </FormGroup>
      <div className="text-danger">
        {formErrors["owner"] ? (
          <span className="material-symbols-outlined">error</span>
        ) : (
          ""
        )}
        {formErrors["owner"]}
      </div>

      <br />
      <Button color="primary" type="submit">
        Submit Board
      </Button>
    </Form>
  );
};
