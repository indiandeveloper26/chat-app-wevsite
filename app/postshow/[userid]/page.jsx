import React from 'react'
import Postuserdata from '../postuserdata'

export default async function page({ params }) {


    let { userid } = await params





    return (
        <div>page

            <Postuserdata id={userid} />
        </div>
    )
}
