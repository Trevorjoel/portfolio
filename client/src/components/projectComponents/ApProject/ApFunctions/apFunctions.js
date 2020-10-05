import * as Assets from "../Assets/ApProjectAssets";
import {nh3TitleHigh} from "../Assets/ApProjectAssets";
import notificationSound from '../Assets/stairs.ac905963.mp3'
import React from "react";
import {NotificationManager} from "react-notifications";
import StatusAccordion from '../StatusAccordion/StatusAcordion';

const playAlert = (sound) => {
    let audio = new Audio(sound);
    const start = () => {
        audio.play().then(() => console.log('Audio plays'))
    };
    start();
}
export const createNotificationController = function (type, text, title) {
    playAlert(notificationSound);
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info(<p>{text}</p>, <p>
                    <bold>{title}</bold>
                </p>, 5000);

                break;
            case 'success':
                NotificationManager.success(<p>{text}</p>, <p>
                    <bold>{title}</bold>
                </p>, 5000);
                break;
            case 'warning':
                NotificationManager.warning(<p>{text}</p>, <p>
                    <bold>{title}</bold>
                </p>, 6000);
                break;
            case 'error':
                NotificationManager.error(<p>{text}</p>, <p>
                    <bold>{title}</bold>
                </p>, 6000);
                break;
        }
    };
};

export const tempController = function (temp) {

    // setInterval to make sure the values have settled before allowing a reading
    // Prevents firing off notifications while the sliders are being used
    setInterval(() => {
        if (this.state.tempUpdate !== this.state.tempCaptureValue) {
            this.setState({tempCaptureValue: this.state.tempUpdate});
        }
    }, 5000);
    switch (true) {
        case   temp <= this.state.systemParams.temp_low_critical  :
            if (this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempLowCritical === true) {

                (this.createNotificationController('error', Assets.tempLowNotifyCritical, Assets.tempLowTitle))();
                this.setState({
                    tempShowNotification: {
                        tempLowCritical: false,
                        tempLowWarn: true,
                        tempOptimal: true,
                        tempHighWarn: true,
                        tempHighCritical: true
                    }
                })
            }
            return (<div><StatusAccordion
                paramName={Assets.paramNameTemp}
                divStyle={'red-alert'}
                updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempLowTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempLowCritical}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "20px 20px 0 0"}}
            /></div>);

        case temp > this.state.systemParams.temp_low_critical && temp <= this.state.systemParams.temp_low_warn : //

            if (this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempLowWarn === true) {

                (this.createNotificationController('warning', Assets.tempLowNotifyWarn, Assets.tempLowTitle))();

                this.setState({
                    tempShowNotification: {
                        tempLowCritical: true,
                        tempLowWarn: false,
                        tempOptimal: true,
                        tempHighWarn: true,
                        tempHighCritical: true
                    }
                })
            }

            return <StatusAccordion
                paramName={Assets.paramNameTemp}
                divStyle={'yellow-alert'}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempLowTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempLowWarn}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "20px 20px 0 0"}}
            />;

        case temp > this.state.systemParams.temp_low_warn && temp <= this.state.systemParams.temp_high_warn : //

            if (this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempOptimal === true) {

                (this.createNotificationController('success', Assets.tempOkNotify, Assets.tempOkTitle))();
                this.setState({
                    tempShowNotification: {
                        tempLowCritical: true,
                        tempLowWarn: true,
                        tempOptimal: false,
                        tempHighWarn: true,
                        tempHighCritical: true
                    }
                })
            }

            return <StatusAccordion
                paramName={Assets.paramNameTemp}
                divStyle={'green-alert'}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempOkTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempOk}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "20px 20px 0 0"}}
            />;

        case temp > this.state.systemParams.temp_high_warn && temp <= this.state.systemParams.temp_high_critical : //
            if (this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempHighWarn === true) {

                (this.createNotificationController('warning', Assets.tempHighNotifyWarn, Assets.tempHighTitle))();
                this.setState({
                    tempShowNotification: {
                        tempLowCritical: true,
                        tempLowWarn: true,
                        tempOptimal: true,
                        tempHighWarn: false,
                        tempHighCritical: true
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNameTemp}
                divStyle={'yellow-alert'}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempHighTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempHighWarn}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "20px 20px 0 0"}}
            />;


        case temp > this.state.systemParams.temp_high_critical: //
            if (this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempHighCritical === true) {

                (this.createNotificationController('error', Assets.tempHighNotifyCritical, Assets.tempHighTitle))();
                this.setState({
                    tempShowNotification: {
                        tempLowCritical: true,
                        tempLowWarn: true,
                        tempOptimal: true,
                        tempHighWarn: true,
                        tempHighCritical: false
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNameTemp}
                divStyle={'red-alert'}
                updatedValue={this.state.tempUpdate[0].toPrecision(3)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempHighTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempHighCritical}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "20px 20px 0 0"}}
            />;
        default:
            return <div className="">
                <div className="unknown-reading">CANNOT READ DATA</div>
            </div>;
    }
};

