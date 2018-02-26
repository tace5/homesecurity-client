/**
 * Created by Linus Bein Fahlander on 2018-02-12.
 */
import React, { Component } from 'react';
import API_SETTINGS from '../utils/ApiSettings';

class FormItem extends React.Component {
    constructor(props) {
        super(props);
        this.request = require("request");
        this.state = {
            currentSettings: null
        }
    }

    get_current_setting(){
        //Get current settings from API
        let result = [];
        this.request(API_SETTINGS['api']['root'] + this.props.setting['api_uid'] + ".json", function (error, response, body) {
            let data = JSON.parse(body);
            data.items.forEach(function (item) {
                result.push({id: item['id'], value: item['value']});
            });
        });
        console.log(result);
        return result;
    }

    send_post_request(event){

    }

    send_delete_request(event){

    }

    componentDidMount(){
        // TODO - Call get_current_setting and update state
        const currentSetting = this.get_current_setting().map((cur_setting, i) => {
            console.log(cur_setting);
            return <div id={"set-" + cur_setting.id} className="current_setting">{cur_setting.value}</div>
        });
    }

    render(){
        return (
            <div className="sf-setting">
                <h3>{this.props.setting.display.title}</h3>
                <div className="sf-setting-current">
                    {this.state.currentSettings}
                </div>
            </div>
        );
    }
}

export default FormItem;
