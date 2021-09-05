import React, {useEffect} from "react";

import {commentsConnect} from "../../connects/comments";

import styles from "./Gists.module.sass";

export const GistsRender = (props) => {

    const {
        commentsAction,
        data,
        error,
        isLoading
    } = props;

    useEffect(() => {
        commentsAction(1);
    },[]);

    console.log('data ', data);
    console.log('error ', error);
    console.log('isLoading ', isLoading);

    useEffect(() => {
        document.title = 'Gists page';
    });


    return (
      <div className={styles.content}>
          Gists page
      </div>
  );
};

export const Gists = commentsConnect(GistsRender);