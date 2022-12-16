import { DataGrid, GridToolbar } from "@material-ui/data-grid";
// import useStyles from './index';

const Datatable = (props) => {
  const { rows, columns, pageSize, id } = props;

  return (
    <div style={{ height: 420, width: "100%" }}>
      <DataGrid
        id={id}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        pagination
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};
export default Datatable;
