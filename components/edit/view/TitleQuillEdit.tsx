import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
import { editTitleState } from '../../../recoil/status';
import { useRecoilState } from 'recoil';

const Quill = dynamic( async() => await import('react-quill'), {ssr: false} ); 

const TitleQuillEdit: React.FC = () => {

    const [ editTitleValue, setEditTitleValue ] = useRecoilState<string>(editTitleState)

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
    const title_formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
    ]
    
    const onChangeEditTitle = ( html: string ) => {
        //console.log(html);
        setEditTitleValue( html );
    }
    return(
        <>
        <div style={{height:'100px', marginBottom:'40px'}} >
           <div className={"titleEdit_header"} >
               Title.
           </div>
           <Quill
              style={{height:'100px', width:'100%', border:'none !important'}}
              theme="bubble"
              onChange ={ onChangeEditTitle }
              modules={title_modules}
              formats={title_formats} 
          /> 
        </div>
      
        </>
    )
}

export default TitleQuillEdit;