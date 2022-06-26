import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const Questions = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        // navigate(<PushUpTimer />)
        console.log(formData);
    };

    const isFormValid = () => {
        const { one, two, three, four } = formData;
        return (
            one?.match("/. ./") && one?.match(/.{0,5}/) &&
            two?.match("/. ./") && two?.match(/.{0,5}/) &&
            three?.match("/. ./") && three?.match(/.{0,5}/) &&
            four?.match("/. ./") && four?.match(/.{0,5}/)
        )

        // return true;
    };
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((currentFormData) => {
            return {
                ...currentFormData,
                [name]: value,
            };
        });
    };

    return (
        <form noValidate onSubmit={onSubmit}>
            <h2> Instructions</h2>
            <label>
                {' '}
                <span> Who is the main Charct</span>{' '}
            </label>
            <input name="one" value={formData.one} onChange={onChange} />
            <label>
                {' '}
                <span> What can you say about thr theme of the story?</span>{' '}
            </label>
            <input name="two" value={formData.two} onChange={onChange} />
            <label>
                {' '}
                <span> Who do you think the author wrote this book?</span>{' '}
            </label>
            <input name="three" value={formData.three} onChange={onChange} />
            <label>
                <span> Why do you think the author wrote this book?</span>
            </label>
            <input name="four" value={formData.four} onChange={onChange} />
            <label></label>
            <span>
                <button disabled={!isFormValid()}>Submit</button>
            </span>
        </form>
    );
};

export default Questions;
