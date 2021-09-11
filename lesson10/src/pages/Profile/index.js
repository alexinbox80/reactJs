import React, {useEffect, useState} from "react";

import {profileApi} from "../../api/request/profile";

import styles from "./Profile.module.sass";
//import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {getProfileLoading, profileSelectors} from "../../store/profile";
import {getUser} from "../../store/user";

export const Profile = () => {
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const currentUser = useSelector((state) => getUser(state));
    const profile = useSelector((state) => profileSelectors.getProfile(state));

    useEffect(() => {
        if (profile) {
            //setUserName(profile.userName);
        }
    }, [])

    const isLoading = useSelector((state) => getProfileLoading(state));

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError(null);
        try {
            const profileExist = profile.find((item) => item.uid === currentUser.uid);

            if (profileExist) {
                await profileApi.update({uid: currentUser.uid, userName: userName});
            } else {
                await profileApi.create({uid: currentUser.uid, userName: userName});
            }
            //push('/home');
        } catch (error) {
            console.log('Profile Form: ', error.message);
            setError(error.message);
        }
    };

    return (
        <div className={styles.content}>
            <form onSubmit={handleSubmit}>
                <p>Input Your Name.</p>
                <div>
                    <input
                        placeholder="Input Name"
                        name="userName"
                        type="text"
                        onChange={handleUserNameChange}
                        value={userName}
                    />
                </div>
                <div>
                    {
                        isLoading && <div>
                            loading...
                        </div>
                    }
                    {error && <p>{error}</p>}
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};
