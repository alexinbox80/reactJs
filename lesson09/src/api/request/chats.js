import {db} from "../firebase";

export const chatsApi = {
    create: (item) => {
        return db.ref('chats')
            .push(item)
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
        return db.ref('chats')
            .child(id)
            .remove();
    },
    getList: (callback) => {
        db.ref('chats')
            .on('value', (snap) => {
                const chats = [];
                snap.forEach((snapshot) => {
                    chats.push({
                        id: snapshot.key,
                        ...snapshot.val(),
                    })
                });
                callback(chats);
            });
    }
};
