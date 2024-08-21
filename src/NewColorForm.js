import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const NewColorForm = ({ addColor }) => {
  const navigate = useNavigate();
  const INITIAL_STATE = { name: "", colorCode: "#000000" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    setFormData(INITIAL_STATE);
    navigate('/colors')
  };

  return (
    <div className='NewColorForm'>
      <h1>Add a new color!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label htmlFor='name'>Color</Form.Label>
        <Form.Control
          id='name'
          type='text'
          name='name'
          placeholder='Enter name for the color'
          value={formData.name}
          onChange={handleChange}
        />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor='colorCode'>Color value</Form.Label>
        <Form.Control
          id='colorCode'
          type='color'
          name='colorCode'
          value={formData.colorCode}
          onChange={handleChange}
        />
        </Form.Group>
        <button>Add color</button>
      </Form>
    </div>
  );
};

export default NewColorForm;
