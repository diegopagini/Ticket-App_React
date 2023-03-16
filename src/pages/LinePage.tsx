/** @format */
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';

import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const data = [
	{
		ticketNo: 33,
		desk: 3,
		agent: 'Fernando Herrera',
	},
	{
		ticketNo: 34,
		desk: 4,
		agent: 'Melissa Flores',
	},
	{
		ticketNo: 35,
		desk: 5,
		agent: 'Carlos Castro',
	},
	{
		ticketNo: 36,
		desk: 3,
		agent: 'Fernando Herrera',
	},
	{
		ticketNo: 37,
		desk: 3,
		agent: 'Fernando Herrera',
	},
	{
		ticketNo: 38,
		desk: 2,
		agent: 'Melissa Flores',
	},
	{
		ticketNo: 39,
		desk: 5,
		agent: 'Carlos Castro',
	},
];

export const LinePage = () => {
	useHideMenu(true);

	return (
		<>
			<Title level={2}>With client: </Title>
			<Row>
				<Col span={12}>
					<List
						dataSource={data.slice(0, 3)}
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
									<Title># {item.ticketNo}</Title>
								</Card>
							</List.Item>
						)}
					/>
				</Col>
				<Col span={12}>
					<Divider>History</Divider>
					<List
						dataSource={data.slice(3)}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={`Ticket # ${item.ticketNo}`}
									description={
										<>
											<Text type='secondary'>In desk </Text>
											<Tag color='magenta'>{item.ticketNo}</Tag>
											<Text type='secondary'>Agent </Text>
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
