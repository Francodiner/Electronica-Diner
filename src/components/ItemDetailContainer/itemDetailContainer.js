import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/itemDetail"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([
        {
            title: 'Ktm 390',
            price: '500.000',
            imagen: 'https://www.motofichas.com/images/articulos/ktm/rc_390/ktm-rc-390r-matriculada-serie-2018-perfil.jpg',
        }
    ])

    const [productLoad, setProductLoad] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
            console.log('Cargando producto')
            setTimeout(() => {
                resolve(setProductLoad(product))
            }, 2000)
        })
    }, [])

    return productLoad.map((item) => (
        <ItemDetail
          title={item.title}
          price={item.price}
          imagen={item.imagen}
        />
      ))
}
