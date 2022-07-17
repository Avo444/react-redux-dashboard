import { useSelector } from 'react-redux/es/exports';
import { getOwner } from "../../features/users/usersSlice";

export default function Message({messages}) {
    const Owner = useSelector(getOwner);
    return messages.map((message) => {
        let get = Owner.find((user) => user.id === message.ownerid);
        return (
            <div className="message-box" key={message.id}>
                <img src={get.picture} alt="profile image" />
                <div className="message-content">
                    <div className="message-header">
                    <div className="name">{
                        get.name
                    }</div>
                    </div>
                    <p className="message-line">{message.message}</p>
                    <p className="message-line time">{message.date}</p>
                </div>
            </div>
        );
    })
}