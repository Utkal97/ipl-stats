import React from 'react';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { Container } from 'reactstrap'

//Calculate column width based on Headings
const getColumnWidth = (headerText) => {
    const maxWidth = 400, minWidth = 40;
    const magicSpacing = 4;
    return Math.min(maxWidth, Math.max(headerText.length, minWidth) * magicSpacing)
}

//Custom filter that is Case Insensitive
const caseInsensitiveFilter = (filter, row, column) => {
    const id = filter.pivotId || filter.id
    return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
}

class Table extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const { data, columns, pivot} = this.props;

        const fit_width_columns = columns.map(column => {           //Update column widths
            return {
                ...column,
                width:  getColumnWidth(column.Header)
            }
        })
        return (
            <Container>
                <h2>{this.props.heading}</h2>
                <ReactTable
                    className="-striped -highlight"
                    defaultFilterMethod={caseInsensitiveFilter}         //Default filter is case sensitive, so update it with custom filter
                    data={data}
                    filterable
                    columns={fit_width_columns}
                    pivotBy={pivot}                                     //Pivot comes from calling Component
                    defaultPageSize={20}
                    noDataText={"Irrelevent filters (or) No data available"}
                    showPaginationTop

                    style={{
                        height: "100vh",
                        overflow: "hidden",
                        alignSelf: "center"
                    }}
                    minRows = {0}                                       //Prevents empty rows render on the final page
                />
            </Container>
        )
    }
}

export default Table;