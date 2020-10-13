import React from 'react';
import { Layout } from 'antd';

import './HomePage.css';
import RegisterContent from './RegisterContent/RegisterContent';
import PartnerLanding from './PartnerLanding/PartnerLanding';
import FutureLanding from './FutureLanding/FutureLanding';
import StatisticLanding from './StatisticLanding/StatisticLanding';
import StepLanding from './StepLanding/StepLanding';
// import UlityLanding from './UlityLanding/UlityLanding';
import RewardLanding from './RewardLanding/RewardLanding';
import FeedbackLanding from './FeedbackLanding/FeedbackLanding';
import FooterBanner from './FooterBanner/FooterBanner';

const content = () => (
    <Layout.Content>
        <RegisterContent />
        <PartnerLanding />
        <FutureLanding />
        <StatisticLanding />
        <StepLanding />
        {/* <UlityLanding /> */}
        <RewardLanding />
        <FeedbackLanding />
        <FooterBanner />
    </Layout.Content>
);

export default content;