import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import {
//   DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
//   TeamOutlined,
//   UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  // const [ collapsed, setCollapsed] = useState(false);

  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };
  // <Menu.Item key="9" icon={<FileOutlined />} />


  return (
    <Layout style={{width: '100%', maxWidth: 1200, margin: 'auto' }}>
      <Sider className="Sider-hm" >
        <Menu defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor: 'white', height: '100%'}}>
          {/* <div className="holder"> <FileOutlined /> </div> */}
          <Menu.Item icon={<PieChartOutlined />} style={{color: 'white'}}> Quay lại </Menu.Item>
          {Array.from(Array(15), (value, index) => index + 1).map((item, index) => {
            return <Menu.Item key={index} icon={<FileOutlined />}> Question {item} </Menu.Item>
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout Content-hm">
        <Header className="site-layout-background" style={{ padding: '0 12px', }} >
          <p style={{color: 'white'}}>Bài luyện tập số 69</p>
        </Header>
        <Content style={{ margin: '0', backgroundColor:'white' }}>
          <div className="site-layout-background" style={{ padding: '24px', minHeight: 360 }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum molestias voluptatem quos deleniti quisquam officia qui reiciendis nihil, illo quae, totam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores ex a dolores temporibus incidunt veniam minima corporis vero alias delectus nesciunt sed at doloremque, commodi dolorem nemo. Omnis, nesciunt! blanditiis laborum accusamus ad excepturi dignissimos maxime?</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer Holder</Footer>
      </Layout>
    </Layout>
  );

}

export default App;
