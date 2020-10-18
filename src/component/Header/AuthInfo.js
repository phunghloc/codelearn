import React, { useState, useEffect } from 'react';
import { Button, Modal, Menu, Dropdown, notification } from 'antd';
import { DownOutlined, LoadingOutlined, ExclamationCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import Auth from '../../container/Auth/Auth';
import * as actions from '../../store/actions/actions';

const AuthInfo = (props) => {
    // TODO set ẩn hiện modal
    const [visible, setVisible] = useState(false);
    const [key, setKey] = useState('1');
    const menu = (
        <Menu>
          <Menu.Item danger onClick={() => {console.log('logout');props.onLogout();setVisible(false);}}>Logout</Menu.Item>
        </Menu>
    );
    
    //TODO: notification khi đăng ký/ đăng nhập
    const {shouldShowedHandler} = props;
    useEffect(() => {
        if (props.loading) {
            notification.open({
                message: `Đang gửi thông tin ${key === '1' ? 'đăng nhập' : 'đăng ký'}!`,
                key: 'updatable',
                icon: <LoadingOutlined style={{ color: '#108ee9' }} />,
                duration: 0,
                placement: 'topLeft',
                });
        }
        else if (props.error) {
            notification.open({
                message: key === '1' ? 'Sai tài khoản hoặc mật khẩu' : 'Tài khoản đã có người đăng ký hoặc không hợp lệ!',
                key: 'updatable',
                icon: <ExclamationCircleOutlined style={{ color: 'red' }} />,
                duration: 0,
                placement: 'topLeft',
                });
        }
        if (props.email && props.shouldShowed) {
            notification.open({
                message: `${ key === '1' ? "Đăng nhập" : "Đăng ký"} thành công`,
                key: 'updatable',
                icon: <CheckOutlined style={{ color: 'green' }} />,
                duration: 3,
                placement: 'topLeft',
            });
            shouldShowedHandler();
        }
    }, [props.loading, props.error, props.email, key, props.shouldShowed, shouldShowedHandler]);

    if (!props.email) return (
        <>
            <Button type="danger" style={{marginTop: '16px', marginRight: '8px'}}
                onClick={() => setVisible(true)}
            >
                Đăng nhập
            </Button>
            <Modal
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                >
                <Auth 
                    setKeyLogin={setKey}
                />
            </Modal>
        </>
    );

    return (
        <div className="AccountInfo" style={{marginRight: '16px'}}>
            <Dropdown overlay={menu}>
                <Button>
                    {props.email} <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        email: state.auth.email,
        shouldShowed: state.auth.shouldShowed,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.onLogout()),
        shouldShowedHandler: () => dispatch(actions.notifyFstShow()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthInfo);