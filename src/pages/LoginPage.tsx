/** @format */
import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const LoginPage = () => {
	useHideMenu(false);
	const [user] = useState(getUserStorage());

	const navigate = useNavigate();

	const onFinish = ({ agent, desk }: any) => {
		localStorage.setItem('agent', agent);
		localStorage.setItem('desk', desk);

		navigate('/desk');
	};

	if (user.agent && user.desk) {
		return <Navigate to='/desk' />;
	}

	return (
		<>
			<Title level={2}>Login</Title>
			<Text>Enter your name and desk number</Text>
			<Divider />

			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete='off'
			>
				<Form.Item
					label='Name'
					name='agent'
					rules={[{ required: true, message: 'Please input your name!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Desk'
					name='desk'
					rules={[{ required: true, message: 'Please input your desk number!' }]}
				>
					<InputNumber
						min={1}
						max={99}
					/>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button
						type='primary'
						htmlType='submit'
						shape='round'
					>
						<SaveOutlined />
						Login
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
