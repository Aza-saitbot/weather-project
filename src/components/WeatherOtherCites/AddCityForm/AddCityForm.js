import React from "react";
import {useDispatch} from "react-redux";

const AddCityForm = ({getWeatherCity, setActiveForm, setNewCityBody, newCityBody, errorForm, setError}) => {
    const dispatch = useDispatch();

    const setNewCity = (e) => {
        e.preventDefault();
        const body = e.target.value;
        dispatch(setNewCityBody(body))
    }

    const addCitySubmit = (e) => {
        e.preventDefault();
        if (newCityBody) {
            dispatch(getWeatherCity(newCityBody))
            dispatch(setNewCityBody(""))
        }
    }
    const setCloseError = () => {
        dispatch(setError(!errorForm))
    }

    return (
        <div className="popup" onClick={setActiveForm}>
            <div className="popup__body">
                <div className="popup__content" onClick={e => e.stopPropagation()}>
                    <div className="popup__close" onClick={setActiveForm}><i className=" material-icons ">close</i>
                    </div>
                    <div className="popup__inputButton">
                        <form onSubmit={addCitySubmit} className="popup__form">
                            <input className="popup__input" value={newCityBody} onChange={setNewCity}
                                   placeholder="Weather in your city.."/>
                            <button className="popup__button" type="submit">Saves</button>
                        </form>
                    </div>
                    {errorForm &&
                    <div className="popup__form__error" onClick={setCloseError}>
                        <div className="tiny popup__close__error">
                            <p>No results, sorry <i className=" material-icons ">sentiment_very_dissatisfied</i></p>
                        </div>
                        <div className="tiny popup__close__error" onClick={setCloseError}>
                            <i className="tiny material-icons ">close</i>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default AddCityForm;
