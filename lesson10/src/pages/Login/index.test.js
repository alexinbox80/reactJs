import React from "react";
import "@testing-library/jest-dom";
import {fireEvent, act, render} from "@testing-library/react";
import {userApi} from "../../api/request/user";
import {Login, LoginFormTestIds} from "./index";

jest.mock('../../api/request/user.js');

describe('Login', () => {
    it('Корректная авторизация', () => {

        const login = "qw@qw.ru"
        const passwd = "123";

        const {getByTestId} = render(<Login />);

        const loginField = getByTestId(LoginFormTestIds.loginField);

        act(() => {
            fireEvent.change(loginField, {target: {value: login}});
        });

        const passwordField = getByTestId(LoginFormTestIds.passwordField);

        act(() => {
            fireEvent.change(passwordField, {target: {value: passwd}});
        });

        act(() => {
            fireEvent.click(getByTestId(LoginFormTestIds.submit));
        });

        expect(userApi.login).toHaveBeenLastCalledWith(login, passwd);

    });
});