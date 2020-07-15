import React from "react";

import "./styles/BadgeForm.css";

const BadgeForm = (props) => {

    const { formHandleChange } = props;
    const { firstName, lastName, email, jobTitle, twitter } = props.formData;

    const handleChange = ({ target }) => {
        formHandleChange(target);
    }

    return (
        <>
            <h1 className="BadgeForm__Title">Crea tu propio Badge</h1>
            <form className="BadgeForm__Form">
                <div className="BadgeForm__Form--container">

                    <label htmlFor="firstName">Nombre/s</label>
                    <input
                        name="firstName"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => handleChange(e)}
                    />

                    <label htmlFor="lastName">Apellido/s</label>
                    <input
                        name="lastName"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => handleChange(e)}

                    />

                    <hr />

                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => handleChange(e)}

                    />

                    <label htmlFor="jobTitle">Ocupación</label>
                    <input
                        name="jobTitle"
                        type="text"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => handleChange(e)}

                    />

                    <label htmlFor="twitter">Twitter</label>
                    <input
                        name="twitter"
                        type="text"
                        id="twitter"
                        value={twitter}
                        onChange={(e) => handleChange(e)}

                    />

                    <button className="BadgeForm__Form--Button btn btn-primary">
                        ¡Crear!
                    </button>
                </div>
            </form>
        </>
    );
}

export default BadgeForm;