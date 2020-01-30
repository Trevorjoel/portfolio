import React from 'react'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { store } from 'react-notifications-component';

    class Alert extends React.Component {
        constructor(props) {
            super(props);
            this.addNotification = this.addNotification.bind(this);

        }
    
        addNotification() {
            this.store.addNotification({});
        }
    
        render() {
            return (
                <div className="app-content">
                    <button
                        onClick={() => {
                            store.addNotification({
                                title: 'Dropbox',
                                message: 'Files were synced',
                                type: 'warning',                         // 'default', 'success', 'info', 'warning'
                                container: 'bottom-right',                // where to position the notifications
                                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                                dismiss: {
                                    duration: 0
                                }
                            })
                        }}
                    >
                        Add notification
                    </button>
                </div>
            );
        }
    }

export default Alert;