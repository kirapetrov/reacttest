import React from 'react'

export function Addresses(props) {

    const handleIpAddressChange = e => props.onIpAddressChange(e.target.value);
    const handleNginxAddressChange = e => props.onNginxAddressChange(e.target.value);
    const handleActivityChange = e => props.onActivityChange(); 
    
    return (
        <div>
            <h4>Адрес сервера</h4>

            <div>
                <label className="label-for-input">Ip-адрес:</label>

                <br />

                <input
                    className="simple-input"
                    value={props.ipAddress}
                    onChange={handleIpAddressChange} />

                <br />

                <label className="label-for-input">Nginx:</label>

                <br />

                <input
                    className="simple-input"
                    value={props.nginxAddress}
                    onChange={handleNginxAddressChange} />

                <br />

                <input type="submit" value="Применить" />

                <br />

                <input 
                    type="button" 
                    value="Назад к авторизации"
                    className="submit-as-link"                    
                    onClick={handleActivityChange}  />
            </div>
        </div>
    );
}