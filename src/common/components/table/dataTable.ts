import {TableProps} from "antd";
import {BeerType} from "../../types/beerType";


interface ColumnI extends BeerType {
    key: string;
}

// название, сортирование колонок таблицы
export const columns: TableProps<ColumnI>['columns'] = [
    {
        title: 'Наименование',
        dataIndex: 'title',
        key: 'name',
        width: '20%',
    },
    {
        title: 'Алкоголь',
        dataIndex: 'alchool',
        key: 'alchool',
        defaultSortOrder: 'descend',
        sorter: (a, b) => {
            const valueA = parseFloat(a.alchool.replace('%', ''));
            const valueB = parseFloat(b.alchool.replace('%', ''));
            return valueA - valueB;
        },
        width: '10%',
    },
    {
        title: 'Страна',
        dataIndex: 'country',
        key: 'country',
        width: '15%',
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
    },
]