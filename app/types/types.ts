// 都道府県一覧を取得するAPIのレスポンスの型定義
export type Prefecture = {
  message: string | null
  result: [
    {
      prefCode: number
      prefName: string
    }
  ]
}
