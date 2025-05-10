import { Drawer, Descriptions, Typography, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';
import './ProfilePanel.css';

const {Text } = Typography;

interface ProfilePanelProps {
    visible: boolean;
    onClose: () => void;
}

export const ProfilePanel = ({ visible, onClose }: ProfilePanelProps) => {
    const { user } = useAuth();

    return (
        <Drawer
            title={
                <Space>
                    <Avatar
                        icon={<UserOutlined />}
                        size="large"
                        style={{ backgroundColor: 'var(--purple)' }}
                    />
                    <Text strong style={{ color: 'var(--header-text)' }}>Мой профиль</Text>
                </Space>
            }
            placement="right"
            onClose={onClose}
            open={visible}
            width={350}
            className="profile-drawer"
            headerStyle={{ background: 'var(--dark-bg)', borderBottom: '1px solid var(--dark-border)' }}
            bodyStyle={{ background: 'var(--page-bg)', color: 'var(--text-color)' }}
        >
            <div className="profile-content">
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="Имя" labelStyle={{ color: 'var(--accent)' }}>
                        <Text style={{ color: 'var(--text-color)' }}>{user?.name}</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Фамилия" labelStyle={{ color: 'var(--accent)' }}>
                        <Text style={{ color: 'var(--text-color)' }}>{user?.surname}</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Email" labelStyle={{ color: 'var(--accent)' }}>
                        <Text style={{ color: 'var(--text-color)' }}>{user?.email}</Text>
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </Drawer>
    );
};