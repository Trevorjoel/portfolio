import * as Assets from "../Assets/ApProjectAssets";
import notificationSound from '../Assets/stairs.ac905963.mp3'
import StatusBars from "../StatusBars";
import React from "react";
import {NotificationManager} from "react-notifications";

const playAlert = (sound) =>{
    let audio = new Audio(sound);
    const start = () => {
        audio.play().then(()=> console.log('Audio plays') )
    };
    start();
}
export const createNotificationController = function(type, text, title) {
    playAlert(notificationSound);
    return () => {
        switch (type) {
            case 'info':NotificationManager.info(<p>{text}</p>, <p><bold>{title}</bold></p>, 5000);

                break;
            case 'success':
                NotificationManager.success(<p>{text}</p>, <p><bold>{title}</bold></p>, 5000);
                break;
            case 'warning':
                NotificationManager.warning(<p>{text}</p>, <p><bold>{title}</bold></p>, 6000);
                break;
            case 'error':
                NotificationManager.error(<p>{text}</p>, <p><bold>{title}</bold></p>, 6000);
                break;
        }
    };
};

export const tempController = function (temp)  {

    // setInterval to make sure the values have settled before allowing a reading
    // Prevents firing off notifications while the sliders are being used
    setInterval(()=>{
        if (this.state.tempUpdate !== this.state.tempCaptureValue) {
            this.setState({tempCaptureValue: this.state.tempUpdate});
        }
    },5000);

    switch (true) {
        case   temp <= this.state.fishParams.temp_low_critical  :
            if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempLowCritical === true) {
                console.log(this.state.tempShowNotification.tempHighCritical);
                (this.createNotificationController('error', Assets.tempLowNotifyCritical, Assets.tempLowTitle))();
                this.setState({tempShowNotification:{tempLowCritical: false, tempLowWarn: true, tempOptimal: true, tempHighWarn: true, tempHighCritical: true
                    }})
            }
            return(<div><StatusBars
                divStyle={'red-alert'}
                toggleHandler={this.toggleTempHandler.bind(this)}
                updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempLowTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempLowCritical}
                link={'https://portfolio.fullstack-adventure.com'}
            /></div>);

        case temp > this.state.fishParams.temp_low_critical && temp <= this.state.fishParams.temp_low_warn : //

            if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempLowWarn === true) {
                console.log('Runs the alert');
                (this.createNotificationController('warning', Assets.tempLowNotifyWarn, Assets.tempLowTitle))();
                this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: false, tempOptimal: true, tempHighWarn: true,  tempHighCritical: true
                    }})
            }

            return <StatusBars
                divStyle={'yellow-alert'}
                toggleHandler={this.toggleTempHandler.bind(this)}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempLowTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempLowWarn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;

        case temp > this.state.fishParams.temp_low_warn && temp <= this.state.fishParams.temp_high_warn : //

            if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempOptimal === true) {
                console.log('Runs the alert');
                (this.createNotificationController('success', Assets.tempOkNotify, Assets.tempOkTitle))();
                this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: true, tempOptimal: false, tempHighWarn: true,  tempHighCritical: true
                    }})
            }

            return <StatusBars
                divStyle={'green-alert'}
                toggleHandler={ this.toggleTempHandler.bind(this)}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempOkTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempOk}
                link={'https://portfolio.fullstack-adventure.com'}
            />;

        case temp > this.state.fishParams.temp_high_warn && temp <= this.state.fishParams.temp_high_critical : //
            if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempHighWarn === true) {
                console.log('Runs the alert');
                (this.createNotificationController('warning', Assets.tempHighNotifyWarn, Assets.tempHighTitle))();
                this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: true, tempOptimal: true, tempHighWarn: false,  tempHighCritical: true
                    }})
            }
            return <StatusBars
                divStyle={'yellow-alert'}
                toggleHandler={ this.toggleTempHandler.bind(this)}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempHighTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempHighWarn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;


        case temp > this.state.fishParams.temp_high_critical: //
            if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempHighCritical === true) {
                console.log('Runs the alert');
                (this.createNotificationController('error', Assets.tempHighNotifyCritical, Assets.tempHighTitle))();
                this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: true, tempOptimal: true, tempHighWarn: true,  tempHighCritical: false
                    }})
            }
            return <StatusBars
                divStyle={'red-alert'}
                toggleHandler={this.toggleTempHandler.bind(this)}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempHighTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempHighCritical}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        default:
            return <div className="">
                <div className="unknown-reading">CANNOT READ DATA</div>
            </div>;
    }
};

