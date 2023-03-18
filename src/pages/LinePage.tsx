/** @format */
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';

import { SocketContext } from '../context/socketContext';
import { getTickets } from '../helpers/getTickets';
import { useHideMenu } from '../hooks/useHideMenu';
import { Ticket } from '../interfaces/ticket.interface';

const { Title, Text } = Typography;

export const LinePage = () => {
	useHideMenu(true);

	const { socket } = useContext(SocketContext);
	const [tickets, setTickets] = useState<Ticket[]>([]);

	useEffect(() => {
		socket.on('ticket-assigned', (assigned: Ticket[]) => {
			setTickets(assigned);
		});

		return () => {
			socket.off('ticket-assigned');
		};
	}, [socket]);

	useEffect(() => {
		getTickets().then(({ tickets }) => {
			setTickets(tickets);
		});
	}, []);

	return (
		<>
			<Title level={2}>With client: </Title>
			<Row>
				<Col span={12}>
					<List
						dataSource={tickets.slice(0, 3)}
						renderItem={(item) => (
							<List.Item>
								<Card
									style={{
										width: 300,
										marginTop: 16,
									}}
									actions={[
										<Tag color='volcano'>{item.agent}</Tag>,
										<Tag color='magenta'>Desk: {item.desk}</Tag>,
									]}
								>
									<Title># {item.number}</Title>
								</Card>
							</List.Item>
						)}
					/>
				</Col>
				<Col span={12}>
					<Divider>History</Divider>
					<List
						dataSource={tickets.slice(3)}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={`Ticket # ${item.number}`}
									description={
										<>
											<Text type='secondary'>In desk: </Text>
											<Tag color='magenta'>{item.number}</Tag>
											<Text type='secondary'>Agent: </Text>
											<Tag color='volcano'>{item.agent}</Tag>
										</>
									}
								/>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</>
	);
};
