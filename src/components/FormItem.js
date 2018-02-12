/**
 * Created by Linus Bein Fahlander on 2018-02-12.
 */
import React, { Component } from 'react';

class FormItem extends React.Component {
    constructor(props) {
        super(props);
    }

    get_current_setting(setting){

    }

    send_post_request(event){

    }

    send_delete_request(event){

    }

    render(){
        const currentSetting = this.get_current_setting(this.props.setting).map((setting, i) => {
            return <div id={"set-" + setting.id} className="current_setting">{setting.name}</div>
        });

        return (
            <div className="sf-setting">
                <h3>{this.props.setting.display.title}</h3>
                <div className="sf-setting-current">
                    {}
                </div>
            </div>
        );
    }
}

export default FormItem;
