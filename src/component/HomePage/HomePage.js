import React from 'react';
import { Layout } from 'antd';

import './HomePage.css';
import RegisterContent from './RegisterContent/RegisterContent';
import PartnerLanding from './PartnerLanding/PartnerLanding';
import FutureLanding from './FutureLanding/FutureLanding';

const content = () => (
    <Layout.Content>
        <RegisterContent />
        <PartnerLanding />
        <FutureLanding />
    </Layout.Content>
);

export default content;