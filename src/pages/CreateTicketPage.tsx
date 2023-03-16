/** @format */
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';

import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CreateTicketPage = () => {
	useHideMenu(true);

	const newTicket = () => {
		console.log('newTicket');
	};

	return (
		<>
			<Row>
				<Col
					span={14}
					offset={6}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Title level={3}>Press button to new ticket</Title>
					<Button
						type='primary'
						shape='round'
						icon={<DownloadOutlined />}
						size='large'
						onClick={newTicket}
					>
						New ticket
					</Button>
				</Col>
			</Row>
			<Row style={{ marginTop: 100 }}>
				<Col
					span={14}
					offset={6}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Text>Your number</Text>
					<br />
					<Text
						type='success'
						style={{
							fontSize: 55,
						}}
					>
						5
					</Text>
				</Col>
			</Row>
		</>
	);
};
