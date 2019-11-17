import React, {Component } from 'react';
import TempSlider from "./TempSlider";
import PhSlider from "./PhSlider"
import Nh3Slider from "./AmmoniaSlider";
const defaultTemp = [11.5];
const defaultPh = [7.25];
const defaultNh3 = [0.05];

class SlidersContainer extends Component {
    state ={
        tempValue: defaultTemp.slice(),
        tempUpdate: defaultTemp.slice(),
        
        phValue: defaultPh.slice(),
        phUpdate: defaultPh.slice(),
        
        nh3Value: defaultNh3.slice(),
        nh3Update: defaultNh3.slice(),
    };
    
 tempAlert = (temp) => {
     
     switch (true) {
         case   temp <= 3  :
             return <div >
                 <div className="red-alert"><h5>LOW TEMPERATURE - CRITICAL</h5>
                    </div>
                 <p className="alert">You have critically low water temperature. At extremely low water temperatures your fish can freeze to death. Your system is at risk. Take immediate action.
                     Please see <a href="#"> our wiki.</a></p>
                 
             </div>;
         case temp > 3 && temp <= 10 : //
             return <div className="">
                 <div className="yellow-alert"><h5>LOW TEMPERATURE WARNING</h5> </div>
                 <p className="alert">You have low water temperature. At low water temperatures your fish stop feeding and grow very slowly. Action should be taken to increase the water temperature.
                     Please see <a href="#"> our wiki.</a></p>
             </div>;
         case temp > 10 && temp <= 18 : //
             return <div className="">
                 <div className="green-alert"><h5>IDEAL TEMPERATURE</h5>
                    </div>
                 <p className="alert">Water temperature is optimal for trout. Keep the temperature between 10 and 18 degrees
                     More info is in <a href="#"> our wiki.</a></p>
             </div>;
         case temp > 18 && temp <= 23 : //
             return <div className="">
                 <div className="yellow-alert"><h5>HIGH TEMPERATURE - WARNING</h5> </div>
                 <p className="alert">You have high water temperature. At higher water temperatures fish stop feeding and are prone to low oxygen and higher ammonia concentrations in the water.
                     Action should be taken to reduce the water temperature.
                     Please see <a href="#"> our wiki.</a></p>
             </div>;
         case temp > 23: //
             return <div className="">
                 <div className="red-alert"><h5>HIGH TEMPERATURE - CRITICAL</h5>
                    </div> <p className="alert">You have critically high water temperature. At these levels depleted oxygen and ammonia concentrations can be fatal to your fish. Your system is at risk. Take immediate action.
                 Please see <a href="#"> our wiki.</a></p>
             </div>;
         default:
             return <div className="">
                 <div className="unknown reading">CANNOT READ DATA</div>
             </div>;
     }
    };
    
    phAlert = (ph) => {
        
        switch (true) {
            case   ph <= 5.5  :
                return <div >
                    <div className="red-alert"><h5>LOW pH - CRITICAL</h5>
                    </div>
                    <p className="alert">You have critically low pH. At extremely low pH your fish can suffer fatal acid burns.
                        Your system is at risk. Take immediate action.
                        Please see <a href="#"> our wiki.</a></p>
                
                </div>;
            case ph > 5.5 && ph <= 6.5 : //
                return <div className="">
                    <div className="yellow-alert"><h5>LOW pH WARNING</h5> </div>
                    <p className="alert">You have low pH levels. At low pH levels your fish may suffer from high acidity.
                        Action should be taken to increase the pH levels.
                        Please see <a href="#"> our wiki.</a></p>
                </div>;
            case ph > 6.5 && ph <= 8 : //
                return <div className="">
                    <div className="green-alert"><h5>IDEAL pH</h5>
                    </div>
                    <p className="alert">Water pH levels are optimal for trout. Keep the pH level between 6.5 and 8.
                        More info is in <a href="#"> our wiki.</a></p>
                </div>;
            case ph > 8 && ph <= 9 : //
                return <div className="">
                    <div className="yellow-alert"><h5>HIGH pH - WARNING</h5> </div>
                    <p className="alert">You have high pH levels. At higher pH levels your fish may suffer from alkalinity and be more subject to higher concentrations of ammonia.
                        Action should be taken to reduce the pH levels.
                        Please see <a href="#"> our wiki.</a></p>
                </div>;
            case ph > 9: //
                return <div className="">
                    <div className="red-alert"><h5>HIGH pH - CRITICAL</h5>
                    </div> <p className="alert">You have critically low pH. At extremely low pH your fish can suffer fatal alkaline burns and be more prone to higher concentrations of ammonia.
                    Your system is at risk. Take immediate action.
                    Please see <a href="#"> our wiki.</a></p>
                </div>;
            default:
                return <div className="">
                    <div className="unknown reading">CANNOT READ DATA</div>
                </div>;
        }
    };
    
