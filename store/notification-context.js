import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
	notification: null,
	showNotification: (notificationData) => {},
	hideNotification: () => {},
});

export function NotificationContextProvider(props) {
	const [notification, setNotification] = useState(null);

	useEffect(() => {
		if (notification && notification.status !== 'pending') {
			const timer = setTimeout(() => {
				setNotification(null);
			}, 5000);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [notification]);

	function showNotificationHandler(notificationData) {
		setNotification(notificationData);
	}

	function hideNotificationHandler() {
		setNotification(null);
	}

	const context = {
		notification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
}

export default NotificationContext;
