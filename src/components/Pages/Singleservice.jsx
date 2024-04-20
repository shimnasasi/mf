import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom';
import MFsingleService from '../Layout/MFsingleService';
import { serviceData } from '../../Utils/config';

function Singleservice() {
    const{id}=useParams()

    return (
        <Layout>
            {serviceData.filter((item)=>item.id==id).map((list,index)=>(
                <MFsingleService key={index} value={list.name} details={list.para} image1={list.img1}
                image3={list.img3}  image2={list.img2} services={list.services}/>
            ))}
        </Layout>
    )
}

export default Singleservice