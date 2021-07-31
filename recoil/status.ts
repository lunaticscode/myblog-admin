import { atom } from 'recoil';

export const editTitleState = atom<string>({
    key: 'editTitle',
    default: "",
})

export const editContentState = atom<string>({
    key: 'editContent',
    default: "",
})