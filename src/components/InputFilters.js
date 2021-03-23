import React from 'react';

function InputFilters (props) {


    function handleInputValue (ev) {
        ev.preventDefault();
        let inputValue = document.querySelector(".js-input").value;
        props.addNewTask(inputValue);
        inputValue = "";
    } 

    return (
        <div className="inputBox">
              <form className="inputBox__form"> 
                <label className="inputBox__form__title">
                <input className="inputBox__form__box js-input"  type="text" name="Add other task"/>
                </label>
                <button className="inputBox__form__btn" type="submit" onClick={handleInputValue}>Add</button>
              </form>
            </div>
    );

}


export default InputFilters;