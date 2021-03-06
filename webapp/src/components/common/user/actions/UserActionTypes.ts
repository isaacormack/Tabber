import {UserInterface} from "../interface/UserInterface";

export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

interface UpdateUserType {
    type: typeof UPDATE_USER
    payload: UserInterface
}

interface DeleteUserType {
    type: typeof DELETE_USER
}

export type UserActionTypes = (
    UpdateUserType |
    DeleteUserType
    )