import React, {useEffect} from "react";

import {ENDPOINT, ENDPOINTS} from "../../api/v1/endpoints";
import {commentsConnect} from "../../connects/comments";

import styles from "./Gists.module.sass";

const POSTID = 1;

const url = [
    ENDPOINT,
    ENDPOINTS.comments.replace(
        ':postId',
        POSTID
    )
].join('');

export const GistsRender = (props) => {

    const {
        commentsAction,
        data,
        error,
        isLoading
    } = props;

    useEffect(() => {
        document.title = 'Gists page';
    });


    useEffect(() => {
        commentsAction(POSTID);
    }, []);

    const handleGetDataRequest = () => {
        commentsAction(POSTID);
    };

    return (
        <div className={styles.content}>
            Gists page
            <br/>
            <span>
                Use url: {url}
            </span>
            <hr/>
            {
                isLoading && <div>
                    loading...
                </div>
            }
            {
                data && <ul>
                    {
                        data?.map(({id, postId, name, email, body}) => <li key={id}>
                                <span>id {id}</span>
                                <br/>
                                <span>postId {postId}</span>
                                <br/>
                                <span>name {name}</span>
                                <br/>
                                <span>email {email}</span>
                                <br/>
                                <span>body {body}</span>
                                <hr/>
                            </li>
                        )
                    }
                </ul>
            }
            {
                error && <div>
                    error: {error.toString()}
                    <br/>
                    <button
                        type="button"
                        onClick={() => {
                            handleGetDataRequest();
                        }}>
                        RepeatRequest
                    </button>
                </div>
            }
        </div>
    );
};

export const Gists = commentsConnect(GistsRender);
