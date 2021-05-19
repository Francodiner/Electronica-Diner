import { useState, useEffect, useContext } from "react";
import { ItemDetail } from "../ItemDetail/itemDetail"
import { useParams, } from 'react-router'
import { getFirestore } from '../../firebase'

export const ItemDetailContainer = () => {

  const { productId } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const db = getFirestore()
    const ItemCollection = db.collection('items')
    const producto = ItemCollection.doc(productId)

    producto.get().then((doc) => {
      if (!doc.exists) {
        console.log("No existe");
      }
      setProduct({ productId: doc.id, ...doc.data() });
    }).catch((error) => console.error(error))
    console.log(product)
  }, [productId])

  return (
    <ItemDetail product = {product}
    />
  )
}
