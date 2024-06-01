import { Table } from "antd";
import React, { useMemo, useState } from "react";
import { Excel } from "antd-table-saveas-excel";
import Loading from "../../global/LoadingComponent/LoadingComponent";

const TableComponent = (props) => {
    const {
        selectionType = "checkbox",
        data: dataSource = [],
        isPending = false,
        columns = [],
        handleDeleteMany,
    } = props;
    const [rowSelectedKeys, setRowSelectedKeys] = useState([]);
    const newColumnExport = useMemo(() => {
        const arr = columns?.filter((col) => col.dataIndex !== 'action')
        return arr
    }, [columns])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setRowSelectedKeys(selectedRowKeys);
        },
        // getCheckboxProps: (record) => ({
        //   disabled: record.name === "Disabled User",
        //   // Column configuration not to be checked
        //   name: record.name,
        // }),
    };
    const handleDeleteAll = () => {
        handleDeleteMany(rowSelectedKeys);
    };
    const exportExcel = () => {
        const excel = new Excel();
        excel
            .addSheet("test")
            .addColumns(newColumnExport)
            .addDataSource(dataSource, {
                str2Percent: true
            })
            .saveAs("Excel.xlsx");
    };

    const [isDeleteHovered, setIsDeleteHovered] = useState(false);
    const [isExportHovered, setIsExportHovered] = useState(false);

    const handleDeleteMouseEnter = () => {
        setIsDeleteHovered(true);
    };

    const handleDeleteMouseLeave = () => {
        setIsDeleteHovered(false);
    };

    const handleExportMouseEnter = () => {
        setIsExportHovered(true);
    };

    const handleExportMouseLeave = () => {
        setIsExportHovered(false);
    };

    return (
        <Loading isPending={isPending}>
            {!!rowSelectedKeys.length && (
                <div
                    style={{
                        background: isDeleteHovered ? '#FF6347' : '#4B494E',
                        color: '#B9D431',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background 0.3s ease',
                        marginBottom: '5px'
                    }}
                    onClick={handleDeleteAll}
                    onMouseEnter={handleDeleteMouseEnter}
                    onMouseLeave={handleDeleteMouseLeave}
                >
                    Xóa tất cả
                </div>
            )}
            <button
                onClick={exportExcel}
                style={{
                    background: isExportHovered ? '#FF6347' : '#4B494E',
                    color: '#B9D431',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'background 0.3s ease',
                    marginBottom: '10px'
                }}
                onMouseEnter={handleExportMouseEnter}
                onMouseLeave={handleExportMouseLeave}
            >
                Export Excel
            </button>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={dataSource}
                {...props}
            />
        </Loading>
    );
};

export default TableComponent;
