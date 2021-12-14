import Header from './main-header';

function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}

export default Layout;
