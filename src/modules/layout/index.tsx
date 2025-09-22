import '../../styles/layout.css'
import subjectJSON from '../../data/subject-info.json'
import { Subject } from '../../types/subject.types'
import { MenuProps, Typography, Layout, Menu, theme } from 'antd'
import { FC, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { QuestionCircleOutlined, MailOutlined, HomeOutlined, TeamOutlined, AndroidOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const { Title } = Typography

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items = [
  getItem(<Link to="/"> Inicio </Link>, '1', <HomeOutlined />),
  getItem(<Link to="/students"> Estudiantes 2024 </Link>, '2', <TeamOutlined />),
  getItem(<Link to="/sw-characters"> Personajes SW </Link>, '3', <AndroidOutlined />),
  getItem(<Link to="/contact"> Contacto </Link>, '4', <MailOutlined />),
  getItem(<Link to="/about"> Acerda de </Link>, '7', <QuestionCircleOutlined />),
]

export const LayoutCustom: FC = () => {
  const subject = subjectJSON as Subject

  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}></Menu>
      </Sider>
      <Layout style={{ width: '100%' }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title>Hola clase de {subject.name}</Title>
        </Header>
        <Content
          style={{
            margin: '20px 16px',
          }}
        >
          <div
            style={{
              height: '100%',
              background: colorBgContainer,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
