import React from 'react';
import { Layout } from 'antd';

import './HomePage.css';
import HeaderHM from '../Header/Header';
import FooterHM from '../Footer/Footer';
import RegisterContent from './RegisterContent/RegisterContent';
import PartnerLanding from './PartnerLanding/PartnerLanding';
import FutureLanding from './FutureLanding/FutureLanding';
import StatisticLanding from './StatisticLanding/StatisticLanding';
import StepLanding from './StepLanding/StepLanding';
import UlityLanding from './UlityLanding/UlityLanding';
import RewardLanding from './RewardLanding/RewardLanding';
import FeedbackLanding from './FeedbackLanding/FeedbackLanding';
import FooterBanner from './FooterBanner/FooterBanner';

const content = () => {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <HeaderHM />

            <Layout.Content>
                <RegisterContent />
                <PartnerLanding />
                <FutureLanding />
                <StatisticLanding />
                <StepLanding />
                <UlityLanding />    
                <RewardLanding />
                <FeedbackLanding />
                <FooterBanner />
            </Layout.Content>

            <FooterHM />
        </Layout>
    );
}

export default content;