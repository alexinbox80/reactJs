import React, {useEffect, useState} from "react";
import faker from "faker";

import propTypes from "prop-types";

const uuid = () => faker.datatype.uuid();

export const ChatForm = ({addChats, isLoading}) => {

    useEffect(() => {
        document.title = 'Add chat page';
    });


    const handleAddButton = (value) => {
        const item = {
            id: uuid(),
            title: value.title,
            description: value.description,
            content: faker.lorem.paragraphs(),
        };

        if (value.title) {
            addChats(item);
        }
    };

    const ChatFormRender = ({render, children}) => {
        const [formValue, setFormValue] = useState({});

        const setFieldValue = (name, value) => {
            setFormValue(
                {
                    ...formValue,
                    [name]: value,
                }
            );
        };

        const getFieldValue = (name) => formValue[name];

        const resetForm = () => {
            setFormValue({})
        };

        const props = {
            getFieldValue,
            setFieldValue,
            resetForm,
            formValue,
        };

        if (render && typeof render === 'function') {
            return render(props);
        }

        if (children && typeof children === 'function') {
            return children(props);
        }

        return null;
    };

    return (
        <ChatFormRender>
            {
                (props) => {
                    return <div>
                        <input
                            onChange={(event) => {
                                const value = event.target.value;
                                props.setFieldValue('title', value);
                            }}
                            value={props.formValue['title'] || ''}
                            name="title"
                            type="text"
                        />
                        &nbsp;
                        <input
                            onChange={(event) => {
                                const value = event.target.value;
                                props.setFieldValue('description', value);
                            }}
                            value={props.formValue['description'] || ''}
                            name="description"
                            type="text"
                        />
                        &nbsp;
                        <button
                            type="button"
                            onClick={() => {
                                handleAddButton(props.formValue);
                                props.resetForm();
                            }}>
                            AddChat
                        </button>
                        {
                            isLoading && <div>
                                loading...
                            </div>
                        }
                    </div>
                }
            }
        </ChatFormRender>
    );
};

ChatForm.propTypes = {
        addChats: propTypes.func.isRequired,
        isLoading: propTypes.bool.isRequired,
};
