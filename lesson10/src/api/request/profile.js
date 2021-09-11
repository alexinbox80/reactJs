import {db} from "../firebase";

export const profileApi = {
    create: (item) => {
        return db.ref('profile')
            .push(item)
            .then((ref) => ref.get())
            .then((snap) => ({
                id: snap.key,
                ...snap.val()
            }));
    },
    update: (item) => {
        console.log('item ', item);

        return db.ref('profile')
            .child(item.uid)
            .set(item);
    },
    delete: (id) => {
        return db.ref('profile')
            .child(id)
            .remove();
    },
    getList: (callback, uid) => {
        db.ref('profile')
            //.child(uid)
            .on('value', (snap) => {
                const profile = [];
                snap.forEach((snapshot) => {
                    profile.push({
                        uid: uid,
                        ...snapshot.val(),
                    })
                });
                callback(profile);
            });
    }
};