    nh3Alert = (nh3) => {
        
        switch (true) {
            case   nh3 <= 0.20  :
                return <div >
                    <div className="green-alert"><h5>
    
                       OPTIMAL
    
                        NH<sub>3</sub>
                        &nbsp;</h5>
                    </div>
                    Keep your NH<sub>3</sub>
                        &nbsp; Levels below 0.2 PPM.
                        Please see <a href="#"> our wiki.</a>
                
                </div>;
            case nh3 > 0.20 && nh3 <= 0.4 : //
                return <div className="">
                    <div className="yellow-alert"><h5>HIGH   NH<sub>3</sub>
                        &nbsp;  - WARNING</h5> </div>
                    <p className="alert"> At high levels fish may become prone to ammonia poisoning. Action should be taken to reduce the ammonia content of your water.
                        Please see <a href="#"> our wiki.</a></p>
                </div>;
            case nh3 > 0.4 : //
                return <div className="">
                    <div className="red-alert"><h5>HIGH   NH<sub>3</sub>
                        &nbsp;  - CRITICAL</h5>
                    </div>
                    <p className="alert">
                        &nbsp; At critically high levels of NH<sub>3</sub>
                        &nbsp; Your fish are at high risk of ammonia poisoning. Immediate action should be taken to reduce the ammonia content of your water.  More info is in <a href="#"> our wiki.</a></p>
                </div>;
            default:
                return <div className="">
                    <div className="unknown reading">CANNOT READ DATA</div>
                </div>;
        }
    };
    
    componentDidMount() {
        window.scrollTo(0, 0);
       this.tempAlert();
    }

    
    onNh3Update = nh3Update => {
        this.setState({ nh3Update })
    };
    
    onNh3Change = nh3Values => {
        this.setState({ nh3Values })
    };
    
    
    
    onPhUpdate = phUpdate => {
        this.setState({ phUpdate })
    };
    
    onPhChange = phValues => {
        this.setState({ phValues })
    };

    onTempUpdate = tempUpdate => {
        this.setState({ tempUpdate })
    };
    
    onTempChange = tempValues => {
        this.setState({ tempValues })
    };
    render() {
    
        return (
            
            <div className="grid-container sensors-container ">
                
                <Headline/>
                
                <div className="grid-item1">
             
                    <p >TEMP<br/></p><p>{this.state.tempUpdate[0.].toPrecision(3)} &#8451;</p>
                </div>
                
               <div className="grid-item2">
                <TempSlider
                    values={this.state.tempValue}
                    update={this.state.tempUpdate}
                    defaultValues={defaultTemp}
                    onUpdate={this.onTempUpdate}
                    onChange={this.onTempChange}
                />
               </div>
              
                <div className="grid-item3">
                
                    <p >pH<br/></p><p>{this.state.phUpdate[0.].toPrecision(3)}</p>
                </div>
                <div className="grid-item4">
                <PhSlider
                    values={this.state.phValue}
                    update={this.state.phUpdate}
                    defaultValues={defaultPh}
                    onUpdate={this.onPhUpdate}
                    onChange={this.onPhChange}
                />
                </div >
               
               <div className="grid-item5">
               
                   <p >
                       
                           <div className="eqnum">&nbsp;</div>
                           
                               NH<sub>3</sub>
                       &nbsp;</p>
                      <p>{this.state.nh3Update[0.].toPrecision(3)}</p>
               </div>
                <div className="grid-item6">
                <Nh3Slider
                    values={this.state.nh3Update}
                    update={this.state.nh3Update}
                    defaultValues={defaultNh3}
                    onUpdate={this.onNh3Update}
                    onChange={this.onNh3Change}
                />
                </div>
                <div className="grid-item7">
                {this.tempAlert(this.state.tempUpdate[0]) }
                </div>
                <div className="grid-item8">
                    {this.phAlert(this.state.phUpdate[0]) }
                </div>
                <div className="grid-item9">
                    {this.nh3Alert(this.state.nh3Update[0]) }
                </div>
            </div>
            
        );
    }
}


const Headline = () => {
    return <div className="grid-item"><h1 className="sensors-heading">Aquaponics probe simulator</h1>

        <p>This is built as a part of a wider<a target="_blank" href="https://fullstack-adventure.com/"> Internet Of Things project..</a>
        </p><p>In summary, aquaponics is a system of growing edible plants and fish by way of cycling the water from fish-tank to hydroponic style garden bed and back.</p><p>
            My project is to give owners of these systems the ability to remotely monitor their systems, check historical data, and get actionable advice on problems specific to their
            setup by way of logging into a progressive web application.</p><p>This project requires input data of various probes in order to program and test the logic of the application.
        </p><p>These sliders simulate the probes readings in order for me to go ahead and code the application.
        </p>
        </div>;
};
const Description = () => {
    
    return <div className="grid-item7">
        <div>TEMP OK</div>
    </div>;
};
export default SlidersContainer;