export const phController = function(ph) {
    setInterval(()=>{
        if (this.state.phUpdate !== this.state.phCaptureValue) {
            this.setState({phCaptureValue: this.state.phUpdate});
        }
    },5000);
    switch (true) {
        case   ph <= this.state.fishParams.ph_low_critical  :
            if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phLowCritical === true) {

                (this.createNotificationController('error', Assets.phLowNotifyCritical, Assets.phLowTitle))();
                this.setState({phShowNotification:{phLowCritical: false, phLowWarn: true, phOptimal: true, phHighWarn: true, phHighCritical: true
                    }})
            }
            return <StatusBars
                divStyle={'red-alert'}
                toggleHandler={this.togglePhHandler.bind(this)}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phLowTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phLowCritical}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case ph > this.state.fishParams.ph_low_critical && ph <= this.state.fishParams.ph_low_warn : //
            if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phLowWarn === true) {

                (this.createNotificationController('warning', Assets.phLowNotifyWarn, Assets.phLowTitle))();
                this.setState({phShowNotification:{phLowCritical: true, phLowWarn: false, phOptimal: true, phHighWarn: true, phHighCritical: true
                    }})
            }
            return  <StatusBars
                divStyle={'yellow-alert'}
                toggleHandler={this.togglePhHandler.bind(this)}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phLowTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phLowWarn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case ph > this.state.fishParams.ph_low_warn && ph <= this.state.fishParams.ph_high_warn : //

            if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phOptimal === true) {

                (this.createNotificationController('success', Assets.phOk, Assets.phOkTitle))();
                this.setState({phShowNotification:{phLowCritical: true, phLowWarn: true, phOptimal: false, phHighWarn: true, phHighCritical: true
                    }})
            }

            return   <StatusBars
                divStyle={'green-alert'}
                toggleHandler={this.togglePhHandler.bind(this)}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phOkTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phOk}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case ph > this.state.fishParams.ph_high_warn && ph <= this.state.fishParams.ph_high_critical : //
            if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phHighWarn === true) {

                (this.createNotificationController('warning', Assets.phHighNotifyWarn, Assets.phHighTitle))();
                this.setState({phShowNotification:{phLowCritical: true, phLowWarn: true, phOptimal: true, phHighWarn: false, phHighCritical: true
                    }})
            }
            return  <StatusBars
                divStyle={'yellow-alert'}
                toggleHandler={this.togglePhHandler.bind(this)}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phHighTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phHighWarn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;

        case ph > this.state.fishParams.ph_high_critical: //
            if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phHighCritical === true) {

                (this.createNotificationController('error', Assets.phHighNotifyCritical, Assets.phHighTitle))();
                this.setState({phShowNotification:{phLowCritical: true, phLowWarn: true, phOptimal: true, phHighWarn: true, phHighCritical: false
                    }})
            }
            return  <StatusBars
                divStyle={'red-alert'}
                toggleHandler={this.togglePhHandler.bind(this)}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phHighTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phHighCritical}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        default:
            return <div className="">
                <div className="unknown reading">CANNOT READ DATA</div>
            </div>;
    }

};

