import {initialState, chatsReducer} from "../reducer";
import {createActionAddChatsLoading, createActionAddChats} from "../actions";

describe('chatsReducer', () => {
    it('Вызов редьюсера без акшина вернет initialState', () => {

        const result = chatsReducer();

        expect(result).toEqual(initialState);
    });

    it('Чат добавляется в конец списка', () => {

        const result = chatsReducer(undefined, createActionAddChats({chats: ['test'], isLoading: false}));

        expect(result).toEqual({
            chats: 'test',
            isLoading: false
        });
    });
});
