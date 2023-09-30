import React from 'react';
import { useState, useEffect } from 'react';  
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';

function Inventario() {

  const [items, setItems] = useState(null)
  useEffect(() => {
    // https://fakeapi.platzi.com/
    fetch('https://kaoxdc.pythonanywhere.com/api/elemento/')
    // fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log(setItems(data)) )
    //console.log(data);
  }, [])
  
  return (
    <>
      
      <Layout>
        <p className="text-3xl text-gray-700 pb-10">
        MATERIALES
        </p>

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                items?.map(item => (
                    <Card key={item.id} data = {item}/>
                ))
            }

        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export default Inventario