export const nh3Controller = function(nh3) {
    switch (true) {
        case   nh3 <= this.state.fishParams.nh3_warn  :
            setInterval(()=>{
                if (this.state.nh3Update !== this.state.nh3CaptureValue) {
                    this.setState({nh3CaptureValue: this.state.nh3Update});
                }
            },5000);
            if(this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3Optimal === true) {
                console.log(this.state.tempShowNotification.tempHighCritical);
                (this.createNotificationController('success', Assets.nh3Ok, Assets.nh3TitleOk()))();
                this.setState({nh3ShowNotification:{ nh3Optimal: false, nh3HighWarn: true, nh3HighCritical: true
                    }})
            }
            return <StatusBars
                divStyle={'green-alert'}
                toggleHandler={ this.toggleNh3Handler.bind(this)}
                updatedValue={this.state.nh3Update[0].toPrecision(2)}
                symbol={'mg/L'}
                statusTitle={Assets.nh3TitleOk()}
                adviceToggle={this.state.toggleNh3Advice}
                adviceText={Assets.nh3Ok}
                link={'https://portfolio.fullstack-adventure.com'}
            />;

        case nh3 > this.state.fishParams.nh3_warn && nh3 <= this.state.fishParams.nh3_critical : //

            if(this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3HighWarn === true) {
                console.log(this.state.tempShowNotification.tempHighCritical);
                (this.createNotificationController('warning', Assets.nh3NotifyWarn, Assets.nh3TitleHigh()))();
                this.setState({nh3ShowNotification:{ nh3Optimal: true, nh3HighWarn: false, nh3HighCritical: true
                    }})
            }

            return <StatusBars
                divStyle={'yellow-alert'}
                toggleHandler={ this.toggleNh3Handler.bind(this)}
                updatedValue={this.state.nh3Update[0].toPrecision(2)}
                symbol={'mg/L'}
                statusTitle={Assets.nh3TitleHigh()}
                adviceToggle={this.state.toggleNh3Advice}
                adviceText={Assets.nh3Warn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case nh3 > this.state.fishParams.nh3_critical : //
            if(this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3HighCritical === true) {
                console.log(this.state.tempShowNotification.tempHighCritical);
                (this.createNotificationController('error', Assets.nh3NotifyCritical, Assets.nh3TitleHigh()))();
                this.setState({nh3ShowNotification:{ nh3Optimal: true, nh3HighWarn: true, nh3HighCritical: false
                    }})
            }
            return  <StatusBars
                divStyle={'red-alert'}
                toggleHandler={ this.toggleNh3Handler.bind(this)}
                updatedValue={this.state.nh3Update[0].toPrecision(2)}
                symbol={'mg/L'}
                statusTitle={Assets.nh3TitleHigh()}
                adviceToggle={this.state.toggleNh3Advice}
                adviceText={Assets.nh3Critical}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        default:
            return <div className="">
                <div className="unknown reading">CANNOT READ DATA</div>
            </div>;
    }
};

//

export const addReadingsToDB = async function () {
    (this.createNotificationController('info', Assets.readingText, Assets.readingTitle))();
    console.log('Enter to DB');
    const response = await fetch('/api/ap', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            users_id: 1,
            date_time: this.state.latestTime,
            temp: this.state.tempUpdate,
            ph: this.state.phUpdate,
            nh3: this.state.nh3Update,
        })
    });

    const body = await response.json()
        .then(() =>{this.getPreviousTime()})
        .catch(() =>{
            console.log('There was an error')

        })

};

// Function to get the last time inserted into the database
export const getPreviousTime = async function () {
    console.log('getting time');
    const response = await fetch('/api/ap',{
        method: 'GET',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

    });


    const query = await response.json();
    if (response.status !== 200) throw Error(query.message);
    const today = new Date(query.time[0].date_time);
  //  console.log(today);
    today.setHours(today.getHours() + 4); // + 4 for the localhost - 4 for the deployment
  //  console.log(today);
    this.setState({
        latestTime: today.toISOString().slice(0, 19).replace('T', ' ') //
    });
    console.log(this.state.latestTime);
    return query;

};


export const selectReadings = async function(numberOfReadings){

    const response = await fetch('/api/all', {
        method: 'POST',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
       body: JSON.stringify({
            numberOfReadings: numberOfReadings,
        })
    })
    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query;
}
// Under construction

export const selectFishType = async function(fishId){
    console.log('get fish params');

    const response = await fetch('/api/fish',{
        method: 'POST',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            fishId: fishId,
        })

    });

    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query.data;
}

export const getLastReadings = async function() {
    console.log('get last readings');

    const response = await fetch('/api/tank',{
        method: 'GET',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

    });

    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query;
}

