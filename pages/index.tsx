import React, {useEffect, useState } from 'react';
import Link from 'next/link';
const Index : React.FC = () => {
  
  return( 
    <>
      <Link href="/edit">글쓰기</Link>  
      <Link href="/resume">이력서</Link>
    </>
  )
}
export default Index;