import styles from './PrefectureGroup.module.css'
import React, { Suspense } from 'react'
import { Prefecture } from '../../types/types'
import Spinner from '../spinner/Spinner'
import PrefectureItem from './PrefectureItem'

const getPrefectureAll = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RESAS_PREFECTURES_URL}`,
    {
      headers: new Headers({
        'X-API-KEY': process.env.RESAS_API_KEY as string
      }),
      cache: 'no-store'
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch prefectures')
  }

  const prefectures: Prefecture = await response.json()
  return prefectures
}

export default async function PrefectureGroup() {
  const data = await getPrefectureAll()
  const prefectures = data.result

  return (
    <section className={styles.container}>
      <p className={styles.title}>都道府県</p>
      <Suspense fallback={<Spinner />}>
        <ul className={styles.prefecture_group}>
          {prefectures.map((prefecture) => (
            <PrefectureItem key={prefecture.prefCode} prefecture={prefecture} />
          ))}
        </ul>
      </Suspense>
    </section>
  )
}
