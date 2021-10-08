import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getCategories} from "../../redux/actions/categoryActions";
import {saveProduct} from "../../redux/actions/productsActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products, //-->bunlar bizim aksiyonlarımız
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props //-->mevcut propları genişletiyor
  
}) {
  const [product, setProduct] = useState({ ...props.product }); //product statetini ,setProduct fonksyiyonu ile set edebilirim.
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  },//butun lıfecycle ı yönetmeye çalıştıgından uygulamayı calıstırfııgmız zaman sonsuz bır dönguye gırıyor
  [props.product]);//bunu önlemek amacıyla bunu yazıyoruz.-->props.product ugulamada DOM a yerleştıgı zaman
  //bunu bitirebilrisin demek.
  
  function handleChange(event){
      const{name,value}=event.target; //textbox ın name ve valuesini atadık
      setProduct(previousProduct=>({
          ...previousProduct,
          [name]:name==="categoryId"?parseInt(value,10):value
      }))

      //önceki productın name değerini kontrol ediyoruz.Eğer alan kategorıId alanı varsa ozaman değeri
      //bir integer a ceviriyoruz.Çünkü bizim kategori Id alanımız int olması gerekıyor.aksı halde 
      //integer değilse value değerini ver 
  }

  function handleSave(event){//butona tıklandıgında yapılacak operasyon
    event.preventDefault(); //sayfanın refresh olmasını engellenıyor
    saveProduct(product).then(()=>{ //kaydetmeyı yaptıktan sonra..
       history.push("/")//daha önce geldıgımız sayfalara yönlendırme yapıyor
    })
  }

  return (
      <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} />
  )
}

const mapDispatchToProps={ //redux a bağlanmak için,reducerlara bağ operasyonları bul
    getCategories,saveProduct
}

export function getProductById(products,productId){ //bulunmak istenen ürün ve id si

  let product=products.find(product=>product.id===productId) || null; 
  return product;

}


//reduxtaki mevcur stateleri bağlamak için 
//ownProps:componentlerın kendı içinde barındırdıkları proplara denk geliyor.
function mapStateToProps(state,ownProps) {
    const productId=ownProps.match.params.productId  //git parametrelere bak ordan productId yi çek
    const product=productId && state.productListReducer.length>0 //statedeki ürünlrin içriisnden aradığım urunu bulmaya çalışacagım
    ?getProductById(state.productListReducer,productId)//eğer aradıgım urun varsa? 
    :{}
    return {
        product,
        products:state.productListReducer,
        categories:state.categoryListReducer
    }

}
export default connect(mapStateToProps ,mapDispatchToProps)(AddOrUpdateProduct)
