/** @format */
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const PAGES = [
	{
		key: '1',
		label: 'Login',
		icon: <UserOutlined />,
	},
	{
		key: '2',
		label: 'Line',
		icon: <UserOutlined />,
	},
	{
		key: '3',
		label: 'Create Ticket',
		icon: <UserOutlined />,
	},
];

const { Sider, Content } = Layout;

export const RouterPage = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout
			style={{
				height: '100vh',
			}}>
			<Sider>
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['1']}
					items={PAGES}
				/>
			</Sider>
			<Layout className='site-layout'>
				<Content
					style={{
						margin: '1.5rem 1rem',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}>
					Content
				</Content>
			</Layout>
		</Layout>
	);
};
