/** @format */
import { CopyOutlined, DesktopOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Navigate } from 'react-router';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { CreateTicketPage, DeskPage, LinePage, LoginPage } from './';

const PAGES = [
	{
		icon: <UserOutlined />,
		key: '1',
		label: 'Login',
		path: '/login',
		element: <LoginPage />,
	},
	{
		icon: <NumberOutlined />,
		key: '2',
		label: 'Line',
		path: '/line',
		element: <LinePage />,
	},
	{
		icon: <CopyOutlined />,
		key: '3',
		label: 'Create Ticket',
		path: '/create',
		element: <CreateTicketPage />,
	},
	{
		icon: <DesktopOutlined />,
		key: '4',
		label: 'Desk',
		path: '/desk',
		element: <DeskPage />,
	},
];

const { Sider, Content } = Layout;

export const RouterPage = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<BrowserRouter>
			<Layout
				style={{
					height: '100vh',
				}}
			>
				<Sider hidden={false}>
					<Menu
						theme='dark'
						mode='inline'
						defaultSelectedKeys={['1']}
					>
						{PAGES.map((page) => (
							<Menu.Item
								key={page.key}
								icon={page.icon}
							>
								<Link to={page.path}>{page.label}</Link>
							</Menu.Item>
						))}
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Content
						style={{
							margin: '1.5rem 1rem',
							padding: 24,
							minHeight: 280,
							background: colorBgContainer,
						}}
					>
						<Routes>
							{PAGES.map(({ key, path, element }) => (
								<Route
									key={key}
									path={path}
									element={element}
								></Route>
							))}

							<Route
								path='*'
								element={<Navigate to='/login' />}
							/>
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</BrowserRouter>
	);
};
