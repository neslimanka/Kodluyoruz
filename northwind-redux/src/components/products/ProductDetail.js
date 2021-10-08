import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({categories, product, onSave, onChange,errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="title"
        label="Product Name"
        value={product.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
           value:category.id,
           text:category.categoryName

        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
       <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.price}
        onChange={onChange}
        error={errors.price}
      />
       <TextInput
        name="descripton"
        label="Description"
        value={product.description}
        onChange={onChange}
        error={errors.description}
      />
   

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
