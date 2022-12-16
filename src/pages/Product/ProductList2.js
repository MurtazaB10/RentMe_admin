import React, { useEffect, useState } from "react";
import axios from "axios";
import Datatable from "../../components/DataTable/DataTable";
function ProductList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get("nurse/productList");
      setData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Datatable rows={data} columns={data} pageSize={5} id={Math.random()} />
    </div>
  );
}
export default ProductList;
