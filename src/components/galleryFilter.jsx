import React from 'react';

import '../css/filter.css'

export const GalleryFilter = (props) => {
    const {onFilterChange, userSelected, topSelected, filterOptions} = props;
    return(
        <div className="filter col-md-12">
            <label htmlFor="section">Select section</label>
            <select
                id="section"
                name="section"
                onChange={(e) => onFilterChange(e)}
                defaultValue={filterOptions.section}>
                <option value="hot">Hot</option>
                <option value="top">Top</option>
                <option value="user">User</option>
            </select>
            <label htmlFor="sort">Select sort type</label>
            <select
                id="sort"
                name="sort"
                onChange={(e) => onFilterChange(e)}
                defaultValue={filterOptions.sort}>
                <option value="viral">Viral</option>
                <option value="top">Top</option>
                <option value="time">Time</option>
                {userSelected && <option value="rising">Rising</option>}
            </select>
            {topSelected &&
            <div>
                <label htmlFor="section">Select time range</label>
                <select
                    id="window"
                    name="window"
                    onChange={(e) => onFilterChange(e)}
                    defaultValue={filterOptions.window}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="all">All</option>
                </select>
            </div>}
        </div>
    );
};