import React from 'react';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

class Table extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const { data, columns, pivot} = this.props;

        return (
            <ReactTable
                className="-striped -highlight"
                data={data}
                filterable
                columns={columns}
                pivotBy={pivot}
                defaultPageSize={20}
                noDataText={"Irrelevent filters (or) No data available"}
                showPaginationTop

                style={{
                    height: "100vh",
                    overflow: "hidden"
                }}

            />
        )
    }
}

export default Table;