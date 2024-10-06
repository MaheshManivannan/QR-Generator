import { useState } from 'react';
const Qrcode = () => {
    const [link,setLink] = useState("")
    const [size,setSize] = useState(100)
    const qrLink = () => {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(link)}`
        setLink(url)
    }
    return (
        <>
        <div className="qr-container">
        <h1>QR Generator</h1>
        <img src={link} /> <br />
        <label htmlFor="link">Enter/Paste Link: </label>
        <input type="text" 
               placeholder='Paste the link here'
               value={link}
               onChange={(e) => setLink(e.target.value)}
        /> <br />
        <label htmlFor="size">Image Size (eg:150): </label>
        <input type='text'
               placeholder='Enter the required size of the image'
               value={size}
               onChange={(e) => setSize(e.target.value)}
        /> <br />
        <button type='button' onClick={() => qrLink()}>Generate QR</button>
        </div>
        </>
    )
}
export default Qrcode;