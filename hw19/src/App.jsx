import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import './App.css'

function App() {
  const { Title } = Typography;
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
    setFormData({ name: '', description: '' });
  };

  return (
    <>
      <div className='container' style={{ maxWidth: 600, margin: '50px auto' }}>
        <Title level={2}>Форма ввода</Title>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Имя" required>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Введите имя"
            />
          </Form.Item>

          <Form.Item label="Описание" required>
            <Input.TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Введите описание"
              rows={4}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </Form>

        {submittedData && (
          <Card title="Отправленные данные" style={{ marginTop: 24 }}>
            <p><strong>Имя:</strong> {submittedData.name}</p>
            <p><strong>Описание:</strong> {submittedData.description}</p>
          </Card>
        )}
      </div>
    </>
  )
}

export default App
