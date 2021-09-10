import {db} from "../firebase";

export const messagesApi = {
    create: (item) => {
        return db.ref('messages')
            .push(item)
            .then((ref) => ref.get())
            .then((snap) => ({
                id: snap.key,
                ...snap.val()

            }));
    },
    update: (item) => {
        return db.ref('messages')
            .child(item.id)
            .set(item);
    },
    delete: (id) => {
        return db.ref('messages')
            .child(id)
            .remove();
    },
    getList: (callback) => {
        db.ref('messages')
            .on('value', (snap) => {
                const messages = [];
                snap.forEach((snapshot) => {
                    messages.push({
                        id: snapshot.key,
                        ...snapshot.val(),
                    })
                });
                callback(messages);
            });
    }
};
