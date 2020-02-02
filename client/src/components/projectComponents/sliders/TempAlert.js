import React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

    class TempAlert extends React.Component {
        createNotification = (type) => {
            return () => {
                switch (type) {
                    case 'info':
                        NotificationManager.info(<p>Message<br/>
                        <a href="https://www.w3schools.com">Visit W3Schools.com!</a> </p>,<h2>HELLO</h2>,0);
                     
                        break;
                    case 'success':
                        NotificationManager.success('Success message', 'Title here');
                        break;
                    case 'warning':
                        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                        break;
                    case 'error':
                        NotificationManager.error('Error message', 'Temperature is too low', 5000);
                        break;
                }
            };
        };

    
        render() {
            return (
                <div>
                  
                          {console.log(this.createNotification('info'))}
                    
                    <hr/>
                    <button className='btn btn-success'
                            onClick={this.createNotification('success')}>Success
                    </button>
                    <hr/>
                    <button className='btn btn-warning'
                            onClick={this.createNotification('warning')}>Warning
                    </button>
                    <hr/>
                    <button className='btn btn-danger'
                            onClick={this.createNotification('error')}>Error
                    </button>
        
                    <NotificationContainer/>
                </div>
            );
        }
    }

export default TempAlert;