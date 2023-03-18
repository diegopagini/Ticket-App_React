/** @format */
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { useContext, useState } from 'react';

import { SocketContext } from '../context/socketContext';
import { useHideMenu } from '../hooks/useHideMenu';
import { Ticket } from '../interfaces/ticket.interface';

const { Title, Text } = Typography;

export const CreateTicketPage = () => {
	useHideMenu(true);

	const [ticket, setTicket] = useState<Ticket>({} as any);

	const { socket } = useContext(SocketContext);

	const newTicket = () => {
		socket.emit('request-ticket', null, (ticket: Ticket) => {
			setTicket(ticket);
		});
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
			{ticket.id && (
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
							{ticket.number}
						</Text>
					</Col>
				</Row>
			)}
		</>
	);
};
