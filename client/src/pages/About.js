
import React from "react";
import TopNavBar from '../components/TopNavBar'
import { Typography } from 'antd';


const { Title } = Typography;

export default class About extends React.Component {
    render() {
        return (
            <div>
                <TopNavBar />
                <Title level={2}>About</Title>

            </div>
        );
    }
}