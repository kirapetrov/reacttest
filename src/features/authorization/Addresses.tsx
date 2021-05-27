import React from 'react'

type Props = {
    ipAddress: string,
    nginxAddress: string

    onIpAddressChange(value: string): void 
    onNginxAddressChange(value: string): void
    onActivityChange(): void
}

export function Addresses(props: Props) {

    
    const handleIpAddressChange = (e: React.ChangeEvent<HTMLInputElement>): void => 
            props.onIpAddressChange(e.currentTarget.value);

    const handleNginxAddressChange = (e: React.ChangeEvent<HTMLInputElement>): void => 
            props.onNginxAddressChange(e.currentTarget.value);
            
    const handleActivityChange = (): void => props.onActivityChange(); 
    
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