export const phController = function (ph) {
    setInterval(() => {
        if (this.state.phUpdate !== this.state.phCaptureValue) {
            this.setState({phCaptureValue: this.state.phUpdate});
        }
    }, 5000);
    switch (true) {
        case   ph <= this.state.systemParams.ph_low_critical  :
            if (this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phLowCritical === true) {

                (this.createNotificationController('error', Assets.phLowNotifyCritical, Assets.phLowTitle))();
                this.setState({
                    phShowNotification: {
                        phLowCritical: false, phLowWarn: true, phOptimal: true, phHighWarn: true, phHighCritical: true
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNamePh}
                divStyle={'red-alert'}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phLowTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phLowCritical}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case ph > this.state.systemParams.ph_low_critical && ph <= this.state.systemParams.ph_low_warn : //
            if (this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phLowWarn === true) {

                (this.createNotificationController('warning', Assets.phLowNotifyWarn, Assets.phLowTitle))();
                this.setState({
                    phShowNotification: {
                        phLowCritical: true, phLowWarn: false, phOptimal: true, phHighWarn: true, phHighCritical: true
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNamePh}
                divStyle={'yellow-alert'}

                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phLowTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phLowWarn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case ph > this.state.systemParams.ph_low_warn && ph <= this.state.systemParams.ph_high_warn : //

            if (this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phOptimal === true) {

                (this.createNotificationController('success', Assets.phOk, Assets.phOkTitle))();
                this.setState({
                    phShowNotification: {
                        phLowCritical: true, phLowWarn: true, phOptimal: false, phHighWarn: true, phHighCritical: true
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNamePh}
                divStyle={'green-alert'}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phOkTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phOk}
                link={'https://portfolio.fullstack-adventure.com'}
            />;
        case ph > this.state.systemParams.ph_high_warn && ph <= this.state.systemParams.ph_high_critical : //
            if (this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phHighWarn === true) {

                (this.createNotificationController('warning', Assets.phHighNotifyWarn, Assets.phHighTitle))();
                this.setState({
                    phShowNotification: {
                        phLowCritical: true, phLowWarn: true, phOptimal: true, phHighWarn: false, phHighCritical: true
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNamePh}
                divStyle={'yellow-alert'}
                updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                symbol={'pH'}
                statusTitle={Assets.phHighTitle}
                adviceToggle={this.state.togglePhAdvice}
                adviceText={Assets.phHighWarn}
                link={'https://portfolio.fullstack-adventure.com'}
            />;

        case ph > this.state.systemParams.ph_high_critical: //
            if (this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phHighCritical === true) {

                (this.createNotificationController('error', Assets.phHighNotifyCritical, Assets.phHighTitle))();
                this.setState({
                    phShowNotification: {
                        phLowCritical: true, phLowWarn: true, phOptimal: true, phHighWarn: true, phHighCritical: false
                    }
                })
            }
            return <StatusAccordion
                paramName={Assets.paramNamePh}
                divStyle={'red-alert'}
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

export const nh3Controller = function (nh3) {
    switch (true) {
        case   nh3 <= this.state.systemParams.nh3_warn  :
            setInterval(() => {
                if (this.state.nh3Update !== this.state.nh3CaptureValue) {
                    this.setState({nh3CaptureValue: this.state.nh3Update});
                }
            }, 5000);
            if (this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3Optimal === true) {

                (this.createNotificationController('success', Assets.nh3Ok, Assets.nh3TitleOk()))();
                this.setState({
                    nh3ShowNotification: {
                        nh3Optimal: false, nh3HighWarn: true, nh3HighCritical: true
                    }
                })
            }
            return <StatusAccordion
                paramName={""}
                divStyle={'green-alert'}
                updatedValue={this.state.nh3Update[0].toPrecision(2)}
                symbol={'mg/L'}
                statusTitle={Assets.nh3TitleOk()}
                adviceToggle={this.state.toggleNh3Advice}
                adviceText={Assets.nh3Ok}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "0 0 20px 20px"}}
            />;

        case nh3 > this.state.systemParams.nh3_warn && nh3 <= this.state.systemParams.nh3_critical : //

            if (this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3HighWarn === true) {

                (this.createNotificationController('warning', Assets.nh3NotifyWarn, Assets.nh3TitleHigh()))();
                this.setState({
                    nh3ShowNotification: {
                        nh3Optimal: true, nh3HighWarn: false, nh3HighCritical: true
                    }
                })
            }

            return <StatusAccordion
                paramName={""}
                divStyle={'yellow-alert'}
                updatedValue={this.state.nh3Update[0].toPrecision(2)}
                symbol={'mg/L'}
                statusTitle={Assets.nh3TitleHigh()}
                adviceToggle={this.state.toggleNh3Advice}
                adviceText={Assets.nh3Warn}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "0 0 20px 20px"}}
            />;
        case nh3 > this.state.systemParams.nh3_critical : //
            if (this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3HighCritical === true) {

                (this.createNotificationController('error', Assets.nh3NotifyCritical, Assets.nh3TitleHigh()))();
                this.setState({
                    nh3ShowNotification: {
                        nh3Optimal: true, nh3HighWarn: true, nh3HighCritical: false
                    }
                })
            }
            return <StatusAccordion
                paramName={""}
                divStyle={'red-alert'}
                updatedValue={this.state.nh3Update[0].toPrecision(2)}
                symbol={'mg/L'}
                statusTitle={nh3TitleHigh()}
                adviceToggle={this.state.toggleNh3Advice}
                adviceText={Assets.nh3Critical}
                link={'https://portfolio.fullstack-adventure.com'}
                addRadius={{borderRadius: "0 0 20px 20px"}}
            />;
        default:
            return <div className="">
                <div className="unknown reading">CANNOT READ DATA</div>
            </div>;
    }
};

