import React from 'react'
import Todo from '../Todos/Todo'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('todo has correct text', () => {
    const newTodo = {
        text: "Todo created for testing",
        done: false
    };

    const component = render(<Todo todo={newTodo} onClickComplete={() => {}} onClickDelete={() => {}} />)
    expect(component.container).toHaveTextContent(newTodo.text);
    expect(component.container).toHaveTextContent("This todo is not done");
})