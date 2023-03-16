/** @format */
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const DeskPage = () => {
	useHideMenu(false);
	const navigate = useNavigate();
	const [user] = useState(getUserStorage());

	const goOut = () => {
		localStorage.clear();
		navigate('/login');
	};

	const nextTicket = () => {
		console.log('nextTicket');
	};

	if (!user.agent || !user.desk) {
		return <Navigate to='/login' />;
	}

	return (
		<>
			<Row>
				<Col span={20}>
					<Title level={2}>{user.agent}</Title>
					<Text>You are working on the desk: </Text>
					<Text
						type='success'
						style={{ fontSize: 18 }}
					>
						{user.desk}
					</Text>
				</Col>

				<Col
					span={4}
					flex='end'
				>
					<Button
						type='dashed'
						shape='round'
						onClick={goOut}
					>
						<CloseCircleOutlined />
						Go Out
					</Button>
				</Col>
			</Row>

			<Divider />

			<Row>
				<Col>
					<Text>You are dealing with ticket number: </Text>
					<Text
						style={{ fontSize: 20 }}
						type='danger'
					>
						55
					</Text>
				</Col>
			</Row>

			<Row>
				<Col
					offset={18}
					span={6}
				>
					<Button
						onClick={nextTicket}
						shape='round'
						type='primary'
					>
						Next
						<RightOutlined />
					</Button>
				</Col>
			</Row>
		</>
	);
};
