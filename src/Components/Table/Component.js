import React from 'react';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

class Table extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const data = this.props.data, columns = this.props.columns;

        return (
            <ReactTable
                className="-striped -highlight"
                data={data}
                filterable
                columns={columns}
                defaultPageSize={20}
                noDataText={"Irrelevent filters (or) No data available"}
                showPaginationTop
            />
        )
    }
}

export default Table;