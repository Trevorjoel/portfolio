/*
* Folder contains assets related to this projects
* */
// For the project heading:
import React from "react";

export const projectName = 'Aquaponics Probe Simulator';
export const projectPurpose = ["Build a user interface to control the values that would be taken from probes testing water quality in an " +
"aquaponics system, namely temperature, " +
"pH and ammonia.",
    "This program must simulate data to enable developers to control the values that must be input into the application for testing the " +
    "programming logic. End users will need to receive " +
    " warnings and advice based on parameter ranges from the probes."];

export const projectDescription = ["This is a part of a larger Internet Of Things project."];
export const projectLearning = ['Using & customising component packages, scoping styles to components, conditionally rendering content. ',
    'Better planning and further breaking up into smaller modules is needed' +
' in future work.'];
export const link1 = [''];
export const link2 = ['https://fullstack-adventure.com/', 'here.', 'You can read about it '];
export const link3 = [''];
export const link4 = [''];
export const whatNext = ["The project needs to insert readings into a relational database, for data visualisation, " +
"alerts and to continue programming the logic."];

// For the heading style
export let titleStyle = {
    margin: "0% 0px 100px",
    textAlign: 'center'
};

export let headerStyle = {
    margin: '40px 0 200px 0',
    paddingLeft: '10%',
    paddingRight: '10%',
    color: 'white',
    width: '100%'
};
// Default probe parameters
export const defaultTemp = [11.5];
export const defaultPh = [7.25];
export const defaultNh3 = [0.05];

// Alert messages

//TEMP
export const tempLowTitle = 'LOW TEMPERATURE';
export const tempLowCritical = 'You have critically low water temperature. ' +
    'At extremely low water temperatures your fish can freeze to death. ' +
    'Your system is at risk. Take immediate action.';

export const tempLowWarn = 'You have low water temperature. At low water temperatures your fish stop\n' +
    'feeding and grow very slowly. Action should be taken to increase the water temperature.';

export const tempOkTitle = 'TEMPERATURE OPTIMAL';
export const tempOk = 'Water temperature is optimal for trout. Keep the temperature between 10\n' +
    '                            and 18 degrees.';

export const tempHighWarn = 'You have high water temperature. At higher water temperatures fish stop\n' +
    '                                feeding\n' +
    '                                and are prone to low oxygen and higher ammonia concentrations in the water.\n' +
    '                                Action should be taken to reduce the water temperature.';
export const tempHighTitle = 'HIGH TEMPERATURE';
export const tempHighCritical = 'You have critically high water temperature. At these levels depleted\n' +
    '                                oxygen and\n' +
    '                                ammonia concentrations can be fatal to your fish. Your system is at risk. Take immediate\n' +
    '                                action.';

// PH

export const phLowTitle = 'LOW pH';
export const phLowCritical = 'You have critically low pH. At extremely low pH your fish can suffer\n' +
    '                        fatal acid\n' +
    '                        burns.\n' +
    '                        Your system is at risk. Take immediate action.';

export const phLowWarn = 'You have low pH levels. At low pH levels your fish may suffer from high\n' +
    '                                acidity.\n' +
    '                                Action should be taken to increase the pH levels.';
export const phOkTitle = 'pH OPTIMAL';
export const phOk = 'Water pH levels are optimal for trout. Keep the pH level between 6.5 and 8.';

export const phHighTitle = 'HIGH pH';
export const phHighWarn = 'You have high pH levels. At higher pH levels your fish may suffer from\n' +
    '                                alkalinity and be more subject to higher concentrations of ammonia.\n' +
    '                                Action should be taken to reduce the pH levels.';

export const phHighCritical = 'You have critically high pH. At extremely high pH your fish can suffer\n' +
    '                            fatal alkaline burns and be more prone to higher concentrations of ammonia.\n' +
    '                            Your system is at risk. Take immediate action.';

export function nh3TitleOk() {
    return <div>NH<sub>3</sub> OPTIMAL</div>;
}
export function nh3TitleHigh() {
    return <div>NH<sub>3</sub> HIGH</div>;
}
export const nh3Ok = ' Keep your ammonia levels as close to zero as possible. Also keep your water temperature' +
    ' and pH in their optimal ranges';

export const nh3Warn = ' At high levels fish may become prone to ammonia poisoning. Action\n' +
    '                                should be taken to reduce the ammonia content of your water.';

export const nh3Critical = 'At critically high levels of ammonia' +
    '                            Your fish are at high risk of ammonia poisoning.\n' +
    '                            Immediate action should be taken to reduce the ammonia content of your water.';