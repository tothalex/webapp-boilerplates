import React from 'react'
import { NextPage } from 'next'

import { Dummy } from '~shared/types/dummy'

type HomePageProps = {
  dummy: Dummy
}

const Home: NextPage<HomePageProps> = ({ dummy }) => {
  return <h1>Name: {dummy.name}</h1>
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/dummy')
  const dummy = await res.json()
  return { props: { dummy } }
}

export default Home
