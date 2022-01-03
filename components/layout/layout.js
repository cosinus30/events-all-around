import { useContext } from 'react';
import Header from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

function Layout({ children }) {
	const { notification } = useContext(NotificationContext);

	return (
		<>
			<Header />
			<main>{children}</main>
			{notification && (
				<Notification title={notification.title} message={notification.message} status={notification.status} />
			)}
		</>
	);
}

export default Layout;
