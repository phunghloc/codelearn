import React from 'react';
import { Layout } from 'antd';

import './AllPractice.scss';
import HeaderHM from '../../component/Header/Header';
import FooterHM from '../../component/Footer/Footer';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import BannerPractice from './BannerPractice/BannerPractice';
import RouteAllPractice from './RouteAllPractice'

const AllPractice = (props) => {
    return (
        <Layout className="AllPractice-Container">
            <HeaderHM addInClass="Header-Practice" />

            <Layout.Content className="AllPractice">
                <Breadcrumb />
                <BannerPractice />

                <RouteAllPractice {...props} />
                    
                
                

            </Layout.Content>

            <FooterHM />
        </Layout>
    )
}

export default AllPractice;