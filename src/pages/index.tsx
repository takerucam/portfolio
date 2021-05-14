import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Image src="/img.jpg" width={400} height={350} />
    </React.Fragment>
  )
}

export default Index
