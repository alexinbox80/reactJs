import {db} from "../firebase";

export const chatsApi = {
    create: (item) => {
        return db.ref('chats')
            .push(
                item
            )
            .then((ref) => ref.get())
            .then((snap) => ({
                id: snap.key,
                ...snap.val()

            }));
    },
    update: (item) => {
        return db.ref('chats')
            .child(item.id)
            .set(item);
    },
    delete: (id) => {
        console.log(id);
        return db.ref('chats')
            .child(id)
            .remove();
    },
    getList: (callback) => {
        db.ref('chats')
            .on('child_changed', (snap) => callback({
                id: snap.key,
                ...snap.val()
            }));

        db.ref('chats')
            .on('child_added', (snap) => callback({
                id: snap.key,
                ...snap.val()
            }));
    }
};
