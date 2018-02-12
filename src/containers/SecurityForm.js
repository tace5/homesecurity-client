/**
 * Created by Linus Bein Fahlander on 2018-02-12.
 */
import React, { Component } from 'react';
import API_SETTINGS from '../utils/ApiSettings';
import FormItem from '../components/FormItem';

class SecurityForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const inputs = API_SETTINGS['requests'].map((setting, i) => {
            return <FormItem key={i} setting={setting}/>
        });

        return (
            <div className="sf-main">
                {inputs}
            </div>
        );
    }
}

export default SecurityForm;