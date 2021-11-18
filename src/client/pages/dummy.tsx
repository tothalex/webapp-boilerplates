import React from 'react'
import { NextPage } from 'next'

import { Dummy } from '~shared/types/dummy'
import { config } from '~client/utils/config'

type HomePageProps = {
  dummy: Dummy
}

const Home: NextPage<HomePageProps> = ({ dummy }) => {
  return <h1>Dummy Name: {dummy.name}</h1>
}

export const getServerSideProps = async (): Promise<{ props: { dummy: Dummy } }> => {
  const res = await fetch(`${config.api}/dummy`)
  const dummy = await res.json()
  return { props: { dummy } }
}

export default Home
