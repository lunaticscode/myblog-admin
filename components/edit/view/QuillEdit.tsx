import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const Quill = dynamic( async() => await import('react-quill'), {ssr: false} ); 
const QuillEdit:React.FC = () => {
   
    const modules = {
        toolbar: [
          [{ 'header': [ 2, 3, true] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          ['clean']
        ],
    }
    
   const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
    ]  

    return (
        <>
        
        <div style={{height:'calc(100vh - 300px)'}}>
          <div className={"contentEdit_header"} >Content.</div>
          <Quill
          //height: '100%',
              style={{ height:'100%', width:'100%' }}
              theme="snow"
              modules={modules}
              formats={formats}
               
          />
        </div>
        </>
    )
}  

export default QuillEdit;
