/*
* Folder contains EmployeeTableAssets.js related to this projects
* */
// For the project heading:
import React from "react";

export const projectName = 'Aquaponics System Monitor (Prototype)';

export const projectPurpose = [`Build a user interface prototype for an application that monitors the water quality of an aquaponics system. `,
    'The prototype must include sliders to simulate the values taken from water quality testing probes for development of the application.',
    "End users will receive notifications and advice based on readings from the probes.",
    "Data from previous readings must be stored and visualised in a way appropriate to the needs of an aquaponics garden owner."];

export const projectDescription = ["This is a prototype of a larger Internet Of Things project."];
export const projectLearning = ['Researching, using & customising component packages, scoping styles to components, conditionally rendering content. ',
    'The importance of planning, researching, modular design and scalable software architecture are becoming very clear.'];
export const link1 = ['https://i.pinimg.com/originals/e7/f9/30/e7f930e8b244825f5dfc0a809918b618.jpg',
    "What is an aquaponics system?"];
export const link2 = ['https://fullstack-adventure.com/', 'here.', 'You can read about my project  '];
export const link3 = [''];
export const link4 = [''];
export const whatNext = ["The project needs to insert readings into a relational database, for data visualisation. Currently researching packages for data visualisation and gathering information to create a database schema."];
export const embedVideo = 'https://www.youtube.com/embed/PEal63zv-2M';
// For the heading style
export let titleStyle = {
    margin: "0% 0px 100px",
    textAlign: 'center'
};

export const headerStyle = {
    margin: '40px 0 200px 0',
    paddingLeft: '10%',
    paddingRight: '10%',
    color: 'white',
    width: '100%'
};



// Default probe parameters
export const defaultTemp = [12.5];
export const defaultPh = [7.5];
export const defaultNh3 = [0.05];

// Alert messages

//TEMP
export const paramNameTemp = 'TEMP';
export const paramNamePh = 'pH';

export const tempLowTitle = 'LOW';
export const tempLowCritical = 'You have critically low water temperature. ' +
    'At extremely low water temperatures your fish can freeze to death. ' +
    'Your system is at risk. Take immediate action.';

export const tempLowNotifyCritical = 'You have critically low water temperature. TAKE ACTION NOW!';

export const tempLowWarn = 'You have low water temperature. At low water temperatures your fish stop\n' +
    'feeding and grow very slowly. Action should be taken to increase the water temperature.';
export const tempLowNotifyWarn = 'You have low water temperature.';

export const tempOkTitle = 'OK';
export const tempOk = 'Water temperature is optimal for trout. Keep the temperature between 10\n' +
    '                            and 18 degrees.';
export const tempOkNotify = 'Congratulations. Water temperature is optimal for {fish species}.';
export const tempHighWarn = 'You have high water temperature. At higher water temperatures fish stop\n' +
    '                                feeding\n' +
    '                                and are prone to low oxygen and higher ammonia concentrations in the water.\n' +
    '                                Action should be taken to reduce the water temperature.';
export const tempHighNotifyWarn = 'You have elevated water temperature.';
export const tempHighTitle = 'HIGH';
export const tempHighCritical = 'You have critically high water temperature. At these levels depleted\n' +
    '                                oxygen and\n' +
    '                                ammonia concentrations can be fatal to your fish. Your system is at risk. Take immediate\n' +
    '                                action.';

export const tempHighNotifyCritical = 'You have critically high water temperature. TAKE ACTION NOW!';
// PH

export const phLowTitle = 'LOW';
export const phLowCritical = 'You have critically low pH. At extremely low pH your fish can suffer\n' +
    '                        fatal acid\n' +
    '                        burns.\n' +
    '                        Your system is at risk. Take immediate action.';
export const phLowNotifyCritical = 'You have critically low pH. TAKE ACTION NOW!';
export const phLowWarn = 'You have low pH levels. At low pH levels your fish may suffer from high\n' +
    '                                acidity.\n' +
    '                                Action should be taken to increase the pH levels.';
export const phLowNotifyWarn = 'You have low pH levels.';
export const phOkTitle = 'OK';
export const phOk = 'Congratulations! Water pH levels are optimal for {fish species}. Keep the pH level between 6.5 and 8.';

export const phHighTitle = 'HIGH';
export const phHighWarn = 'You have high pH levels. At higher pH levels your fish may suffer from\n' +
    '                                alkalinity and be old subject to higher concentrations of ammonia.\n' +
    '                                Action should be taken to reduce the pH levels.';
export const phHighNotifyWarn = 'You have elevated pH levels.';

export const phHighCritical = 'You have critically high pH. At extremely high pH your fish can suffer\n' +
    '                            fatal alkaline burns and be old prone to higher concentrations of ammonia.\n' +
    '                            Your system is at risk. Take immediate action.';
export const phHighNotifyCritical = 'You have critically high pH. TAKE ACTION NOW';
export function nh3TitleOk() {
    return <div>NH<sub>3</sub> OK</div>;
}
export function nh3TitleHigh() {
    return <div>NH<sub>3</sub> HIGH</div>;
}
export function nh3Title() {
    return <p>NH<sub>3</sub></p>;
}
export const nh3Ok = 'Congratulations! Ammonia levels are optimal for {fish species}.';

export const nh3Warn = ' At high levels fish may become prone to ammonia poisoning. Action\n' +
    '                                should be taken to reduce the ammonia content of your water.';
export const nh3NotifyWarn = 'You have elevated Ammonia levels.';
export const nh3Critical = 'At critically high levels of ammonia' +
    '                            Your fish are at high risk of ammonia poisoning.\n' +
    '                            Immediate action should be taken to reduce the ammonia content of your water.';
export const nh3NotifyCritical = 'You have critically high Ammonia levels. TAKE ACTION NOW.';

export const readingTitle = 'Success';
export const readingText = 'Reading Entered to database';
export const settingsText = 'Settings Entered to database';