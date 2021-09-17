import React from "react";
import "@testing-library/jest-dom";
import {fireEvent, act, render} from "@testing-library/react";
import {Chats, ChatsTextIDs} from "./index";

describe('Chats', () => {
    it.todo('Корректный заголовок');
    it('Корректный заголовок', () => {
        const component = render(<Chats/>);

        expect(component.queryAllByTestId(ChatsTextIDs.title)).toHaveTextContent('Page For Add Chat.');
    });

    it('Ввод данных в поля', () => {

        const title = "test";
        const description = "test";

        const onChange = jest.fn();
        const onClick = jest.fn();
        const setFieldValue = jest.fn();

        const component = render(<Chats onChange={onChange} onClick={onClick} setFieldValue={setFieldValue}/>);

        const filed = component.queryAllByTestId(ChatsTextIDs.titleField);

        act(() => {
            fireEvent.change(filed, {
                target: {
                    value: title
                }
            })
        });

        expect(setFieldValue).toHaveBeenLastCalledWith('test', title);
    });

    it('Вызывается функция onClick', () => {

        const onChange = jest.fn();
        const onClick = jest.fn();
        const setFieldValue = jest.fn();

        const component = render(<Chats onChange={onChange} onClick={onClick} setFieldValue={setFieldValue}/>);

        const button = component.queryAllByTestId(ChatsTextIDs.clickButton);

        act(() => {
            fireEvent.click(button);
        });

        expect(onClick).toBeCalled();
    });
});