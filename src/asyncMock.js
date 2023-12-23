import {doc, getDoc} from 'firebase/firestore'
import {db} from './services/firebase/firebaseConfig'

const products = [
    {
        id: '1',
        name: 'Buzo',
        price: 1000,
        category: 'buzos',
        img: 'https://admin.highroyal.com.ar/Content/UploadDirectory/Products/103/image_f5cff283-ef71-48fb-ac4b-dbe22a469fb1.jpg',
        stock: 25,
        description: 'Buzo con capucha. Liso'
    },
    { id: '2', name: 'Remera', price: 800, category: 'remeras', img: 'https://acdn.mitiendanube.com/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.jpg', stock: 20, description:'Remera lisa' },
    { id: '3', name: 'Short', price: 1200, category: 'shorts', img: 'https://acdn.mitiendanube.com/stores/001/703/082/products/adobe_post_20211009_0909480-88619974794541551-bb7930d802b6e3fc1616345587372014-640-0.png', stock: 30, description:'Short de baño ajustable' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = async (productId) => {
    // get product where product id firebase
    const productRef = doc(db, 'products', productId)
    const productSnap = await getDoc(productRef)
    return productSnap.data()
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productsCategory))
        }, 500)
    })
}