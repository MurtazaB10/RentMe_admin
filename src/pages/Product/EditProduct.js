import React, { useState, useEffect } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
function EditProduct(props) {
  const {
    prod,
    setTrigger,
    trigger,
    setConfirmationSnackbarOpen,
    setConfirmationSnackbarMessage,
  } = props;
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: prod && prod.name,
      category: prod && prod.categoryy,
      description: prod && prod.description,
      quantity: prod && prod.quantity,
      manufacturer: prod && prod.manufacturer,
      rentalprice: prod && prod.rentalprice,
      costprice: prod && prod.costprice,
      deposit: prod && prod.deposit,
    },
  });
  useEffect(() => {
    let defaults = {
      name: prod && prod.name,
      category: prod && prod.categoryy,
      description: prod && prod.description,
      quantity: prod && prod.quantity,
      manufacturer: prod && prod.manufacturer,
      rentalprice: prod && prod.rentalprice,
      costprice: prod && prod.costprice,
      deposit: prod && prod.deposit,
    };
    reset(defaults);
  }, [prod, reset]);
  const onSubmit = async (data) => {
    console.log("i m on");
    const formdata = new FormData();
    const {
      name,
      rentalprice,
      costprice,
      deposit,
      category,
      description,
      manufacturer,
      quantity,
      file,
    } = data;
    formdata.append("name", name);
    formdata.append("rentalprice", rentalprice);
    formdata.append("costprice", costprice);
    formdata.append("deposit", deposit);
    formdata.append("description", description);
    formdata.append("manufacturer", manufacturer);
    formdata.append("quantity", quantity);
    formdata.append("category", category);
    console.log(prod._id);
    formdata.append("id", prod._id);
    for (let i = 0; i < file.length; i++) formdata.append("file", file[i]);
    const result = await axios
      .post("/admin/edit-product", formdata)
      .then((response) => {
        setConfirmationSnackbarMessage("Product updated succesfully!");
        setConfirmationSnackbarOpen(true);
        setTrigger(!trigger);
      })
      .catch((err) => {
        setConfirmationSnackbarMessage("Failed to Update!");
        setConfirmationSnackbarOpen(true);
      });
  };

  return (
    <div
      className="modal fade"
      id="editProductModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Product
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.name?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">
                      Product Name
                      <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Product Name"
                      {...register("name", {
                        required: "Product Name is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.category?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">
                      Category<sup>*</sup>
                    </label>
                    <select
                      className="form-control"
                      name="category"
                      id="category"
                      {...register("category", {
                        required: "category is required",
                      })}
                    >
                      {[
                        "education",
                        "electronic",
                        "fashion",
                        "furniture",
                        "Property",
                      ].map((cat, idx) => {
                        return (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.description?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">
                      Description<sup>*</sup>
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Enter Product Description"
                      {...register("description", {
                        required: "Product Description is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.manufacturer?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleInputName1">
                      Manufacturer<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="manufacturer"
                      className="form-control"
                      placeholder="Enter Product Manufacturer"
                      {...register("manufacturer", {
                        required: "Manufacturer is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.quantity?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">
                      Quantity<sup>*</sup>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      className="form-control"
                      placeholder="Enter Product quantity"
                      {...register("quantity", {
                        required: "Qunatity is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.rentalprice?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">
                      Rental Price<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="rentalprice"
                      className="form-control"
                      placeholder="Enter Product Rental Price"
                      {...register("rentalprice", {
                        required: "Product Rental Price is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.costprice?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">
                      Cost Price<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="costprice"
                      className="form-control"
                      placeholder="Enter Cost Price"
                      {...register("costprice", {
                        required: "Product Cost Price is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <p className="formErrors">{errors.deposit?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">
                      Deposit<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="deposit"
                      className="form-control"
                      placeholder="Enter Product Deposit"
                      {...register("deposit", {
                        required: "Product Deposit is required",
                      })}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <p className="formErrors">{errors.file?.message}</p>
                  <div className="form-group">
                    <label>File upload</label>
                    <input
                      type="file"
                      name="file"
                      {...register("file")}
                      className="file-upload-default"
                      multiple
                    />
                    <div className="input-group col-xs-12">
                      <input
                        type="text"
                        name="doc"
                        className="form-control file-upload-info"
                        disabled
                        placeholder="Upload Image/Video"
                      />
                      <span className="input-group-append">
                        <button
                          className="file-upload-browse btn btn-gradient-primary"
                          type="button"
                        >
                          Upload
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-gradient-primary mr-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
