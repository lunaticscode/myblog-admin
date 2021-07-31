import { atom, selector, atomFamily } from 'recoil';

export const editTitleHtmlState = atom<string>({
    key: 'editTitle',
    default: "",
})

export const editContentHtmlState = atom<string>({
    key: 'editContent',
    default: "",
})

export const editResultState = selector({
    key: 'editResult',
    get: ({get}) => {
        const editTitleHtml = get(editTitleHtmlState);
        const editContentHtml = get(editContentHtmlState);
        return {
            title: editTitleHtml,
            content: editContentHtml,
        }
    }
})