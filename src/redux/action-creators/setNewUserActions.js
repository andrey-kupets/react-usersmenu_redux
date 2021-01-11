import {INPUT_NAME,
    INPUT_USERNAME,
    INPUT_EMAIL,
    INPUT_PHONE,
    INPUT_WEBSITE,
    INPUT_ID
} from '../action-types'

export const setNewName = (payload) => ({type: INPUT_NAME, payload});
export const setNewUsername = (payload) => ({type: INPUT_USERNAME, payload});
export const setNewEmail = (payload) => ({type: INPUT_EMAIL, payload});
export const setNewPhone = (payload) => ({type: INPUT_PHONE, payload});
export const setNewWebsite = (payload) => ({type: INPUT_WEBSITE, payload});
export const setID = (payload) => ({type: INPUT_ID, payload});
