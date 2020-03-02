import { useState } from 'react';

const useForm = () => {
    const [state, setState] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        e.persist();
        setState(state => {
            return { ...state, [e.target.name]: e.target.value };
        });

        if(e.target.value) {
            setErrors({ ...errors, [e.target.name]: false });
        } else {
            setErrors({ ...errors, [e.target.name]: { content: `Please enter your ${e.target.name}`, pointing: 'below' }});
        };
    }

    const clearForm = e => setState({});

    return [state, handleChange, clearForm, errors];
}

export default useForm;