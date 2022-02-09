// import { default as Login } from '.'
// import { screen, render, fireEvent, waitFor } from '@testing-library/react';
// import * as ReactRouterDom from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
// import jwt_decode from 'jwt-decode';

// import * as helpers from '../../helpers/requests';

<<<<<<< HEAD
// jest.mock("jwt-decode");
=======
jest.mock("jwt-decode", () => jest.fn());
>>>>>>> upstream/main

// const mockNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//     useNavigate: () => mockNavigate
// }));

<<<<<<< HEAD
// const mockLoginResponse = {
//     "accessToken": "gjreogjiperog",
//     "refreshToken": "ewiogjwopiegj"
// }
=======
const mockLoginResponse = {
    data: {
        access: 'jreogjiperog',
        refresh: 'ewiogjwopiew'
    }
}
>>>>>>> upstream/main

// describe('Login', () => {
//     test('it renders the page', () => {
//         render(<Login />, { wrapper: ReactRouterDom.MemoryRouter });
//         const heading = screen.getByRole("heading");
//         expect(heading.textContent).toMatch("Sign-in");
//     });

<<<<<<< HEAD
//     test('it allows a user to make a log in request', async () => {
//         render(<Login />, { wrapper: ReactRouterDom.MemoryRouter });
//         const submitBtn = screen.getByRole("button", { name: "Sign In" });
//         const loginSpy = jest.spyOn(helpers, 'postLogin');
//         loginSpy.mockReturnValue(mockLoginResponse);
//         userEvent.click(submitBtn);

//         await waitFor(() => {
//             expect(jwt_decode).toHaveBeenCalled();
//         })
=======
    test('it allows a user to make a log in request', async () => {
        render(<Login />, { wrapper: ReactRouterDom.MemoryRouter });
        const submitBtn = screen.getByRole("button", { name: "Sign In" });
        const loginSpy = jest.spyOn(helpers, 'postLogin');
        loginSpy.mockResolvedValue(mockLoginResponse);
        userEvent.click(submitBtn);

        await waitFor(() => {
            expect(loginSpy).toHaveBeenCalled();
        });

        await waitFor(() => {
            expect(jwt_decode).toHaveBeenCalled();
        });
>>>>>>> upstream/main

//         await waitFor(() => {
//             expect(mockNavigate).toHaveBeenCalled();
//         });
//     });

//     test('it navigates to the register page on button click', async () => {
//         render(<Login />, { wrapper: ReactRouterDom.MemoryRouter });
//         const registerBtn = screen.getByRole("button", { name: "Register" });
//         userEvent.click(registerBtn);

//         await waitFor(() => {
//             expect(mockNavigate).toHaveBeenCalled();
//         });
//     });

//     test('it allows users to input email', () => {
//         render(<Login />, { wrapper: ReactRouterDom.MemoryRouter });
//         const emailInput = screen.getByLabelText("email-input");
//         fireEvent.change(emailInput, { target: { value: "test@email.com"} });
//         expect(emailInput.value).toBe("test@email.com");
//     });

//     test('it allows users to input password', () => {
//         render(<Login />, { wrapper: ReactRouterDom.MemoryRouter });
//         const passwordInput = screen.getByLabelText("password-input");
//         fireEvent.change(passwordInput, { target: { value: "test password"} });
//         expect(passwordInput.value).toBe("test password");
//     });
// });