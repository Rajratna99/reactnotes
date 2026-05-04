import React from 'react'
import { useState } from 'react'

function App() {
    FormData
    const [formdata, setformdata] = useState({ title: "", desc: "" })
    const [notes, setnotes] = useState([])

    const submitHandle = (e) => {
        e.preventDefault()
        if (!formdata.title || !formdata.desc) return
        setnotes([...notes, { created: Date.now(), ...formdata }])
        setformdata({ title: "", desc: "" })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value })
    }

    return (
        <div className='h-screen bg-gray-600 lg:flex text-white'>
            <form className='p-10 flex flex-col gap-4 lg:w-1/2' onSubmit={submitHandle}>
                <h1 className='text-4xl font-bold mb-2'>Enter Notes</h1>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='Enter Notes Heading'
                    value={formdata['title']}
                    onChange={handleChange}
                    className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
                />
                <textarea
                    name="desc"
                    id="desc"
                    placeholder='Enter Descripstion'
                    value={formdata['desc']}
                    onChange={handleChange}
                    className='px-5 h-20 w-full font-medium py-2 border-2 outline-none rounded'
                />
                <button className='border-2 px-5 py-2 rounded bg-green-100 active:scale-95 text-black outline-none'>Add Notes</button>
            </form>
            <div className='lg:border-l-2 lg:w-1/2 lg:p-5 p-10'>
                <div className="w-full">
                    <h1 className='text-xl font-semibold mb-4 p-2'>Your Notes</h1>
                    <table className=' table-auto w-full text-center border-collapse '>
                        <thead className='bg-blue-950 '>
                            <tr >
                                <th className='px-6 py-3 text-sm font-semibold '>Created At</th>
                                <th className='px-6 py-3 text-sm font-semibold ' >Title</th>
                                <th className='px-6 py-3 text-sm font-semibold '>Desc</th>
                            </tr>
                        </thead>
                        <tbody >
                            {notes.map((note, index) => (
                                <tr className="border-b hover:bg-gray-100 hover:text-black transition items-center">
                                    <td className='py-3  w-1/3'>{new Date(note.created).toLocaleString().trim()} </td>
                                    <td className='py-3 '>{note.title} </td>
                                    {/* <td className='py-3'>{note.created} </td> */}
                                    <td className='py-3 '>{note.desc} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default App