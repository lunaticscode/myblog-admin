import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const Quill = dynamic( async() => await import('react-quill'), {ssr: false} ); 

const QuillEdit:React.FC = () => {
    const title_modules = {
        toolbar: [
          [{ 'header': [1, 2, true] }],
          //['bold', 'italic', 'underline','strike', 'blockquote'],
          //[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'color': [] }],          // dropdown with defaults from theme
          ['clean']
        ],
    }

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
        <div style={{height:'200px'}} >
        <Quill
              style={{height:'200px'}}
              theme="snow"
              modules={title_modules}
              formats={formats} 
          />
        </div>
        <div style={{height:'calc( 100vh - 200px )'}}>
          <Quill
              style={{height: 'calc( 100vh - 245px )', minWidth: '630px'}}
              theme="snow"
              modules={modules}
              formats={formats} 
          />
        </div>
        </>
    )
}  

export default QuillEdit;
