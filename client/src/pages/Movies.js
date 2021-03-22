import React from "react";
import TopNavBar from '../components/TopNavBar'
import { Typography, Table } from 'antd'
import 'antd/dist/antd.css'
import { get_movies } from '../fetcher'


const { Title } = Typography;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: text => <a>{text}</a>,
    },
    {
        title: 'Release Year',
        dataIndex: 'year',
        key: 'year',
        sorter: (a, b) => a.year - b.year,
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.rating - b.rating,
    }
];


export default class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        get_movies().then((response) => {
            this.setState({data: response})
        })
    }
    render() {
        return (
            <div>

                <TopNavBar />
                <Title style={{margin: '0 auto', width: 'fit-content', marginTop: '5vh'}} level={2}>Movies</Title>
                <Title style={{margin: '0 auto', width: 'fit-content', marginTop: '5vh'}} level={5}>IMDB movies with release year, and rating - can be sorted (ascending or descending) by name, year, or rating!</Title>

                <Table style={{ width: '80vw', margin: '0 auto', marginTop: '10vh' }} columns={columns} dataSource={this.state.data} />

            </div>
        );
    }
}