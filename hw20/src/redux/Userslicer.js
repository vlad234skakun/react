import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
    { id: 2, name: 'Мария Смирнова', email: 'maria@example.com' },
    { id: 3, name: 'Петр Петров', email: 'petr@example.com' },
  ],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer