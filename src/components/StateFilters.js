import React from 'react';

function StateFilters (props) {


    function handleFilter (ev) {
        // ev.preventDefault();
        const status = ev.currentTarget.value;
        console.log(status);
        props.showFilteredTasks(status);

        // const filter = ev.currentTarget;
        // const parent = filter.parentElement;
        // parent.classList.toggle("underlined");
    } 

    return (
        // <nav className="filters">
        //       <ul className="filters__list">
        //         <li className="js-filter li__underlined" onClick={handleFilter}>All</li>
        //         <li className="js-filter" onClick={handleFilter}>Active</li>
        //         <li className="js-filter" onClick={handleFilter}>Completed</li>
        //       </ul>
        // </nav>
        <div className="filters">
            <nav className="filters__list">
                <label htmlFor="All" className="js-filter">
                    <input id="All" type="radio" value="All" name="State" className="radioButton underlined" onClick={handleFilter} />
                    All
                </label>
                <label htmlFor="Active" className="js-filter">
                    <input id="Active" type="radio" value="Active" name="State" className="radioButton" onClick={handleFilter} />
                    Active
                </label>
                <label htmlFor="Completed" className="js-filter">
                    <input id="Completed" type="radio" value="Completed" name="State" className="radioButton" onClick={handleFilter} />
                    Completed
                </label>
            </nav>
        </div>
    );

}


export default StateFilters;