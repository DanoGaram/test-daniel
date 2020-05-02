import React from 'react';
import './InputSearch.scss'
const iconSearch = 'src/assets/images/search-icon.svg';

const InputSearch = (props: {textChanged: Function}) => {
    const textChanged = (e) => {
        props.textChanged(e.target.value);
    }
    return(
        <div className="container-input-search">
            <input className="input-search" type="text" onChange={textChanged} placeholder="Search"/>
            <img className="icon-search" src={iconSearch} alt="" />
        </div>
    )
}

export default InputSearch;
