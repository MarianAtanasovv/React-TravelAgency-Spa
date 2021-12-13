import { Toast } from "react-bootstrap";
import {
  errorTypes,
  useNotificationContext,
} from "../../contexts/NotificationContext";
import "./Notification.css";

const Notification = () => {
  const { notification } = useNotificationContext();

  if (!notification.show) {
    return null;
  }

  return (
    <Toast className="notification d-inline-block m-1" bg={notification.type}>
      <Toast.Body className="notification-body">
        {notification.message}
      </Toast.Body>
    </Toast>
  );
};
export default Notification;
